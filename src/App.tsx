import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dolce from './pages/Dolce'
import { GlobalCss } from './styles'

function App() {
  return (
    <Router>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dolce" element={<Dolce />} />
      </Routes>
    </Router>
  )
}

export default App
