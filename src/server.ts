/**
 * Author : Manhar Gupta
 */
import  express from 'express'
import path from 'path'
const app = express();
import coursesRoute from './routes/coursesRoutes/courses'
import teachersRoute from './routes/teachersRoutes/teachers'
import studentsRoute from './routes/studentsRoutes/students'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',express.static(path.join(__dirname,"../public")))

const route = {
    course : coursesRoute,
    teachers:teachersRoute,
    students:studentsRoute
}

app.use('/courses',route.course)
app.use('/teachers',route.teachers)
app.use('/students',route.students)



app.listen(7777,()=>{
    console.log('server running on port 7777')
});
