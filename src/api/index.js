const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const cars = require("../components/cars");
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

const Schema = mongoose.Schema;
const app = express();
app.use(cors(corsOptions));

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
const Car = mongoose.model("Car", carSchema);

// const newcars = cars.map(car => {
//   return new Car(car);
// });
// newcars.forEach(car =>
//   car.save(err => {
//     if (err) return console.error(err);

//     console.log("Объект сохранен: ", car);
//   })
// );

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
