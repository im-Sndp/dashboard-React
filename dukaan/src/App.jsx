import { useState } from 'react'
import './App.css'
import { Appbar } from './components/appbar/Appbar'
import { Body } from './components/body/Body'
import { Sidebar } from './components/sidebar/Sidebar'

function App() {

  const [isClick,setClick]  = useState(false);


  console.log(isClick);

  return (
    <div className='flex'>
      <Sidebar isClick={isClick} />
      <div>
        <Appbar setClick ={setClick} />
        <Body />
      </div>
    </div>
  )
}

export default App
