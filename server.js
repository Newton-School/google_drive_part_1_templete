import http from "http";
import fs from "fs";
import url from "url";
import getAFile from "./tools/getAFile.js";
import getAllFiles from "./tools/getAllFilename.js";
import createAfile from "./tools/createAfile.js";
import deleteAFile from "./tools/deleteAFile.js";
import updateAfile from "./tools/updateAfile.js";

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // Get All Files
  if (parsedUrl.pathname === "/file" && req.method === "GET") {
    // Write your code here
  }

  // Get A File
  if (parsedUrl.pathname.includes("file") && req.method === "GET") {
    // Write your code here
  }

  // Creating A File
  if (parsedUrl.pathname.includes("file") && req.method === "POST") {
    // Write your code here
  }

  // Updating A File
  if (parsedUrl.pathname.includes("file") && req.method === "PUT") {
    // Write your code here
  }

  // Deleting A File
  if (parsedUrl.pathname.includes("file") && req.method === "DELETE") {
    // Write your code here
  }

  // A error page
  if (req.method === "GET") {
    res.writeHead(404, { "Content-Type": "text/html" });
    return res.end("<h1>No Content</h1>");
  }
});

export default server;
