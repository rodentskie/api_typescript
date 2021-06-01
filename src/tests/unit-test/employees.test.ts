import randomstring from 'randomstring';

// change to test DB
beforeAll(() => {
    process.env.NODE_ENV = 'test';
});

// require functions on users
import userUC from '../../use-cases/users/app';

describe(`Users Tests Suites`, () => {
    test(`Select Users`, async () => {
        const info = {};
        const res = await userUC.selectUsers(info);
        expect(res).toBeDefined();
    });

    test(`Add Users - All fields have value.`, async () => {
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
            age: 8
        };
        const res = await userUC.addUsers(info);
        expect(res).toBe(`User has been added successfully.`);
    });

    test(`Add Users - Required fields missing.`, async () => {
        try {
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
            await userUC.addUsers(info);
        } catch (e) {
            expect(e.toString()).toBe('Error: Please enter last name.');
        }
    });

    test(`Update Users - All fields have value.`, async () => {
        // select last added
        const info = {};
        const emp = await userUC.selectUsers(info);
        const employee = emp[emp.length - 1];
        const employeeId = employee.id;

        const data = {
            id: employeeId,
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

        const res = await userUC.updateUsers(data);
        expect(res).toBe(`User updated successfully.`);
    });

    test(`Update Users - Required fields are missing.`, async () => {
        try {
            // select last added
            const info = {};
            const emp = await userUC.selectUsers(info);
            const employee = emp[emp.length - 1];
            const employeeId = employee.id;

            const data = {
                id: employeeId,
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

            await userUC.updateUsers(data);
        } catch (e) {
            expect(e.toString()).toBe('Error: Please enter first name.');
        }
    });

    test(`Delete Users.`, async () => {
        // select last added
        const info = {};
        const emp = await userUC.selectUsers(info);
        const employee = emp[emp.length - 1];
        const employeeId = employee.id;

        const data = {
            id: employeeId
        };

        const res = await userUC.deleteUsers(data);
        expect(res).toBe(`User deleted successfully.`);
    });

    test(`Delete Users doesn't exist.`, async () => {
        try {
            // select last added
            const info = {};
            const emp = await userUC.selectUsers(info);
            const employee = emp[emp.length - 1];
            const employeeId = employee.id;
            const data = {
                id: parseInt(employeeId) + 10 // id that never exist
            };
            await userUC.deleteUsers(data);
        } catch (e) {
            expect(e.toString()).toBe('Error: User was not deleted, please try again.');
        }
    });
});
