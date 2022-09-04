import React, {useState} from "react";


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';


function App() {

  const [pictures, setPictures] = useState([
  {
    title: "Dog",
    description: "The dog or domestic dog is a domesticated descendant of the wolf. The dog is derived from an ancient, extinct wolf, and the modern wolf is the dog's nearest ...",
    url: "https://en.wikipedia.org/wiki/Dog",
    image: 'dog.jpg',
    upvote_count:0,
    downvote_count:0
  },
  {
    title: "Cat",
    description: "The cat (Felis catus) is a domestic species of small carnivorous mammal. ... It is the only domesticated species in the family Felidae and is often referred to as ...",
    url: "https://en.wikipedia.org/wiki/Cat",
    image: 'cat.jpg',
    upvote_count:0,
    downvote_count:0
  },
  {
    title: "Duck",
    description: "Duck is the common name for numerous species of waterfowl in the family Anatidae. Ducks are generally smaller and shorter-necked than swans and geese, ...",
    url: "https://en.wikipedia.org/wiki/Duck",
    image: 'duck.jpg',
    upvote_count:0,
    downvote_count:0
  }
  ]);

  return <h1>Hello</h1>
}

export default App;
