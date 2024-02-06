import { useState } from 'react'
import './App.css'
import Mainpage from './Mainpage'
import Nextpage from './Nextpage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainpage/>}></Route>
            <Route path="/secondpage" element={<Nextpage/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
