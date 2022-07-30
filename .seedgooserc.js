// .seedgooserc.js

module.exports = {
  modelBaseDirectory: "app_api/database/models", // model directory name

  models: ["*.js", "!db.js"], // model matcher

  data: "data", // data directory name

  // db connection url
  // db: "mongodb://0.0.0.0:27017/travlr",
  db: "mongodb://localhost:27017/travlr",
};