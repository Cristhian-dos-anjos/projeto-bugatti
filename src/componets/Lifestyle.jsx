import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageStylesheet from '../PageStylesheet.jsx'
import stylesheet from '../../css/lifestyle.css?inline'

const heroVideo = new URL('../../Video/0415.mp4', import.meta.url).href

const gallery = [
  {
    image: new URL('../../img/fundo3 lifestyle.jfif', import.meta.url).href,
    alt: 'Interior Bugatti',
    title: 'Interior Premium',
    description: 'Design que transcende o tempo',
  },
  {
    image: new URL('../../img/fundo4 lifestyle.jpg', import.meta.url).href,
    alt: 'Arte automotiva Bugatti',
    title: 'Arte Automotiva',
    description: 'Perfeição em movimento',
  },
  {
    image: new URL('../../img/fundo5 lifestyle.jfif', import.meta.url).href,
    alt: 'Experiência Bugatti',
    title: 'Experiência Única',
    description: 'Momentos que definem luxo',
  },
]

const services = [
  {
    icon: 'fa-crown',
    title: 'Concierge Privado',
    description:
      'Serviço personalizado 24/7 para atender todas as suas necessidades de luxo.',
  },
  {
    icon: 'fa-plane',
    title: 'Transporte Executivo',
    description: 'Jatos particulares e helicópteros para viagens sem fronteiras.',
  },
  {
    icon: 'fa-utensils',
    title: 'Gastronomia Premium',
    description:
      'Experiências culinárias com chefs renomados em locais exclusivos.',
  },
  {
    icon: 'fa-gem',
    title: 'Coleções Privadas',
    description:
      'Acesso a arte, vinho e relógios das mais prestigiadas coleções.',
  },
]

function Lifestyle() {
  const [locationLabel, setLocationLabel] = useState('Molsheim, France')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const heroVideoRef = useRef(null)

  useEffect(() => {
    let typingInterval
    const typingTimeout = window.setTimeout(() => {
      const text = 'LIFESTYLE'
      let index = 0
      setLocationLabel('')
      typingInterval = window.setInterval(() => {
        index += 1
        setLocationLabel(text.slice(0, index))
        if (index === text.length) window.clearInterval(typingInterval)
      }, 100)
    }, 1000)

    return () => {
      window.clearTimeout(typingTimeout)
      window.clearInterval(typingInterval)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
      if (heroVideoRef.current) {
        heroVideoRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <PageStylesheet css={stylesheet} />
      <header>
        <nav>
          <Link to="/" className="logo" aria-label="Bugatti, início">
            BUGATTI
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-text">
            <span>{locationLabel}</span>
            <h1>A Arte de Viver</h1>
            <p>
              Mais que velocidade. Uma celebração da alta costura automotiva e
              do requinte absoluto.
            </p>
          </div>
        </section>

        <section id="art" className="lifestyle-section">
          <div className="container">
            <div className="text-box">
              <h2>Excelência em cada detalhe</h2>
              <p>
                O estilo de vida Bugatti é definido pela filosofia de Ettore
                Bugatti: &quot;Se é comparável, não é mais Bugatti&quot;. Da
                precisão dos relógios Jacob &amp; Co à sofisticação dos nossos
                espaços de hospitalidade.
              </p>
            </div>
            <div className="image-box">
              <img
                src={
                  new URL('../../img/fundo2 lifestyle.jpg', import.meta.url)
                    .href
                }
                alt="Interior luxuoso"
              />
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <h2 className="section-title">Experiências Exclusivas</h2>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <i className={`fas ${service.icon}`} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <div className="container">
            <h2 className="section-title">Momentos Inesquecíveis</h2>
            <div className="gallery-grid">
              {gallery.map((item) => (
                <article className="gallery-item" key={item.title}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="logo">
              BUGATTI
            </Link>
            <p>Since 1909</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Experiências</h4>
              <ul>
                <li>
                  <a href="#services">Concierge</a>
                </li>
                <li>
                  <a href="#gallery">Galeria</a>
                </li>
                <li>
                  <a href="#art">Lifestyle</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contato</h4>
              <ul>
                <li>
                  <i className="fas fa-phone" aria-hidden="true" /> +33 3 88 32
                  32 32
                </li>
                <li>
                  <i className="fas fa-envelope" aria-hidden="true" />{' '}
                  lifestyle@bugatti.com
                </li>
                <li>
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />{' '}
                  Molsheim, France
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Redes Sociais</h4>
              <div className="social-links">
                {[
                  ['Instagram', 'fa-instagram'],
                  ['Facebook', 'fa-facebook-f'],
                  ['Twitter', 'fa-twitter'],
                  ['YouTube', 'fa-youtube'],
                ].map(([name, icon]) => (
                  <a
                    href="#"
                    className="social-link"
                    aria-label={name}
                    key={name}
                  >
                    <i className={`fab ${icon}`} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bugatti Lifestyle - A Experiência Definitiva</p>
          <div className="footer-legal">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </footer>

      <button
        type="button"
        className="scroll-to-top"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? 'visible' : 'hidden',
        }}
      >
        <i className="fas fa-arrow-up" aria-hidden="true" />
      </button>
    </>
  )
}

export default Lifestyle
