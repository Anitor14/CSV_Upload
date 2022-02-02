const path = require("path");
const { StatusCodes } = require("http-status-codes");
// const CustomError = require("../errors");
const fs = require("fs");
const csv = require("csvtojson");
let csvData = "test";
const uploadFile = async (req, res) => {
  try {
    // const filePath = req.file.path;
    console.log(req.file);
    const { path } = req.file;
    const json = await csv().fromFile(path);

    const newJson = [];
    json.map((item) => {
      newJson.push({
        Name: item.Name,
        Email: item.Email,
        PhoneNumber: item["Phone Number"],
      });
    });
    res.status(StatusCodes.OK).json({
      message: "CSV uploaded  successfully",
      CSV_Json: newJson,
    });
    fs.unlink(path, () => {});

    // csv()
    //   .fromFile(path)
    //   .then((json) => {
    //     const newJson = [];
    //     json.map((item) => {
    //       newJson.push({
    //         Name: item.Name,
    //         Email: item.Email,
    //         PhoneNumber: item["Phone Number"],
    //       });
    //     });
    //     res.status(StatusCodes.OK).json({
    //       message: "CSV uploaded  successfully",
    //       CSV_Json: newJson,
    //     });
    //     fs.unlink(path);
    //   });
  } catch (error) {
    console.log(error);
  }

  // console.log('this is working')
};

module.exports = {
  uploadFile,
};
