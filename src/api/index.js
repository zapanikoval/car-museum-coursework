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

app.post("/api/cars/add", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const newCar = new Car({ ...req.body });

  newCar.save(err => {
    if (err) return console.log(err);
    Car.findOne({ ...req.body }, (err, car) => {
      if (err) return console.log(err);
      console.log("CAR ADDED");
      console.log(car);

      res.send(car);
    });
  });
});

app.put("/api/cars/update", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const carToUpdate = { ...req.body };
  Car.findByIdAndUpdate(
    carToUpdate._id,
    carToUpdate,
    { new: true },
    (err, car) => {
      if (err) return console.log(err);
      res.send(car);
    }
  );
});

app.delete("/api/cars/delete/:id", (req, res) => {
  const id = req.params.id;
  Car.findByIdAndDelete(id, (err, car) => {
    if (err) return console.log(err);
    console.log("DELETED_CAR", car._id);

    res.send(id);
  });
});

app.post("/api/authentication", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const { username, password } = req.body;
  User.findOne({ username, password }, (err, user) => {
    if (err) return console.log(err);
    if (user) {
      console.log(user);
      res.send(true);
    } else res.send(false);
  });
});
