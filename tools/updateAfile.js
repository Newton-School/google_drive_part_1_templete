import fs from "fs";
import path from "path";

const filePath = path.join(path.resolve(), "root");

const updateAfile = (fileName, fileData) => {
    try {
        // Write your code here
    } catch (error) {
        return {
            success: false,
            message: error.message||"File Updation Failed",
        };
    }
};

export default updateAfile