import React from 'react';
import { Card, Button, Placeholder } from 'react-bootstrap';

const Works = () => {
  return (
    <div className="container-works" id="works">
      <h1 className="works-title">Works</h1>
      <div className="d-flex justify-content-around">
        <Card className="Pokedex" style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://e.rpp-noticias.io/large/2016/07/22/151715_200529.jpg"
          />
          <Card.Body>
            <Card.Title>Pokedex</Card.Title>
            <Card.Text>
              Pokedex creado en el bootcamp de Academlo, herramientas de Apis,
              Redux, REACT, BOOSTRAP, JAVASCRIPT, HTML, CSS.
            </Card.Text>
            <Button variant="succes">
              <a target="_blank" href="https://github.com/Bendark84/Pokedex">
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="succes">
              <a
                target="_blank"
                href="https://genuine-faloodeh-05a0f0.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </Card>

        <Card className="RickYMorty" style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://i.blogs.es/0a266c/d734f79559377cb87c44dde4e49800bf/450_1000.webp"
          />
          <Card.Body>
            <Card.Title>Rick & Morty</Card.Title>
            <Card.Text>
              TECNOLOGÍAS USADAS: REACT, JAVASCRIPT, HTML, CSS
            </Card.Text>
            <Button variant="succes">
              <a
                target="_blank"
                href="https://github.com/Bendark84/RickYMortyApi"
              >
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="succes">
              <a
                target="_blank"
                href="https://glowing-cranachan-f51a96.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </Card>

        <Card className="Ecommerce" style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://s3-eu-west-1.amazonaws.com/cdn1.mullenlowegroup.com/uploads/sites/52/2019/10/ECommerceCreceMe%CC%81xicoOk.jpg"
          />

          <Card.Body>
            <Card.Title>E-commerce</Card.Title>
            <Card.Text>
              TECNOLOGÍAS USADAS: REACT, JAVASCRIPT, HTML, CSS
            </Card.Text>
            <Button variant="succes">
              <a
                target="_blank"
                href="https://github.com/Bendark84/ReactEcommerce"
              >
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="succes">
              <a
                target="_blank"
                href="https://meek-dieffenbachia-c0ff92.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </Card>
        <Card className="CrudApi" style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://erickeduardo.com/wp-content/uploads/2021/06/1_D07GoP9ZO3rXSVsVndX5kg.png"
          />
          <Card.Body>
            <Card.Title>CRUD API</Card.Title>
            <Card.Text>
              TECNOLOGÍAS USADAS: REACT, JAVASCRIPT, HTML, CSS
            </Card.Text>
            <Button variant="succes">
              <a target="_blank" href="https://github.com/Bendark84/CRUDAPI">
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="succes">
              <a
                target="_blank"
                href="https://cute-marigold-05ecef.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </Card>
        <Card className="WheatherApp" style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://i0.wp.com/www.regendus.com/wp-content/uploads/2019/09/Best-Weather-Websites.jpg?fit=1320%2C774&ssl=1"
          />
          <Card.Body>
            <Card.Title>Wheather App</Card.Title>
            <Card.Text>
              TECNOLOGÍAS USADAS: REACT, JAVASCRIPT, HTML, CSS
            </Card.Text>
            <Button variant="succes">
              <a target="_blank" href="https://github.com/Bendark84/WeatherApi">
                {' '}
                <i class="fa-brands fa-github"></i> GitHub{' '}
              </a>{' '}
            </Button>

            <Button variant="succes">
              <a
                target="_blank"
                href="https://thunderous-yeot-e70545.netlify.app/"
              >
                {' '}
                <i class="fa-solid fa-link"></i>Visitar{' '}
              </a>{' '}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Works;
