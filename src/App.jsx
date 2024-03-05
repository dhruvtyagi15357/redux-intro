import Navbar from './components/Navbar'
// import router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

function App() {

  return (
    <Router>
      <Navbar/>
      <div className="mx-5">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
