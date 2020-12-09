const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
  });
  app.post("/add", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const obj = {
      status: "success" | "failure" | "error",
      message: "the sum of given two numbers",
      sum: 0,
    };
    if (isNaN(num1) || isNaN(num2)) {
      obj.message = "Invalid data types";
    } else {
      const number1 = Number(num1);
      const number2 = Number(num2);
      const result = number1 + number2;
      if (number1 < -1000000 || result < -1000000) {
        obj.message = "Underflow";
      } else if (number1 > 1000000 || result > 1000000) {
        obj.message = "Overflow";
      } else {
        obj.sum = result;
      }
    }
    res.send(obj);
  });
  
  app.post("/sub", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const obj = {
      status: "success" | "failure" | "error",
      message: "the difference of given two numbers",
      difference: 0,
    };
    if (isNaN(num1) || isNaN(num2)) {
      obj.message = "Invalid data types";
    } else {
      const number1 = Number(num1);
      const number2 = Number(num2);
      const result = number1 - number2;
      if (number1 < -1000000 || result < -1000000) {
        obj.message = "Underflow";
      } else if (number1 > 1000000 || result > 1000000) {
        obj.message = "Overflow";
      } else {
        obj.difference = result;
      }
    }
    res.send(obj);
  });
  app.post("/multiply", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const obj = {
      status: "success" | "failure" | "error",
      message: "The product of given numbers",
      result: 0,
    };
    if (isNaN(num1) || isNaN(num2)) {
      obj.message = "Invalid data types";
    } else {
      const number1 = Number(num1);
      const number2 = Number(num2);
      const result = number1 * number2;
      if (number1 < -1000000 || result < -1000000) {
        obj.message = "Underflow";
      } else if (number1 > 1000000 || result > 1000000) {
        obj.message = "Overflow";
      } else {
        obj.result = result;
      }
    }
    res.send(obj);
  });
  app.post("/divide", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const obj = {
      status: "success" | "failure" | "error",
      message: "The division of given numbers",
      result: 0,
    };
    if (isNaN(num1) || isNaN(num2)) {
      obj.message = "Invalid data types";
    } else {
      if (num2 === 0) {
        obj.message = "Cannot divide by zero";
      } else {
        const number1 = Number(num1);
        const number2 = Number(num2);
        const result = number1 / number2;
        if (number1 < -1000000 || result < -1000000) {
          obj.message = "Underflow";
        } else if (number1 > 1000000 || result > 1000000) {
          obj.message = "Overflow";
        } else {
          obj.result = result;
        }
      }
    }
    res.send(obj);
  });


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;