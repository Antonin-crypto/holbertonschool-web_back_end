const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];


const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true).pathname;


  res.setHeader('Content-Type', 'text/plain');

  if (reqUrl === '/') {

    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {

    res.statusCode = 200;
    res.write('This is the list of our students\n');


    try {
      const studentsList = await countStudents(databasePath);
      res.end();
    } catch (error) {
      res.end(error.message);
    }
  } else {

    res.statusCode = 404;
    res.end('Resource not found');
  }
});


app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});


module.exports = app;
