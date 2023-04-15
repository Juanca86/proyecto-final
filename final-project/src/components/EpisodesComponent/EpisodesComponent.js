import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "../../store/episodes/action";

const EpisodesComponent = () => {
  const dispatch = useDispatch();
  const { episodes, loadingEpisodes } = useSelector(
    (state) => state.EpisodesReducer
  );
  useEffect(() => {
    dispatch(getEpisodes());
  }, []);

  return (
    <Container>
      {episodes.map((episode) => {
        return (
          <Card>
            <Card.Title>{episode.name}</Card.Title>
            <Card.Text> {episode.episode} </Card.Text>
          </Card>
        );
      })}
    </Container>
  );
};

EpisodesComponent.propTypes = {};

EpisodesComponent.defaultProps = {};

export default EpisodesComponent;
