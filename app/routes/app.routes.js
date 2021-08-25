module.exports = (app) => {
  const App = require("../controllers/app.controller.js");

  app.post("/create", App.create);

  app.get("/get-all", App.findAll);

  app.get("/message/:messageId", App.findOne);

  app.put("/message/:messageId", App.update);

  app.delete("/message/:messageId", App.delete);
};
