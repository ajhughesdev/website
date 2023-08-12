import React, { useEffect, useRef, useState } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import RootLayout from './RootLayout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import About from './pages/About/About'

const App = (): JSX.Element => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  const storedIsDark = localStorage.getItem('ajhughes.dev-prefers-darktheme')
  const initialIsDark =
    storedIsDark !== null ? JSON.parse(storedIsDark) : prefersDarkMode
  const [darkMode, setDarkMode] = useState<boolean>(initialIsDark)
  const html = useRef<HTMLHtmlElement>(document.querySelector('html'))

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const darkTheme = 'dark'
    if (html.current) {
      if (darkMode) {
        html.current.classList.add(darkTheme)
        localStorage.setItem('ajhughes.dev-prefers-darktheme', 'true')
      } else {
        html.current.classList.remove(darkTheme)
        localStorage.setItem('ajhughes.dev-prefers-darktheme', 'false')
      }
    }
  }, [darkMode, html])

  const browserRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <RootLayout
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        }
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='portfolio'
          element={<Portfolio />}
        />
        <Route
          path='resume'
          element={<Resume darkMode={darkMode} />}
        />
        <Route
          path='contact'
          element={<Contact />}
        />
        <Route
          path='about'
          element={<About />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
        <Route
          path='privacy-policy'
          element={<PrivacyPolicy />}
        />
      </Route>
    )
  )

  return <RouterProvider router={browserRoutes} />
}

export default App
