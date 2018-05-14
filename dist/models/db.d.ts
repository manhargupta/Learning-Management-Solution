/// <reference types="sequelize" />
/**
 * Author : Manhar Gupta
 */
import Sequelize from 'sequelize';
import { DataTypeAbstract, DefineAttributeColumnOptions } from "sequelize";
import { IBatch, ICourse, Ilecture, IStudent, ISubject, ITeacher } from './modelsI';
declare global  {
    type SequelizeAttributes<T extends {
        [key: string]: any;
    }> = {
        [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions;
    };
}
declare const db: Sequelize.Sequelize;
declare const models: {
    Course: Sequelize.Model<ICourse, any>;
    Batch: Sequelize.Model<IBatch, any>;
    Subject: Sequelize.Model<ISubject, any>;
    Teacher: Sequelize.Model<ITeacher, any>;
    Lecture: Sequelize.Model<Ilecture, any>;
    Student: Sequelize.Model<IStudent, any>;
};
export { models, db };
