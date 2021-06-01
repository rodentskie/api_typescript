const updateUser = (userDb: any, patchUsers: Function) => {
    return async function put(info: object) {
        let data = patchUsers(info);

        data = {
            id: data.getId(),
            firstName: data.getFn(),
            lastName: data.getLn(),
            email: data.getEmail(),
            age: data.getAge()
        };

        // check id if employee exist
        const checkId = await userDb.selectOne(data.id);
        if (checkId.rowCount == 0) throw new Error(`User doesn't exist, please check.`);

        // check if name exist
        const check = await userDb.checkNameExistUpdate(data);
        if (check.rowCount > 0) throw new Error(`User already exist, please check.`);

        // update
        const res = await userDb.patchUser(data);

        let msg = `User was not updated, please try again`;
        if (res[0] == 1) {
            msg = `User updated successfully.`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default updateUser;
