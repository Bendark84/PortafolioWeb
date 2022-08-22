import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className="contact" id="contact">
      <Card>
        <Card.Body>
          <Card.Title>
            {' '}
            <h1 className="text-contatMe"> Contact Me </h1>
          </Card.Title>

          <Button className="text-center" variant="succes">
            <a
              className="a-footer"
              target="_blank"
              href="https://github.com/Bendark84"
            >
              {' '}
              <i class="fa-brands fa-github"></i> GitHub{' '}
            </a>{' '}
          </Button>
          <Button className="text-center" variant="succes">
            <a
              className="a-footer"
              target="_blank"
              href="https://www.linkedin.com/in/benjamin-rodriguez-calix-070976241/"
            >
              {' '}
              <i class="fa-brands fa-linkedin"></i> Linkedin{' '}
            </a>{' '}
          </Button>
          <Button className="text-center" variant="succes">
            <a
              className="a-footer"
              target="_blank"
              href="https://outlook.live.com/mail/0/"
            >
              {' '}
              <i class="fa-solid fa-envelope"></i> Email{' '}
            </a>{' '}
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Benjamin Rodriguez Calix
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Footer;
