import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../Cards/Card";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid({
  items,
  isLoading,
  handleDelete,
  handleUiUpdate,
  newItems
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {!isLoading ? (
          items.map(item => (
            <Grid key={item.createdAt} item xs={6} md={4}>
              {/* <Paper className={classes.paper}>xs=12</Paper> */}
              {item ? (
                <MediaCard
                  item={item}
                  handleDelete={handleDelete}
                  handleUiUpdate={handleUiUpdate}
                >
                  {" "}
                </MediaCard>
              ) : null}
            </Grid>
          ))
        ) : (
          <Skeleton variant="rect" width={210} height={118} />
        )}
      </Grid>
    </div>
  );
}
