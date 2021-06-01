const encrypt = (crypto: any, algorithm: any, password: any, iv: any) => {
    return function encrypt(text: string, isLower: boolean) {
        let str = null;
        if (text) {
            text = text.toString();
            if (isLower) text = text.toLowerCase(); // convert to lower case
            const cipher = crypto.createCipheriv(algorithm, password, iv);
            let encrypted = cipher.update(text, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            str = encrypted;
        }
        return str;
    };
};

export default encrypt;
