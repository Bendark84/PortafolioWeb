import React from 'react';
import { Card } from 'react-bootstrap';
import Curriculum from '../assets/Benjamin R Calix Currículum.pdf';
import LogoBen from '../images/Ojo.png';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="card-container-aboutMe" id="aboutme">
      <div className="card-aboutMe">
        <h1 className="aboutme-text"> About Me </h1>
        <>
          <div className="card-me">
            <Card border="primary" style={{ width: '50rem', height: '50vh' }}>
              <Card.Body className="card-body-about">
                <Card.Text className="aboutMe-text">
                  ¡Hola! Me llamo <strong> Benjamin Rodriguez Calix </strong> y
                  soy de Santa Rosa de Copán, Honduras. Soy un apasionado del
                  arte en diferentes técnicas como, fotografía, modelado 3d,
                  diseño gráfico, edición de video y también es un gusto saber
                  que la programación y la informática son consideradas un arte.
                  Actualmente soy estudiante del último año de la carrera de
                  Ing. en Sistemas en la{' '}
                  <strong>
                    {' '}
                    Universidad Cristiana Evangelica Nuevo Milenio (UCENM){' '}
                  </strong>{' '}
                  y al mismo tiempo estoy cursando el bootcamp de Desarrollador
                  web full stack en <strong> ACADEMLO. </strong> En mis tiempos
                  libres me dedico a tomar fotografias y tambien hacer
                  apicultura, soy un apasionado de lo que me gusta hacer y con
                  muchas ganas de seguir aprendiendo. <br />{' '}
                  <a className="CV" target="_blank" href={Curriculum} download>
                    {' '}
                    <img className="logoBen" src={LogoBen} alt="" /> Decargar CV{' '}
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </>
      </div>
    </div>
  );
};

export default AboutMe;
