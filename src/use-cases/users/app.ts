import entity from '../../entities/users/app';
import userDb from '../../data-access/users/app';
// ####
import addUser from './insert-user';
// ####
const addUsers = addUser(entity.makeUsers, userDb);
// ####

// user use case
const userUC = {
    addUsers
};

export default userUC;
