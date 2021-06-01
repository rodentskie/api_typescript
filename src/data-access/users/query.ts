const query = (conn: any, models: any) => {
    return Object.freeze({
        insertUser,
        checkNameExist,
        selectAll,
        selectOne,
        checkNameExistUpdate,
        patchUser,
        removeUser
    });

    async function removeUser(id: string) {
        try {
            // use sequelize on inserting
            const User = models.User;
            const res = await User.destroy({
                where: {
                    id
                }
            });
            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function patchUser(data: any) {
        try {
            // use sequelize on update
            const User = models.User;
            const res = await User.update(
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    age: data.age
                },
                {
                    where: {
                        id: data.id
                    }
                }
            );
            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function checkNameExistUpdate(data: any) {
        try {
            const pool = await conn();

            const { firstName, lastName, id } = data; // deconstruct

            const res = await new Promise((resolve) => {
                const sql = `SELECT id FROM "Users" WHERE "firstName" = $1 AND id <> $3 AND "lastName" = $2 AND id <> $3;`;
                const params = [firstName, lastName, id];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function selectAll() {
        try {
            const pool = await conn();

            const res = await new Promise((resolve) => {
                const sql = `SELECT * FROM "Users";`;
                pool.query(sql, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function selectOne(id: number) {
        try {
            const pool = await conn();

            const res = await new Promise((resolve) => {
                const sql = `SELECT * FROM "Users" WHERE id = $1;`;
                const params = [id];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function checkNameExist(data: any) {
        try {
            const pool = await conn();

            const { firstName, lastName } = data; // deconstruct

            const res = await new Promise((resolve) => {
                const sql = `SELECT id FROM "Users" WHERE "firstName" = $1 AND "lastName" = $2;`;
                const params = [firstName, lastName];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }

    async function insertUser(data: Object) {
        try {
            // use sequelize on inserting
            const User = models.User;
            const res = await User.create(data);
            return res;
        } catch (e) {
            console.log('Error: ', e);
        }
    }
};

export default query;
