import fs from "fs";
import path from "path";
const filePath = path.join(path.resolve(), "root");
const createAfile = (fileName, fileData) => {
  try {
    // Write your code here
  } catch (error) {
    return {
      success: false,
      message: error.message||"File Creation Failed",
    };
  }
};

export default createAfile;
