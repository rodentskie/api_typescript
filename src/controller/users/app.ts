import userUC from '../../use-cases/users/app';
// #####
import userAdd from './insert-user';
import userSelect from './select-user';
import usersUpdate from './update-user';
import userDelete from './delete-user';
// #####
const userAdds = userAdd(userUC.addUsers);
const userSelects = userSelect(userUC.selectUsers);
const usersUpdates = usersUpdate(userUC.updateUsers);
const userDeletes = userDelete(userUC.deleteUsers);
// #####
const userController = {
    userAdds,
    userSelects,
    usersUpdates,
    userDeletes
};

export default userController;
