const getBody = (req,res,cb)=>{
    const chunks = [];
    req.on("data", (chunk) => {
        chunks.push(chunk);
        if (chunks.length > 1e6) {
          chunks = "";
          res.writeHead(413, { "Content-Type": "application/json" }).end();
          req.connection.destroy();
        }
      });
      req.on("end", () => {
        const data = JSON.parse(Buffer.concat(chunks).toString());
        cb(data)
      });
}
module.exports  = getBody