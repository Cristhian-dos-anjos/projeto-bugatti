import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageStylesheet from '../PageStylesheet.jsx'
import homeStylesheet from '../../css/index.css?inline'

const backgroundVideo = new URL(
  '../../Video/Bugatti-Chiron-Edit-2-4K.mp4',
  import.meta.url,
).href
const bugattiLogo = new URL(
  '../../img/bugatti-brand-logo-white-vector-45972537-Photoroom (1).png',
  import.meta.url,
).href
const chironLogo = new URL('../../img/logo chiron.png', import.meta.url).href

const specifications = [
  { target: 1500, decimals: 0, label: 'Potência Máxima (HP)' },
  { target: 420, decimals: 0, label: 'Velocidade Final (KM/H)' },
  { target: 2.4, decimals: 1, label: '0-100 KM/H (S)' },
]

function Home() {
  const specsRef = useRef(null)
  const lastScrollTop = useRef(0)
  const [isNavHidden, setIsNavHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasStartedCounters, setHasStartedCounters] = useState(false)
  const [counterValues, setCounterValues] = useState(
    specifications.map(({ decimals }) => (0).toFixed(decimals)),
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsNavHidden(scrollTop > lastScrollTop.current && scrollTop > 100)
      setIsScrolled(scrollTop > 50)
      lastScrollTop.current = Math.max(scrollTop, 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const section = specsRef.current
    if (!section || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStartedCounters(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStartedCounters) return

    const duration = 1800
    let animationFrame
    let startTime

    const updateCounters = (time) => {
      if (startTime === undefined) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)

      setCounterValues(
        specifications.map(({ target, decimals }) =>
          (target * progress).toFixed(decimals),
        ),
      )

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounters)
      }
    }

    animationFrame = requestAnimationFrame(updateCounters)
    return () => cancelAnimationFrame(animationFrame)
  }, [hasStartedCounters])

  return (
    <>
      <PageStylesheet css={homeStylesheet} />
      <div>
        <nav
          id="mainNav"
          className={[
            isNavHidden && 'hide-nav',
            isScrolled && 'scrolled',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{
            background: isScrolled
              ? 'rgba(5, 5, 5, 0.95)'
              : 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <Link to="/" className="logo" aria-label="Bugatti, início">
            <img src={bugattiLogo} alt="" className="Logo-img" />
            BUGATTI
          </Link>

          <div className="menu">
            <Link to="/modelos">Modelos</Link>
            <Link to="/lifestyle">Lifestyle</Link>
            <a href="#specs">Performance</a>
          </div>
        </nav>

        <video autoPlay muted loop playsInline className="video-bg">
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <section className="hero">
          <p>A quintessência da performance</p>
          <img src={chironLogo} alt="Assinatura Bugatti Chiron" />
          <Link to="/historia" className="cta-button">
            Testemunhe a lenda
          </Link>
        </section>

        <section className="specs" id="specs" ref={specsRef}>
          {specifications.map(({ label }, index) => (
            <div className="spec-item" key={label}>
              <h2>
                <span className="counter">{counterValues[index]}</span>
              </h2>
              <p>{label}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default Home
