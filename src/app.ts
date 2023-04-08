import express from 'express';
import path from 'path';
import indexRoutes from './routes/index'
import userRoutes from './routes/user';
import {connect} from './config/connectDB'
//Init
const app = express();
const port =  3000;

//connect mongodb
connect()

//config view

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
//config Routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});