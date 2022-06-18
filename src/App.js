import {useState} from 'react'
import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'
import * as math from 'mathjs'

function App() {

  const [input, setInput] = useState('')

  const handleClear = () => {
    setInput('')
  }

  const addToInput = (val) => {
    setInput(input + val)
  }

  const handleEqual = () => {
    setInput(math.evaluate(input))
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className='row'>
          <Input input={input}></Input>
        </div>
        <div className='row'>
          <Button handleClick={addToInput} >7</Button>
          <Button handleClick={addToInput} >8</Button>
          <Button handleClick={addToInput} >9</Button>
          <Button handleClick={addToInput} >/</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput} >4</Button>
          <Button handleClick={addToInput} >5</Button>
          <Button handleClick={addToInput} >6</Button>
          <Button handleClick={addToInput} >*</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput} >1</Button>
          <Button handleClick={addToInput} >2</Button>
          <Button handleClick={addToInput} >3</Button>
          <Button handleClick={addToInput} >+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addToInput} >.</Button>
          <Button handleClick={addToInput} >0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput} >-</Button>
        </div>
        <div className='row' >
          <ClearButton 
            handleClear={handleClear}
          >
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
