const decrypt = (crypto: any, algorithm: any, password: any, iv: any) => {
    return function decrypt(encrypted: string) {
        try {
            let str = null;
            if (encrypted) {
                const decipher = crypto.createDecipheriv(algorithm, password, iv);
                const dec = decipher.update(encrypted, 'hex', 'utf8');
                str = dec;
            }
            if (!str) return encrypted;
            return str;
        } catch (e) {
            return encrypted;
        }
    };
};

export default decrypt;
