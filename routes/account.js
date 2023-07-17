const { ERRORS } = require("../constants.js");
const Account = require("../entities/account.js");
const getBody = require("../utils/getBody.js");

const accountRoute = (req, res) => {
  if (req.url === "/api/deposit" && req.method === "POST") {
    res.setHeader("Content-Type", "application/json");
    const account = new Account();

    getBody(req, res, (data) => {
      if (data.amount && typeof data.amount === "number") {
        const update = account.deposit(data.amount);
        const response = JSON.stringify(update);
        if (update.error) {
          return res.writeHead(400).end(response);
        }
        return res.writeHead(200).end(response);
      }
      return res
        .writeHead(400)
        .end(JSON.stringify({ error: ERRORS.NAN_AMOUNT }));
    });
  } else if (req.url === "/api/withdraw" && req.method === "POST") {
    res.setHeader("Content-Type", "application/json");
    const account = new Account();

    getBody(req, res, (data) => {
      if (data.amount && typeof data.amount === "number") {
        const update = account.withdraw(data.amount);
        const response = JSON.stringify(update);
        if (update.error) {
          return res.writeHead(400).end(response);
        }
        return res.writeHead(200).end(response);
      }
      return res
        .writeHead(400)
        .end(JSON.stringify({ error: ERRORS.NAN_AMOUNT }));
    });
  } else if (req.url === "/api/print" && req.method === "GET") {
    const account = new Account();
    res.setHeader("Content-Type", "application/json");
    return res.writeHead(200).end(JSON.stringify(account.print()));
  }
};
module.exports = accountRoute;
