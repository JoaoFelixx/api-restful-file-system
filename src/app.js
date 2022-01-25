const express = require('express');
const app     = express();
const routes  = require('./routes');
const { middlewareCors } = require('./middleware');

app.use(express.json());
app.use(middlewareCors);
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server on at port ${PORT}`));