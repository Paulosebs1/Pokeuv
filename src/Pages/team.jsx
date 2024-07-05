import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const teamMembers = [
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
    name: "Paulo González",
    role: "Coordinador y Programador",
    pokemon: "Marill",
    imgSrc: "public/imgpaulo.png"
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
    name: 'Ayudante',
    role: "Ayudante de asignatura",
    pokemon: "Growlithe",
    imgSrc: "public/imgayudante.png"
  }
];

const TeamProfiles = () => {
  return (<div>
    <h1 class="text-center" >Dev team</h1>
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
    </div>
  );
}

export default TeamProfiles
