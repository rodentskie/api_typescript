import dotenv from 'dotenv';
import pg from 'pg';

// ###
import connect from './connection';
// ###
const conn = connect(dotenv, pg);
// ###

export default conn;
