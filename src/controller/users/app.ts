import userUC from '../../use-cases/users/app';
// #####
import userAdd from './insert-user';
import userSelect from './select-user';
// #####
const userAdds = userAdd(userUC.addUsers);
const userSelects = userSelect(userUC.selectUsers);
// #####
const userController = {
    userAdds,
    userSelects
};

export default userController;
