import { Link } from 'react-router-dom'
import PageStylesheet from '../PageStylesheet.jsx'
import stylesheet from '../../css/testemunhe a lenda.css?inline'

const editions = [
  {
    name: 'Noire',
    image: new URL('../../img/chiron noire.jpg', import.meta.url).href,
    description:
      'Édition Noire disponível nas variantes Noire Élégance (fibra de carbono brilhante) e Noire Sportive (fosca).',
  },
  {
    name: '110 Ans Bugatti',
    image: new URL('../../img/chiron 110 ans.jpg', import.meta.url).href,
    description:
      'Bugatti 110 Ans celebra a identidade francesa, com fibra de carbono azul fosco e detalhes nas cores da bandeira da França.',
  },
  {
    name: 'Les Légendes',
    image: new URL('../../img/chiron les legend.jpg', import.meta.url).href,
    description:
      'Les Légendes du Ciel homenageia os pilotos da Bugatti que também foram aviadores no início do século XX.',
  },
  {
    name: "L'Ébé",
    image: new URL("../../img/chiron l'ebe.jpg", import.meta.url).href,
    description:
      'Homenagem à filha de Ettore Bugatti, com detalhes em ouro de 24 quilates.',
  },
  {
    name: 'Golden Era',
    image: new URL('../../img/chiron golden era.jpg', import.meta.url).href,
    description:
      'Uma peça única com desenhos feitos à mão na carroceria, representando a história da Bugatti.',
  },
  {
    name: 'Habit Rouge',
    image: new URL('../../img/chiron habit rouge.jpg', import.meta.url).href,
    description:
      'Edição ultra-exclusiva inspirada nas cores clássicas de corrida.',
  },
]

function Historia() {
  return (
    <>
      <PageStylesheet css={stylesheet} />
      <header>
        <div>
          <p style={{ letterSpacing: '5px' }}>HERANÇA E VELOCIDADE</p>
          <h1>A História do Chiron</h1>
        </div>
      </header>

      <main className="container">
        <section className="theme-box">
          <h2>O Nascimento de uma Lenda</h2>
          <p>
            Apresentado no Salão de Genebra em 2016, o Bugatti Chiron nasceu
            com uma missão impossível: superar o Veyron. O nome é uma homenagem
            a <strong>Louis Chiron</strong>, o piloto mais icônico da marca, que
            dominou os Grandes Prêmios nas décadas de 20 e 30.
          </p>
        </section>

        <section className="creator-box">
          <h2>O Criador e a Visão</h2>
          <p>
            Embora a Bugatti faça parte do Grupo Volkswagen, a alma do Chiron
            foi moldada pela visão de <strong>Ettore Bugatti</strong> (fundador
            original) e executada sob a liderança de engenharia de nomes como
            Wolfgang Dürheimer. O design, liderado por Achim Anscheidt, focou
            na &quot;Linha Bugatti&quot; em forma de C, que além de estética,
            serve para resfriar o massivo motor W16.
          </p>
        </section>

        <section className="theme-box">
          <h2>Informações Importantes</h2>
          <ul>
            <li>
              <strong>Motor:</strong> 8.0 Litros W16 com 4 turbocompressores.
            </li>
            <li>
              <strong>Coração:</strong> Produz 1.500 cavalos de potência na sua
              versão base.
            </li>
            <li>
              <strong>Arrefecimento:</strong> Possui 10 radiadores para
              gerenciar o calor extremo.
            </li>
            <li>
              <strong>Exclusividade:</strong> Apenas 500 unidades foram
              produzidas em toda a sua história.
            </li>
          </ul>
        </section>

        <h2>Edições Especiais</h2>
        <section className="edition-grid" aria-label="Edições especiais">
          {editions.map((edition) => (
            <article
              className="edition-card"
              key={edition.name}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${edition.image}")`,
              }}
            >
              <h3>{edition.name}</h3>
              <p>{edition.description}</p>
            </article>
          ))}
        </section>

        <Link to="/" className="back-btn">
          ← Voltar ao Início
        </Link>
      </main>
    </>
  )
}

export default Historia
