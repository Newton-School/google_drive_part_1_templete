import fs from "fs";
import path from "path";

const filePath = path.join(path.resolve(), "root");

const getAllFiles = () => {
  try {
    // Write your code here
  } catch (error) {
    return {
      success: false,
      message: error.message||"File Deletion Failed",
    };
  }
};

export default getAllFiles;
