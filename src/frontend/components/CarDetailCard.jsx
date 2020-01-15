import React from "react";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import "../styles/CarDetailCard.scss";

const DeleteButton = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "#C62828",
    "&:hover": {
      backgroundColor: "#B71C1C"
    },
    fontFamily: ['"Fira Sans Extra Condensed"', "sans-serif"].join(",")
  }
}))(Fab);

const UpdateButton = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "#4CAF50",
    "&:hover": {
      backgroundColor: "#2E7D32"
    },
    fontFamily: ['"Fira Sans Extra Condensed"', "sans-serif"].join(",")
  }
}))(Fab);

const useStyles = makeStyles({
  card: {
    maxWidth: 330,
    maxHeight: 490,
    minHeight: 480
  },
  media: {
    height: 200
  },
  content: {
    minHeight: 215,
    maxHeight: 250
  },
  title: {
    color: "#580909",
    fontFamily: ['"Lobster"', "cursive"].join(",")
  }
});

export default function CarDetailCard(props) {
  const { img, name, description } = props;
  const classes = useStyles();
  return (
    <div className="card">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title="Image" />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <DeleteButton>
            <DeleteIcon />
          </DeleteButton>
          <UpdateButton>
            <UpdateIcon />
          </UpdateButton>
        </CardActions>
      </Card>
    </div>
  );
}
