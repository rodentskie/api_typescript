import conn from '../app';
import models from '../sequelize/models/index';
// ######
import query from './query';
// ######
const userDb = query(conn, models);
// ######
export default userDb;
