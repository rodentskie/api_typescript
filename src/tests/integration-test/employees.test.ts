import randomstring from 'randomstring';

import route from './employees';

describe(`Employees Tests Suites`, () => {
    test(`Select Employees`, async () => {
        const res = await route.selectUser();
        const data = res.status;
        expect(data).toBe(200);
    });

    test(`Add Employees - All fields have value.`, async () => {
        const info = {
            firstName: randomstring.generate({
                length: 12,
                charset: 'alphabetic'
            }), // generate random string
            lastName: randomstring.generate({
                length: 12,
                charset: 'alphabetic'
            }), // generate random string
            email: `${randomstring.generate({
                length: 5,
                charset: 'alphabetic'
            })}@gmail.com`, // generate random string
            age: 13
        };
        const res = await route.addUser(info);
        const data = res.status;
        expect(data).toBe(201);
    });

    test(`Add Employees - Required fields missing.`, async () => {
        const info = {
            firstName: randomstring.generate({
                length: 12,
                charset: 'alphabetic'
            }), // generate random string
            lastName: null,
            email: `${randomstring.generate({
                length: 5,
                charset: 'alphabetic'
            })}@gmail.com`, // generate random string
            age: 8
        };
        const res = await route.addUser(info);
        const data = res.response.status;
        expect(data).toBe(400);
    });

    test(`Update Employees - All fields have value.`, async () => {
        const emp = await route.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const info = {
            firstName: randomstring.generate({
                length: 12,
                charset: 'alphabetic'
            }), // generate random string
            lastName: randomstring.generate({
                length: 12,
                charset: 'alphabetic'
            }), // generate random string
            email: `${randomstring.generate({
                length: 5,
                charset: 'alphabetic'
            })}@gmail.com`, // generate random string
            age: 9
        };

        const res = await route.updateUser(id, info);
        const data = res.status;
        expect(data).toBe(200);
    });

    test(`Update Employees - Required fields are missing.`, async () => {
        const emp = await route.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const info = {
            firstName: null,
            lastName: randomstring.generate({
                length: 12,
                charset: 'alphabetic'
            }), // generate random string
            email: `${randomstring.generate({
                length: 5,
                charset: 'alphabetic'
            })}@gmail.com`, // generate random string
            age: 9
        };

        const res = await route.updateUser(id, info);
        const data = res.response.status;
        expect(data).toBe(400);
    });

    test(`Delete Employees`, async () => {
        const emp = await route.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;

        const res = await route.removeUser(id);
        const data = res.status;
        expect(data).toBe(200);
    });
});
