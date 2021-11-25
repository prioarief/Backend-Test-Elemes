const wrapper = require("../../utilities/wrapper");
const controller = require("./controller");

const statistic = async (req, res) => {
  try {
    const data = await controller.statistic();
    return wrapper(res, true, data, null, 200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { statistic };
