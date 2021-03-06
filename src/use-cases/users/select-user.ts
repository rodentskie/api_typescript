const selectUser = (userDb: any, decrypt: Function) => {
    return async function select(info: any) {
        let data = [];
        const { id } = info; // deconstruct

        if (id) {
            // select one
            const res = await userDb.selectOne(id);
            if (res.rowCount > 0) {
                // only when there is data returned
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];

                    // push items to array
                    data.push({
                        id: e.id,
                        firstName: e.firstName ? decrypt(e.firstName) : null,
                        lastName: e.lastName ? decrypt(e.lastName) : null,
                        email: e.lastName ? decrypt(e.email) : null,
                        age: e.age ? e.age : 0,
                        createdAt: e.createdAt,
                        updatedAt: e.updatedAt
                    });
                }
            }
        } else {
            // select all
            const res = await userDb.selectAll();
            if (res.rowCount > 0) {
                // only when there is data returned
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];

                    // push items to array
                    data.push({
                        id: e.id,
                        firstName: e.firstName ? decrypt(e.firstName) : null,
                        lastName: e.lastName ? decrypt(e.lastName) : null,
                        email: e.lastName ? decrypt(e.email) : null,
                        age: e.age ? e.age : 0,
                        createdAt: e.createdAt,
                        updatedAt: e.updatedAt
                    });
                }
            }
        }
        return data;
    };
};

export default selectUser;
