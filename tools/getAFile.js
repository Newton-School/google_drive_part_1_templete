import fs from 'fs';
import path from 'path';

const filePath = path.join(path.resolve(), 'root');

const getAFile = (fileName) => {
    try {
        // Write your code here
    } catch (error) {
        return {
            success: false,
            message: error.message||"Unable to read file",
        };
    }
}

export default getAFile;