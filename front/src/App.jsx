import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import ItemsSection from './pages/itemsection'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
