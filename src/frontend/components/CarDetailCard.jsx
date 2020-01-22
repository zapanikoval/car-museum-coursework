import React from "react";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

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

const classes = {
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
};

export default class CarDetailCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deleting: false,
      loader: false
    };
    this.toggleDelete = this.toggleDelete.bind(this);
    this.handleDeleting = this.handleDeleting.bind(this);
  }

  toggleDelete() {
    console.log("toggle click");

    this.setState({
      deleting: !this.state.deleting
    });
  }

  handleDeleting() {
    this.setState({
      loader: true
    });
    setTimeout(() => {
      this.props.onDeleteCar(this.props.car._id);
    }, 2000);
  }

  render() {
    const { img, name, description } = this.props;
    // const classes = useStyles();
    return (
      <div className="card">
        <Card style={classes.card}>
          <CardActionArea>
            <CardMedia style={classes.media} image={img} title="Image" />
            <CardContent style={classes.content}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={classes.title}
              >
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {this.state.deleting ? (
              <div>
                {this.state.loader ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <div className="deleting-block">
                    <p>Уверены?</p>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleDeleting}
                    >
                      Да
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.toggleDelete}
                    >
                      Нет
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <DeleteButton onClick={this.toggleDelete}>
                  <DeleteIcon />
                </DeleteButton>
                <UpdateButton>
                  <NavLink to={`/update/${this.props.car._id}`} className="link">
                    <UpdateIcon />
                  </NavLink>
                </UpdateButton>
              </>
            )}
          </CardActions>
        </Card>
      </div>
    );
  }
}
