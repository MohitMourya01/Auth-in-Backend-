import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './src/db/index.js';

const PORT = 8000
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || PORT, () =>{
        console.log(`listening on port ${PORT}`)
    })
})
.catch(error => {
    console.log("error ", error)
})