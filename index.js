const http = require('http');
const Account = require('./entities/account.js');
const {PORT, HOST} = require('./constants.js');
const accontRoute = require('./routes/account.js');

const requestListener = function (req, res) {
    //Account route
    accontRoute(req,res);
};

const server = http.createServer(requestListener);

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});