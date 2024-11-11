import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Home'
import SkillsPage from './pages/Skills'
import ServicesPage from './pages/Services';

function App() {

  return (
<Router>
      <div className="bg-gray-900 text-white p-4">
        <Routes>
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
