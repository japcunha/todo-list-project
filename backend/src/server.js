const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => res.status(200).send('Olá. mundo!'));

app.listen(PORT, () => console.log('server running on port ${PORT}'));
