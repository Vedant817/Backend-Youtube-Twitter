import dotenv from 'dotenv';
import connectDB from './db/index.js';
import {app} from './app.js'

dotenv.config({
    path:'./.env'
});
const port = process.env.PORT || 3000;

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server Running at ${port}`);
    })
})
.catch((err)=>{
    console.log('MongoDB Connection Failed!!',err);
})