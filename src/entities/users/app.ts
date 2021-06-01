import _ from '../../functions/app'; // functions

// ####
import makeUser from './make-user';
import patchUser from './patch-user';
// ####
const makeUsers = makeUser(_.enc);
const patchUsers = patchUser(_.enc);
// ####

const entity = {
    makeUsers,
    patchUsers
};

export default entity;
