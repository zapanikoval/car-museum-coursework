const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Schema = mongoose.Schema;
carSchema = new Schema({
  type: String,
  img: String,
  name: String,
  motor: String,
  motorType: String,
  gas: String,
  power: Number,
  maxSpeed: Number,
  vol: Number,
  rams: Number,
  gasRate: String,
  countPlaces: Number,
  transmission: String,
  shortDescr: String,
  fullDescr: String
});
userSchema = new Schema({
  username: String,
  password: String
});
const Car = mongoose.model("Car", carSchema);
const User = mongoose.model("User", userSchema);

mongoose.connect(
  "mongodb://localhost:27017/carsdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) return console.error(err);

    app.listen(3333, () => {
      console.log("Сервер запущен. Ожидает подключения...");
    });
  }
);

app.get("/api/cars", (req, res) => {
  Car.find({}, (err, cars) => {
    if (err) return console.error(err);

    res.send(cars);
  });
});

app.post("/api/authentication", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username, password }, (err, user) => {
    if (err) return console.log(err);
    if (user) {
      console.log(user);
      res.send(true);
    } else res.send(false);
  });
});
