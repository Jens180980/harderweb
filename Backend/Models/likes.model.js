import db from "../Config/db.config.js";

class LikesModel {
  constructor() {
    console.log("Instance of Class likesmodel called");
  }

  list = (req, res) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT likescount FROM likes`;
      db.query(sql, (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
  }; // End List

  update = (req, res) => {
    return new Promise((resolve, reject) => {
      const arrValues = Object.values(req.body);
      const sql = `UPDATE likes SET likes = ?,`;
      db.query(sql, arrValues, (error, result) => {
        if (result) {
          resolve({ status: true, id: req.body.id });
        } else {
          reject(error);
        }
      });
    });
  }; // End Update
} // End Class

export default SongModel;
