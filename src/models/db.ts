/**
 * Author : Manhar Gupta
 */
import Sequelize from 'sequelize';
import { DataTypeAbstract, DefineAttributeColumnOptions } from "sequelize";
import {IBatch,ICourse,Ilecture,IStudent,ISubject,ITeacher} from './modelsI'

declare global {
    type SequelizeAttributes<T extends { [key: string]: any }> = {
        [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions;
    };
}

const db = new Sequelize('lms', 'manhargupta', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 5000
    }
});

const courseAttr: SequelizeAttributes<ICourse> = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:Sequelize.STRING,
};
const Course = db.define<ICourse,any>('course', courseAttr);


const batchAttr: SequelizeAttributes<IBatch> = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:Sequelize.STRING,
};
const Batch = db.define<IBatch,any>('batch', batchAttr);


const subjectAttr: SequelizeAttributes<ISubject> = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:Sequelize.STRING,
};
const Subject = db.define<ISubject,any>('subject', subjectAttr);


const techerAttr: SequelizeAttributes<ITeacher> = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:Sequelize.STRING,
};
const Teacher = db.define<ITeacher,any>('teacher', techerAttr);


const lectureAttr: SequelizeAttributes<Ilecture> = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:Sequelize.STRING,
};
const Lecture = db.define<Ilecture,any>('lecture', lectureAttr);


const studentAttr: SequelizeAttributes<IStudent> = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:Sequelize.STRING,
};
const Student = db.define<IStudent,any>('student', studentAttr);


Batch.belongsTo(Course)
Course.hasMany(Batch)

Course.belongsToMany(Subject,{through: 'course_subject',onDelete : 'cascade'});

Teacher.belongsToMany(Subject,{through: 'teacher_subject',onDelete : 'cascade'});

Lecture.belongsTo(Batch)
Batch.hasMany(Lecture)

Lecture.belongsTo(Subject)
Subject.hasOne(Lecture)

Lecture.belongsTo(Teacher)
Teacher.hasOne(Lecture)

Student.belongsToMany(Batch,{through: 'Student_Batch',onDelete : 'cascade'});
Batch.belongsToMany(Student,{through: 'Student_Batch',onDelete : 'cascade'});

(async function(){
    try{
        await db.authenticate()
        await db.sync({force: false})
            .then(() => {
                console.log("Database Synchronised");
            })
            .catch((err) => {
                console.log("Error setting up Database");
                console.error(err);
            });
    }
    catch (e) {
        console.log(e)
    }
})()

const models = {
    Course,
    Batch,
    Subject,
    Teacher,
    Lecture,
    Student
}

export {models,db}