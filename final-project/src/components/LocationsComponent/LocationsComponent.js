import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/locations/action";
import { Card, Container } from "react-bootstrap";

const LocationsComponent = () => {
  const dispatch = useDispatch();
  const { locations, loadingLocations } = useSelector(
    (state) => state.LocationsReducer
  );
  useEffect(() => {
    dispatch(getLocations());
  }, []);

  return (
    <Container>
      {locations.map((location) => {
        return (
          <Card>
            <Card.Title>{location.name}</Card.Title>
            <Card.Text>{location.dimension}</Card.Text>
          </Card>
        );
      })}
    </Container>
  );
};

LocationsComponent.propTypes = {};

LocationsComponent.defaultProps = {};

export default LocationsComponent;
