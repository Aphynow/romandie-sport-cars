const axios = require("axios");

// setInterval(() => {
axios
  .post("http://localhost:8000/signup", {
    login: "Jeremy",
    firstName: "Jérémy MARTIN",
    password: "azerty",
    passwordbis: "azerty",
  })
  .then(function ({ data }) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
// }, 5 * 1000);

// const {User } = require("./models")

// const Marc = User.create({ login: "Michel", password: "azerty" });
