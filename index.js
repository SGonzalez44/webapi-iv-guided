const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Node 11' });
});

//heroku will need a dynamic port
//we can read the POPRT value by heroku to the environment

const port = process.env.PORT || 4400;
server.listen(port, () => console.log(`\n api running on ${port} \n`));