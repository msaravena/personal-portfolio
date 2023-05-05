import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Random Users Cards',
    github: 'https://github.com/msaravena/user_cards',
    demo: 'https://tangerine-caramel-023097.netlify.app/'
  },
  {
    id:1,
    image: IMG2,
    title: 'Cocktails App',
    github: 'https://github.com/msaravena/drinksApp',
    demo: 'https://visionary-croissant-e26a90.netlify.app/'
  },
  {
    id:1,
    image: IMG3,
    title: 'This a portfolio item title',
    github: 'https://github.com/msaravena/admin-dashboard',
    demo: 'https://spectacular-squirrel-6f50c3.netlify.app/'
  },
  {
    id:1,
    image: IMG4,
    title: 'Pokemon App',
    github: 'https://github.com/msaravena/pokedex',
    demo: 'https://incandescent-entremet-8d836b.netlify.app/#/pokedex'
  },
  {
    id:1,
    image: IMG5,
    title: 'React Ecommerce',
    github: 'https://github.com/msaravena/react-ecommerce',
    demo: 'https://splendid-bunny-121fcd.netlify.app/#/'
  },
  {
    id:1,
    image: IMG6,
    title: 'Node JS Movies API',
    github: 'https://github.com/msaravena/movies-api',
    demo: 'https://glowing-croissant-bb47b9.netlify.app/#/'
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />            
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                      <a href={github} className='btn' target='_blank'>Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>          
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio