import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

const algorithm = process.env.ALGORITHM;
const password = process.env.ENCRYPTION_KEY;
const iv = process.env.IV;

// ########
import encrypt from './encrypt';
import decrypt from './decrypt';
// ########
const enc = encrypt(crypto, algorithm, password, iv);
const dec = decrypt(crypto, algorithm, password, iv);
// ########

const _ = {
    enc,
    dec
};

export default _;
