import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Character } from '../../../api/character.api-model';
import * as classes from './CharacterDetailStyles';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

interface Props {
  character: Character;
}

export const CharacterDetail: React.FC = () => {
  const navigate = useNavigate();
  const [character, setCharacter] = React.useState<Character>({
    id: '',
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  });

  const params = useParams();

  React.useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/${params.id}`).then(
      (res) => setCharacter(res.data)
    );
  }, []);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <section className={classes.characterSection}>
        <Card className={classes.characterCard}>
          <CardMedia component="img" image={character.image} />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {character.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {character.species}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {character.gender}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {character.status}
            </Typography>
          </CardContent>
        </Card>
        <Button onClick={handleClick} variant="contained">
          Volver
        </Button>
      </section>
    </>
  );
};
