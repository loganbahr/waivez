const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@waivez-cluster.3cvs8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri);
const db = client.db("waivez");

const init = () => {
  client.connect();
  console.log("Mongo client connected successfully.");
};

const getUser = async (req, resp) => {
  const { firstName, lastName, dateOfBirth } = req.query;

  const res = await searchUser(firstName, lastName, dateOfBirth);

  if (!res) {
    return resp
      .status(500)
      .send({ err: "No user by that information exists." });
  }

  return resp.status(200).send(res);
};

const searchUser = async (firstName, lastName, dateOfBirth) => {
  const res = await db
    .collection("users")
    .findOne({ firstName, lastName, dateOfBirth });

  return res;
};

const searchWaiversByUserId = async (userId) => {
  const res = await db.collection("waivers").find({ userId }).toArray();

  return res;
};

const insertUserInformation = async (userInfo) => {
  const document = await db.collection("users").insertOne({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    dateOfBirth: userInfo.dateOfBirth,
    email: userInfo.email,
    address: {
      line: userInfo.addressLine,
      city: userInfo.addressCity,
      state: userInfo.addressState,
      postal: userInfo.addressPostal,
    },
    phoneNumber: userInfo.phoneNumber,
  });

  return document.insertedId;
};

const insertWaivers = async (userId, waivers) => {
  db.collection("waivers").insertMany(
    waivers.map((waiver) => {
      return {
        userId,
        ...waiver,
      };
    })
  );
};

module.exports = {
  init,
  getUser,
  searchUser,
  searchWaiversByUserId,
  insertUserInformation,
  insertWaivers,
};
