const { Readable } = require("stream");
const express = require("express");
const cors = require("cors");
const pinataSDK = require("@pinata/sdk");
const dotenv = require("dotenv");

dotenv.config();

const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT_KEY });
const app = express();

app.use(express.text());
app.use(cors());

function stringToStream(str) {
  const stream = new Readable();
  stream.push(str);
  stream.push(null);
  return stream;
}

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

app.post("/store", async (req, res) => {
  const data = req.body;

  try {
    const stream = stringToStream(data);
    const pinataResponse = await pinata.pinFileToIPFS(stream, {
      pinataMetadata: { name: generateRandomString(10) },
    });

    res.send(pinataResponse);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Failed to process" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
