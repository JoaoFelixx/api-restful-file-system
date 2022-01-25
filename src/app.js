const express = require('express');
const app     = express();
const routes  = require('./routes');

app.use(express.json());
app.set('json spaces', 2);
app.use('/api/v1/users', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server on at port ${PORT}`));