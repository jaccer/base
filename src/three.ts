import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.Camera

let box: THREE.Mesh

export function createScene(canvas: HTMLCanvasElement) {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
  renderer.setSize(window.innerWidth, window.innerHeight)

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 2000)
  camera.position.y = 2
  camera.position.z = 10

  const controls = new OrbitControls(camera, renderer.domElement)
  // controls.autoRotate = true

  const light = new THREE.HemisphereLight(new THREE.Color(0xffffff), new THREE.Color(0x000000), 1.0)
  scene.add(light)

  const light2 = new THREE.PointLight(0xffffff, 1, 5, 0)
  light2.position.set(15, 1, 1)
  scene.add(light2)

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
  const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff6633 })
  box = new THREE.Mesh(boxGeometry, boxMaterial)
  box.position.x = box.position.y = box.position.z = 0.5
  scene.add(box)

  const grid = new THREE.GridHelper(10, 10, 0xff0000, 0x666666)
  scene.add(grid)

  animate()
}

function animate() {
  requestAnimationFrame(animate)

  // box.rotation.x += 0.01
  // box.rotation.y += 0.05

  renderer.render(scene, camera)
}