import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard({ image, text }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="h4">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
