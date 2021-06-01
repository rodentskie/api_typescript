const addUser = (makeUsers: Function, userDb: any) => {
    return async function post(info: Object) {
        let data = await makeUsers(info); // entity

        data = {
            firstName: data.getFn(),
            lastName: data.getLn(),
            email: data.getEmail(),
            age: data.getAge()
        };

        // to do checking if name already exist
        const check = await userDb.checkNameExist(data);
        if (check.rowCount > 0) throw new Error(`User already exist, please check.`);

        //   insert
        const res = await userDb.insertUser(data);
        // ##
        let msg = `Error on inserting user, please try again.`;

        if (res) {
            msg = `User has been added successfully.`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default addUser;
