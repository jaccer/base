import { useEffect } from 'react'
import { createScene } from './three'

function App() {

  useEffect(() => {
    const canvas = document.getElementById('renderCanvas')
    if (canvas instanceof HTMLCanvasElement) {
      createScene(canvas)
    }

    return () => {
      //
    }
  }, [])

  return (
    <div>
      {/* USER INTERFACE */}
    </div>
  )
}

export default App
