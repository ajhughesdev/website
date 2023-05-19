import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import RootLayout from './RootLayout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
// import Project from './pages/Portfolio/Project'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const storedIsDark = localStorage.getItem('ajhughes.dev-prefers-darktheme')
  const initialIsDark =
    storedIsDark !== null ? JSON.parse(storedIsDark) : prefersDarkMode

  const [darkMode, setDarkMode] = useState(initialIsDark)
  const html = useRef(document.querySelector('html'))

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      html.current.classList.add('dark')
      localStorage.setItem('ajhughes.dev-prefers-darktheme', 'true')
    } else {
      html.current.classList.remove('dark')
      localStorage.setItem('ajhughes.dev-prefers-darktheme', 'false')
    }
  }, [darkMode, html])

  return (
    <Routes>
      <Route
        path='/'
        element={
          <RootLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        }
      >
        <Route index element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
        {/* <Route path='portfolio/:id' element={<Project />} /> */}
        <Route path='resume' element={<Resume darkMode={darkMode} />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  )
}

export default App
