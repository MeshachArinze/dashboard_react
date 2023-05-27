import Navbar from './components/Navbar'
import Project from './components/Project'
import Sidebar from './components/Sidebar'


function App() {

  return (
    <div className="app-container">
      <Navbar />
      <div className='app-content'>
        <Sidebar />
        <Project />
      </div>
    </div>
  )
}

export default App
