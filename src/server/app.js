import express from 'express';
import path from 'path';

const app = express();
const publicPath = path.resolve(__dirname, '..', '..', 'public');

app.use(express.static(publicPath));

app.listen(3000, () => {
   console.log('http://localhost:3000');
});