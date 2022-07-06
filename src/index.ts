import express from 'express';
import routes from './routes/router';

const app = express();
const port = 3000;

//api/images
app.use('/api', routes);


/*app.get('/api', (req, res) => {
    res.send('Hello, world!');
});
*/
app.listen(port, ()=> {
    console.log(`server started at localhost:${port}`)
});