import React from "react";
import PropTypes from "prop-types";

import { Card, Button } from "react-bootstrap";

const { Body, Title } = Card;

const PokemonCard = ({ pokemon: { name } }) => (
  <Card style={{ width: "18rem", marginBottom: "2rem" }}>
    <Body>
      <Title>{name}</Title>
      <Button variant="primary">Go to detail</Button>
    </Body>
  </Card>
);

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default PokemonCard;
