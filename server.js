const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const sayHello = (req, res) => res.send('Hello World');
app.get('/', sayHello);

app.listen(PORT, () => console.log(`Service is running at port ${PORT}`));