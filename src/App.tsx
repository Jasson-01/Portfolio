import { useState } from "react"

const Display = ({counter}) => <div>{counter}</div>
 
const Boton = ({onClick, text}) =>  <button onClick={onClick}>{text}</button>

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prevCount => prevCount + 1);
  const handleDecrement = () => setCount(prevCount => prevCount - 1);
  const handleReset = () => setCount(0);
  
  return (
    <>
      <Display counter={count}></Display>
      <Boton onClick={handleIncrement} text="+"></Boton>
      <Boton onClick={handleDecrement} text="-"></Boton>
      <Boton onClick={handleReset} text="reset to zero"></Boton>

    </>
  )
}

export default App
