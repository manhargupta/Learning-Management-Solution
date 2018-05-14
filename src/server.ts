/**
 * Author : Manhar Gupta
 */
import  express from 'express'
import path from 'path'
const app = express();
import coursesRoute from './routes/courses'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',express.static(path.join(__dirname,"../public")))

const route = {
    course : coursesRoute
}

app.use('/courses',route.course)



app.listen(7777,()=>{
    console.log('server running on port 7777')
});
