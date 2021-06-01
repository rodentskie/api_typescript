import userController from '../../controller/users/app';

const route = (router: any, makeExpressCallback: Function, validateAuth: Function) => {
    // #####
    // GET
    router.get('/', validateAuth, makeExpressCallback(userController.userSelects));
    router.get('/:id', validateAuth, makeExpressCallback(userController.userSelects));
    // #####
    // POST

    // add new employee
    router.post('/', validateAuth, makeExpressCallback(userController.userAdds));

    // #####
    // PATCH

    // update employee
    router.patch('/:id', validateAuth, makeExpressCallback(userController.usersUpdates));

    // #####
    // DELETE

    router.delete('/:id', validateAuth, makeExpressCallback(userController.userDeletes));

    return router;
};

export default route;
