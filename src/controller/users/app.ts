import userUC from '../../use-cases/users/app';
// #####
import userAdd from './insert-user';
// #####
const userAdds = userAdd(userUC.addUsers);
// #####
const userController = {
    userAdds
};

export default userController;
