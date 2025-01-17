import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const teamMembers = [
  {
    name: "Paulo González",
    role: "Coordinador y Programador",
    pokemon: "Marill",
    imgSrc: "public/imgpaulo.png"
  },
  {
    name: "Martín Cáceres",
    role: "Diseñador Principal y PixelArt",
    pokemon: 'Darumaka',
    imgSrc: "public/imgmartin.png"
  },
  {
    name: "Angelo De La Rivera",
    role: "Coordinador y Programador",
    pokemon: "Blaziken",
    imgSrc: "public/imgangelo.png"
  },
  {
    name: "Benjamín Serrano",
    role: "Profesor de asignatura",
    pokemon: "Snorlax",
    imgSrc: "public/imgprofe.png"
  },
  {
    name: "Ankatu Paillacar",
    role: "Programador, Tester",
    pokemon: "Voltorb",
    imgSrc: "public/imgankatu.png"
  },
  {
    name: 'Ashly Mazuela',
    role: "Ayudante de asignatura",
    pokemon: "Growlithe",
    imgSrc: "public/imgayudante.png"
  }
];

const TeamProfiles = () => {
  return (<div>
    <div className="text-center">
        <br/><h3>Desarrolladores</h3>
    </div>
    <Container className="my-2">
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={member.imgSrc} alt={member.name}/>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>
                  <strong>Rol:</strong> {member.role}<br />
                  <strong>Pokémon:</strong> {member.pokemon}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default TeamProfiles
