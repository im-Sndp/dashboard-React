import './App.css'
import { Sidebar } from './components/sidebar/Sidebar'
import { Appbar } from "./components/appbar/Appbar"
import { Body } from './components/body/Body'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-screen'>
        <Appbar />
        <Body />
      </div>
    </div>
  )
}

export default App
