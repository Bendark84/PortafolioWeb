import React from 'react';
import { Card, Button, Placeholder } from 'react-bootstrap';
import './Works.css';

const Works = () => {
  return (
    <div className="container-works" id="works">
      <h1 className="works-title">Works</h1>
      <div className="d-flex justify-content-around">
        <div className="Pokedex">
          <Card.Img
            variant="top"
            src="https://e.rpp-noticias.io/large/2016/07/22/151715_200529.jpg"
          />
          <Card.Body>
            <Card.Title className="title-card-work">Pokedex</Card.Title>
            <Card.Text className="text-card-work">
              Pokedex creado en el bootcamp de Academlo, herramientas de Apis,
              Redux, REACT, BOOSTRAP, JAVASCRIPT, HTML, CSS.
            </Card.Text>
            <Button variant="primary">
              <a target="_blank" href="https://github.com/Bendark84/Pokedex">
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="primary">
              <a
                target="_blank"
                href="https://genuine-faloodeh-05a0f0.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </div>

        <div className="RickYMorty">
          <Card.Img
            variant="top"
            src="https://i.blogs.es/0a266c/d734f79559377cb87c44dde4e49800bf/450_1000.webp"
          />
          <Card.Body>
            <Card.Title className="title-card-work">Rick & Morty</Card.Title>
            <Card.Text className="text-card-work">
              TECNOLOGÍAS USADAS: REACT, JAVASCRIPT, HTML, CSS
            </Card.Text>
            <Button variant="primary">
              <a
                target="_blank"
                href="https://github.com/Bendark84/RickYMortyApi"
              >
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="primary">
              <a
                target="_blank"
                href="https://glowing-cranachan-f51a96.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </div>

        <div className="Ecommerce">
          <Card.Img
            variant="top"
            src="https://s3-eu-west-1.amazonaws.com/cdn1.mullenlowegroup.com/uploads/sites/52/2019/10/ECommerceCreceMe%CC%81xicoOk.jpg"
          />

          <Card.Body>
            <Card.Title className="title-card-work">E-commerce</Card.Title>
            <Card.Text className="text-card-work">
              TECNOLOGÍAS USADAS: REACT, JAVASCRIPT, HTML, CSS
            </Card.Text>
            <Button variant="primary">
              <a
                target="_blank"
                href="https://github.com/Bendark84/ReactEcommerce"
              >
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="primary">
              <a
                target="_blank"
                href="https://meek-dieffenbachia-c0ff92.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </div>
        <div className="CrudApi">
          <Card.Img
            variant="top"
            src="https://www.ervinsantos.com//cdn/blog/26112019-Crud_01.png"
          />
          <Card.Body>
            <Card.Title className="title-card-work">CRUD API</Card.Title>
            <Card.Text className="text-card-work">
              TECNOLOGÍAS USADAS: REACT, JAVASCRIPT, HTML, CSS
            </Card.Text>
            <Button variant="primary">
              <a target="_blank" href="https://github.com/Bendark84/CRUDAPI">
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="primary">
              <a
                target="_blank"
                href="https://cute-marigold-05ecef.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </div>
        <div className="WheatherApp">
          <Card.Img
            variant="top"
            src="https://i0.wp.com/www.regendus.com/wp-content/uploads/2019/09/Best-Weather-Websites.jpg?fit=1320%2C774&ssl=1"
          />
          <Card.Body>
            <Card.Title className="title-card-work">Wheather App</Card.Title>
            <Card.Text className="text-card-work">
              TECNOLOGÍAS USADAS: REACT, JAVASCRIPT, HTML, CSS
            </Card.Text>
            <Button variant="primary">
              <a target="_blank" href="https://github.com/Bendark84/WeatherApi">
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="primary">
              <a
                target="_blank"
                href="https://thunderous-yeot-e70545.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

export default Works;
