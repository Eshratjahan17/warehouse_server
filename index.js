const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.sh2v2dp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run(){
  try{

  }finally{

  }
  console.log("db connected");
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Running server");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
