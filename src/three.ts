import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Renderer
 */
const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas,
  alpha: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 2000)
camera.position.y = 2
camera.position.z = 10

/**
 * Controls
 */
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight(0xff0000, 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

// const light1 = new THREE.HemisphereLight(new THREE.Color(0xffffff), new THREE.Color(0x000000), 1.0)
// scene.add(light1)

// const light2 = new THREE.PointLight(0xffffff, 1, 5, 0)
// light2.position.set(15, 1, 1)
// scene.add(light2)

/**
 * Objects
 */
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff6633 })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.x = box.position.y = box.position.z = 0.5
scene.add(box)

// Grid
const grid = new THREE.GridHelper(10, 10, 0xff0000, 0x666666)
scene.add(grid)

/**
 * Animation
 */
const clock = new THREE.Clock()
const animate = () => {
  // Time
  const elapsedTime = clock.getElapsedTime()

  // Update objects
  box.rotation.y = elapsedTime
  
  // Render
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()

/**
 * Resize
 */
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})