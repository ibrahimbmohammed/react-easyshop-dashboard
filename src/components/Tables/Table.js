import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  avatar: {
    margin: 5
  },
  bigAvatar: {
    margin: 2,
    width: 60,
    height: 60,
    borderRadius: 5
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0)
];
export default function SimpleTable({ items, isLoading }) {
  const classes = useStyles();
  console.log(items);
  console.log(isLoading);
  dayjs.extend(relativeTime);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading
            ? items.map(item => (
                <TableRow key={item.name}>
                  <TableCell component="th" scope="row">
                    <Avatar
                      alt="Remy Sharp"
                      src={item.image_url}
                      className={classes.bigAvatar}
                    />
                  </TableCell>
                  <TableCell align="left">{item.product_cat}</TableCell>
                  <TableCell align="right">{item.product_quantity}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">
                    {dayjs(item.createdAt).fromNow()}
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </Paper>
  );
}
