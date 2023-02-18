const express = require("express");
const app = express();
const cors = require("cors");
var firebase = require("firebase");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

var config = {
  apiKey: "AIzaSyDteZhWWJFtI7-OwZa5DNJSVTLNg3bTML0",
  authDomain: "farm-mate-v2.firebaseapp.com",
  databaseURL: "https://farm-mate-v2-default-rtdb.firebaseio.com",
  projectId: "farm-mate-v2",
  storageBucket: "farm-mate-v2.appspot.com",
  messagingSenderId: "709150591055",
  appId: "1:709150591055:web:875dab586b8dcb8ec3823a",
  measurementId: "G-89THQVRTRF"
};
firebase.initializeApp(config);

app.get("/:id", function (req, res) {
  console.log("HTTP Gett Request");
  var id = req.params.id;
  var userReference = firebase.database().ref("/application/" + id);

  userReference.on(
    "value",
    function (snapshot) {
      console.log(snapshot.val());
      res.json(snapshot.val());
      userReference.off("value");
    },
    function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      res.send("The read failed: " + errorObject.code);
    }
  );
});

app.get("/", function (req, res) {
  console.log("HTTP Gets Request");
  var userReference = firebase.database().ref("/application/");

  userReference.on(
    "value",
    function (snapshot) {
      console.log(snapshot.val());
      res.json(snapshot.val());
      userReference.off("value");
    },
    function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      res.send("The read failed: " + errorObject.code);
    }
  );
});
{/*
app.put("/:id", function (req, res) {
  console.log("HTTP Put Request");

  var id = req.params.id;
  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;

  var referencePath = "/Data/" + id + "/";
  var userReference = firebase.database().ref(referencePath);
  userReference.update(
    { Id: id, Title: title, Description: description, Author: author },
    function (error) {
      if (error) {
        res.send("Data could not be saved." + error);
      } else {
        res.send("Data update successfully.");
      }
    }
  );
});

app.post("/", function (req, res) {
  console.log("HTTP POST Request");

  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;
  var id = Math.random().toString(36).substr(2, 9);

  var referencePath = "/Data/" + id + "/";
  var userReference = firebase.database().ref(referencePath);
  userReference.set(
    { Id: id, Title: title, Description: description, Author: author },
    function (error) {
      if (error) {
        res.send("Data could not be saved." + error);
      } else {
        res.send("Data saved successfully.");
      }
    }
  );
});

app.delete("/:id", function (req, res) {
  console.log("HTTP DELETE Request");
  console.log("HTTP POST Request");

  var id = req.params.id;

  var referencePath = "/Data/" + id;
  var userReference = firebase.database().ref(referencePath);
  userReference.remove().then(function (error) {
    if (error) {
      res.send("Data not be delete." + error);
    } else {
      res.send("Data delete successfully.");
    }
  });
  //todo
});
*/} 

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Running");
});
