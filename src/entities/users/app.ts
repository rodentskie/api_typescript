import _ from '../../functions/app'; // functions

// ####
import makeUser from './make-user';
// ####
const makeUsers = makeUser(_.enc);
// ####

const entity = {
    makeUsers
};

export default entity;
