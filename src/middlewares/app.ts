import auth from 'basic-auth';
import dotenv from 'dotenv';

// ####
import myAuth from './basic-auth';
// ####
const validateAuth = myAuth(auth, dotenv);
// ####

export default validateAuth;
