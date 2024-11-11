import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Home'
import SkillsPage from './pages/skills'
import ServicesPage from './pages/services';

function App() {

  return (
<Router>
      <div className="bg-gray-900 text-white p-4">
        <Routes>
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/home" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
