import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { positions } from "@material-ui/system";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight: 250
  },
  media: {
    height: 140,
    position: "relative",
    backgroundPosition: "contain",
    objectFit: "contain",
    "@media all and (min-width: 768px)": {
      objectFit: "cover"
    }
  },
  button: {
    color: "white",
    marginLeft: 93,
    marginTop: -90,
    backgroundColor: "red",
    position: "absolute",

    "@media all and (min-width: 768px)": {
      backgroundColor: "black",
      marginLeft: 180,
      marginTop: -110
    }
  },
  content: {
    backgroundColor: "transparent"
  }
});

export default function MediaCard({ item, handleDelete, handleUiUpdate }) {
  dayjs.extend(relativeTime);

  const classes = useStyles();
  const {
    id,
    body: { product_cat, price, image_url, createdAt, name }
  } = item;
  console.log(product_cat);
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        image={image_url}
        title={product_cat}
      />
      <CardContent>
        <Typography
          className={classes.content}
          gutterBottom
          variant="p"
          component="h4"
        >
          {product_cat}
        </Typography>
        <Typography
          className={classes.content}
          variant="p"
          gutterBottom 
          color="textSecondary"
          component="p"
        >
          {name}
        </Typography>
        <Typography
          className={classes.content}
          variant="p"
          component="h3"
          color="black"
        >
          NGN {price}
        </Typography>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.button}
          onClick={() => handleDelete(id)}
        >
          X
        </Fab>

        <Typography
          className={classes.content}
          variant="p"
          component="p"
          color="primary"
        >
          {dayjs(item.createdAt).fromNow()}
        </Typography>
      </CardContent>
    </Card>
  );
}
