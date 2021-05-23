const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const configuration = require("./configuration");

app.use(express.static("../"));
app.use(express.json());

app.listen(3000, function () {
  console.log("node server is started on 3000");
});

app.get("/", function (req, res) {});

app.post("/subscriber", function (req, res) {
  async function searchMatch() {
    const conn = await mysql.createConnection(configuration);
    try {
      const [rows, fields] = await conn.execute(
        `SELECT * FROM service_page.subscriber WHERE email = "${req.body.email}"`
      );
      return rows;
    } catch (err) {
      throw err;
    } finally {
      conn.end();
    }
  }

  async function addSubscriber() {
    const conn = await mysql.createConnection(configuration);
    let rows = await searchMatch();

    try {
      if (rows.length != 0 || rows == undefined) {
        res.end(
          "Уважаемый(ая) " +
            req.body.email +
            " Вы, до этого, уже были подписаны."
        );
        return false;
      }

      await conn.execute(
        "INSERT INTO service_page.subscriber (email) VALUES ('" +
          req.body.email +
          "')"
      );
      res.end("Ваша почта: " + req.body.email + " успешно подписана");
    } catch (err) {
      throw err;
    } finally {
      conn.end();
    }
  }
  addSubscriber();
});

app.post("/contacts", function (req, res) {
  async function contacts() {
    const conn = await mysql.createConnection(configuration);
    try {
      await conn.execute(
        "INSERT INTO service_page.contacts (name, phone) VALUES ('" +
          req.body.name +
          "','" +
          req.body.number +
          "')"
      );
      res.end(
        "Уважаемый(ая) " +
          req.body.name +
          ", мы вам перезвоним по номеру " +
          req.body.number
      );
    } catch (err) {
      throw err;
    } finally {
      conn.end();
    }
  }

  contacts();
});
