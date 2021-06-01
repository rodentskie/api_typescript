import userController from '../../controller/users/app';

const route = (router: any, makeExpressCallback: Function, validateAuth: Function) => {
    // #####
    // GET
    // router.get('/', validateAuth, makeExpressCallback(userController.userAdds));
    // router.get('/:id', validateAuth, makeExpressCallback(userController.userAdds));
    // #####
    // POST

    // add new employee
    router.post('/', validateAuth, makeExpressCallback(userController.userAdds));

    // #####
    // PATCH

    // update employee
    // router.patch('/:id', validateAuth, makeExpressCallback(employeesUpdates));

    // #####
    // DELETE

    // router.delete('/:id', validateAuth, makeExpressCallback(employeesDeletes));

    return router;
};

export default route;
