import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import Dolce from './pages/Dolce'
import { GlobalCss } from './styles'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalCss />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dolce/:id" element={<Dolce />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
