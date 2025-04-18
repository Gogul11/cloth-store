import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import ItemsSection from './pages/itemsection'
import About from './pages/About'
import Itemdetail from './pages/itemdetail'

function App() {

 return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Home/>}
        />
        <Route
          path='/login'
          element={<Login/>}
        />
        <Route
          path='/purchase'
          element={<ItemsSection/>}
        />
        <Route
          path='/about'
          element={<About/>}
        />
        <Route
          path='/itemdetail'
          element={<Itemdetail/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
