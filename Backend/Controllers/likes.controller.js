import LikesModel from "../Models/likes.model.js";

const model = new LikesModel();

class LikesController {
  constructor() {
    console.log("Instance of Class LikesController called");
  }

  list = async (req, res) => {
    const result = await model.list(req, res);
    res.json(result);
  };

  update = async (req, res) => {
    const result = await model.update(req, res);
    res.json(result);
  };
}

export default LikesController;
