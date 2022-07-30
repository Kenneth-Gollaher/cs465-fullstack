const mongoose = require("mongoose"); // .set('debug', true);
const Model = mongoose.model("trips"); // import mongoose database library

// GET: /trips - callback method lists all the trips
const tripsList = async (req, res) => {
  Model.find({}).exec((err, trips) => { // empty filter
    if (!trips) {
      return res.status(404).json({ message: "trips not found" }); // if nothing returned send HTTP 404 status
    } else if (err) {
      return res.status(404).json(err);
    } else {
      return res.status(200).json(trips); // if data retrieved, send to client with HTTP 200 success status
    }
  });
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
// find method with filter set to the tripCode passed on the URL
  Model.find({ code: req.params.tripCode }).exec((err, trip) => {
    if (!trip) {
      return res.status(404).json({ message: "trip not found" });
    } else if (err) {
      return res.status(404).json(err);
    } else {
      return res.status(200).json(trip);
    }
  });
};

module.exports = {
  tripsList,
  tripsFindCode,
};