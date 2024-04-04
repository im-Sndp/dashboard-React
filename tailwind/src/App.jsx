import './App.css'
import { Banner } from './components/Sidebanner'
import { CardContainer } from './components/card/CardContainer'
import { Navbar } from './components/navbar/Navbar'
import { Sidebar } from './components/sidebar/Sidebar'

function App() {

  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex-1 ml-64'>
          <Navbar />
          <div className='mt-20 overflow-y-auto'>
            <Banner />
            <CardContainer />
          </div>
        </div>
    </div>
  )
}

export default App
