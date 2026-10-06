import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './componets/index.jsx'
import Historia from './componets/Historia.jsx'
import Lifestyle from './componets/Lifestyle.jsx'
import Modelos from './componets/Modelos.jsx'

function App() {
  const location = useLocation()

  useEffect(() => {
    const path = decodeURIComponent(location.pathname)
    const titles = {
      '/': 'Bugatti | Create the Incomparable',
      '/modelos': 'Modelos | Bugatti Chiron Family',
      '/html/modelos.html': 'Modelos | Bugatti Chiron Family',
      '/lifestyle': 'Bugatti Lifestyle | Beyond Driving',
      '/html/lifestyle.html': 'Bugatti Lifestyle | Beyond Driving',
      '/historia': 'Bugatti Chiron | A História do Ícone',
      '/html/testemunhe a lenda.html': 'Bugatti Chiron | A História do Ícone',
    }

    document.title = titles[path] ?? 'Bugatti | Create the Incomparable'
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modelos" element={<Modelos />} />
      <Route path="/html/modelos.html" element={<Modelos />} />
      <Route path="/lifestyle" element={<Lifestyle />} />
      <Route path="/html/lifestyle.html" element={<Lifestyle />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/html/testemunhe a lenda.html" element={<Historia />} />
      <Route path="/html/index.html" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
