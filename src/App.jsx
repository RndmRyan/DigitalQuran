import './App.css'

import Sidebar from "./components/Sidebar"
import Headerx from "./components/Headerx"
import Footerx from "./components/Footerx"
import Herosec from "./components/herosec"
import Audioplayer from "./components/audioplayer"

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <div className='container'>
      <Headerx/>
      <div className='row'>
        <Sidebar/>
        <div className='col-md-9'>
          <Herosec />
          <Audioplayer />
        </div>
      </div>
      <Footerx/>
    </div>
  </>
  )
}

export default App