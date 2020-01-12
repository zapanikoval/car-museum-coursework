import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const ColorButton = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "#580909",
    "&:hover": {
      backgroundColor: "#400606"
    },
    fontFamily: ['"Fira Sans Extra Condensed"', "sans-serif"].join(",")
  }
}))(Button);

const useStyles = makeStyles({
  card: {
    maxWidth: 330,
    maxHeight: 460,
    minHeight: 460
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
  },
});

export default function CarCard(props) {
  const classes = useStyles();
  const { img, name, description } = props;
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
          <ColorButton size="small" color="primary">
            <NavLink to={`/car-info/${props.car.id}`} className="link">
              Подробнее...
            </NavLink>
          </ColorButton>
        </CardActions>
      </Card>
    </div>
  );
}
