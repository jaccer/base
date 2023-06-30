import { moveUp } from "./three"

function App() {

  return (
    <div>
      <button onClick={() => {
        moveUp()
      }}>
        MOVE UP
      </button>
    </div>
  )
}

export default App
