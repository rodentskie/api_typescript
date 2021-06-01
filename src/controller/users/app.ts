import userUC from '../../use-cases/users/app';
// #####
import userAdd from './insert-user';
import userSelect from './select-user';
import usersUpdate from './update-user';
// #####
const userAdds = userAdd(userUC.addUsers);
const userSelects = userSelect(userUC.selectUsers);
const usersUpdates = usersUpdate(userUC.updateUsers);
// #####
const userController = {
    userAdds,
    userSelects,
    usersUpdates
};

export default userController;
