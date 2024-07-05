import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const teamMembers = [
  {
    name: "Martín Cáceres",
    role: "Diseñador Principal y PixelArt",
    pokemon: 'Darumaka',
    imgSrc: ""
  },
  {
    name: "Angelo De La Riviera",
    role: "Coordinador y Programador",
    pokemon: "Blaziken",
    imgSrc: ""
  },
  {
    name: "Paulo González",
    role: "Coordinador y Programador",
    pokemon: "Marill",
    imgSrc: ""
  },
  {
    name: "Benjamín Serrano",
    role: "Profesor de asignatura",
    pokemon: "Snorlax",
    imgSrc: ""
  },
  {
    name: "Ankatu Paillacar",
    role: "Programador, Tester",
    pokemon: "Voltorb",
    imgSrc: ""
  },
  {
    name: 'Ayudante',
    role: "Ayudante de asignatura",
    pokemon: "Growlithe",
    imgSrc: ""
  }
];

const TeamProfiles = () => {
  return (
    <Container className="my-5">
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
  );
}

export default TeamProfiles;
