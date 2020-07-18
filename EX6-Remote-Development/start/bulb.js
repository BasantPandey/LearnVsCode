const axios = require("axios");

const bulb = {
  async setColor(color) {
    try {
      console.log(`${process.env.BASE_API}/setColor?color=${color}`);
      let result = await axios.get(
        `${process.env.BASE_API}/setColor?color=${color}`
      );
      return result.data.results;
    } catch (err) {
      throw new Error(err);
    }
  }
};

module.exports = bulb;
