import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as classes from './character-collection.styles';
import { CharacterEntityApi } from './api/character-collection.api-model';
import { api } from './api';
import Card from '@material-ui/core/Card';
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { generatePath, Link } from 'react-router-dom';

export const CharacterCollectionComponent: React.FunctionComponent = () => {
  const [characterCollection, setcharacterCollection] = React.useState<
    CharacterEntityApi[]
  >([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [characterId, setCharacterId] = React.useState('');

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  const handleClick = (event) => {
    setCharacterId(event.currentTarget.value);
  };

  React.useEffect(() => {
    api(pageNumber).then((res) => {
      setcharacterCollection(res.data.results);
    });
  }, [pageNumber]);

  return (
    <>
      <div className={classes.root}>
        <h1>Character collection</h1>
        <article className={classes.cardCollection}>
          {characterCollection.map((character, index) => (
            <Card key={index} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={character.image}
                  alt={character.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                  </Typography>
                  <Typography variant="body2">
                    Origin: {character.origin.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  to={generatePath('/characters/:id', {
                    id: character.id,
                  })}
                >
                  <Button
                    size="small"
                    color="primary"
                    value={character.id}
                    onClick={handleClick}
                  >
                    Ver más
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </article>
      </div>
      <Pagination count={42} onChange={handleChange} page={pageNumber} />
    </>
  );
};
