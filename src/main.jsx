import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import { useRef, useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalLenisWrapper >
      <Home />
    </GlobalLenisWrapper>
  </StrictMode>,
)


function GlobalLenisWrapper({ children }) {
  const lenis = useRef(null)

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    })

    // RAF Loop
    function raf(time) {
      lenis.current.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.current.destroy()
    }
  }, [])

  return children
}