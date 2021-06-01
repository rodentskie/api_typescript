import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const url = `${process.env.BASE_URL}:${process.env.TEST_PORT}`;

const routes = () => {
    return Object.freeze({
        selectUser,
        addUser,
        updateUser,
        removeUser
    });

    async function selectUser() {
        try {
            const res = await axios({
                method: 'GET',
                url: `${url}/api/users`,
                auth: {
                    username: process.env.name!,
                    password: process.env.pass!
                }
            });
            return res;
        } catch (e) {
            return e;
        }
    }

    async function addUser(info: Object) {
        try {
            const res = await axios({
                method: 'POST',
                url: `${url}/api/users`,
                auth: {
                    username: process.env.name!,
                    password: process.env.pass!
                },
                data: {
                    ...info
                }
            });
            return res;
        } catch (e) {
            return e;
        }
    }

    async function updateUser(id: string, info: Object) {
        try {
            const res = await axios({
                method: 'PATCH',
                url: `${url}/api/users/${id}`,
                auth: {
                    username: process.env.name!,
                    password: process.env.pass!
                },
                data: {
                    ...info
                }
            });
            return res;
        } catch (e) {
            return e;
        }
    }

    async function removeUser(id: string) {
        try {
            const res = await axios({
                method: 'DELETE',
                url: `${url}/api/users/${id}`,
                auth: {
                    username: process.env.name!,
                    password: process.env.pass!
                }
            });
            return res;
        } catch (e) {
            return e;
        }
    }
};

const route = routes();

export default route;
