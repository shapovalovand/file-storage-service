const router = require("../FileStorage/router");
const express = require("express");
const bodyParser = require("body-parser");

class Server {
  #app;
  #server;
  #PORT = 3000;

  constructor() {
    this.#app = express();
    this.#app.use(bodyParser.json());

    this.#boot();
  }

  #boot() {
    this.#setUpApiRouters();

    this.#app.use((err, req, res, next) => {
      if (
        err.code === "LIMIT_FILE_SIZE" ||
        err.message === "Invalid file type"
      ) {
        res.status(403).json({
          status: "error",
          message: "File too large or has invalid file type",
        });
        return;
      }

      res.status(500).json({
        status: "error",
        description: "internal server error",
        developerMessage: err.message,
      });
      next(err);
    });

    this.#server = this.#app.listen(this.#PORT, () => {
      console.log(`App listening on port ${this.#PORT}`);
    });
  }

  #setUpApiRouters() {
    this.#app.use("/", router);
  }
}

module.exports = Server;
