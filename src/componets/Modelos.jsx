import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageStylesheet from '../PageStylesheet.jsx'
import stylesheet from '../../css/modelos.css?inline'

const bugattiLogo = new URL(
  '../../img/bugatti-brand-logo-white-vector-45972537-Photoroom (1).png',
  import.meta.url,
).href

const videos = [
  new URL('../../Video/videoplayback (1).mp4', import.meta.url).href,
  new URL('../../Video/Bugatti-Chiron-Edit-2-4K.mp4', import.meta.url).href,
  new URL('../../Video/0413.mp4', import.meta.url).href,
  new URL('../../Video/videoplayback (2).mp4', import.meta.url).href,
]

const models = [
  {
    name: 'Chiron Standard',
    image: new URL('../../img/chiron standard.png', import.meta.url).href,
    description:
      'O ponto de partida da revolução. O primeiro carro de produção a entregar 1.500 cv de forma utilizável e luxuosa.',
    specifications: [
      ['Potência', '1.500 CV'],
      ['0-100 km/h', '2.5 Segundos'],
      ['V-Max', '420 KM/H'],
      ['Motor', '8.0 W16 Quad-Turbo'],
    ],
  },
  {
    name: 'Chiron Sport',
    image: new URL('../../img/chiron sport.png', import.meta.url).href,
    description:
      'Uma variante mais firme e focada no condutor, com suspensão otimizada e vetorização de torque para curvas perfeitas.',
    specifications: [
      ['Peso', '-18 KG mais leve'],
      ['Diferencial', 'Dinâmico Otimizado'],
      ['V-Max', '420 KM/H'],
      ['Destaque', 'Limpadores de fibra de carbono'],
    ],
  },
  {
    name: 'Chiron Pur Sport',
    image: new URL('../../img/chiron pur sport.png', import.meta.url).href,
    description:
      'O mestre das curvas. Com marchas mais curtas e uma asa traseira fixa de 1.9m, ele prioriza a aceleração lateral.',
    specifications: [
      ['Aceleração', '0-200 em 5.5s'],
      ['Pneus', 'Michelin Cup 2R'],
      ['V-Max', '350 KM/H'],
      ['Foco', 'Downforce Máximo'],
    ],
  },
  {
    name: 'Chiron Super Sport 300+',
    image: new URL('../../img/chiron super sport 300+.png', import.meta.url)
      .href,
    description:
      'O rei da velocidade absoluta. Com carroceria Longtail alongada para estabilidade extrema acima dos 400 km/h.',
    specifications: [
      ['Potência', '1.600 CV'],
      ['Recorde', '490.48 KM/H'],
      ['Produção', '30 Unidades'],
      ['Corpo', 'Fibra de Carbono Exposta'],
    ],
  },
]

function Modelos() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      <PageStylesheet css={stylesheet} />
      {videos.map((video, index) => (
        <video
          key={video}
          className={`video-background video-${index + 1}${
            activeVideo === index ? ' active' : ''
          }`}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}

      <nav className="back-nav">
        <img src={bugattiLogo} alt="Bugatti" className="logo-bugatti" />
        <div className="logo">BUGATTI</div>
        <Link to="/" className="btn-voltar">
          Voltar
        </Link>
      </nav>

      <header>
        <h1>LINHA CHIRON</h1>
        <p style={{ color: 'var(--text-gray)', letterSpacing: '2px' }}>
          A engenharia levada ao extremo
        </p>
      </header>

      <main className="container">
        {models.map((model, index) => (
          <article
            className="model-card"
            key={model.name}
            onMouseEnter={() => setActiveVideo(index)}
            onMouseLeave={() => setActiveVideo(null)}
            onFocus={() => setActiveVideo(index)}
            onBlur={() => setActiveVideo(null)}
            tabIndex={0}
          >
            <div
              className="model-image"
              role="img"
              aria-label={model.name}
              style={{ backgroundImage: `url("${model.image}")` }}
            />
            <div className="model-info">
              <h2>{model.name}</h2>
              <p>{model.description}</p>
              <ul className="specs-list">
                {model.specifications.map(([label, value]) => (
                  <li key={label}>
                    {label}: <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </main>
    </>
  )
}

export default Modelos
