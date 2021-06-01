const myAuth = (auth: any, dotenv: any) => {
    return async function auths(req: any, res: any, next: any) {
        dotenv.config();
        const val = auth(req);
        if (!val) return res.sendStatus(403);
        if (!val.name) return res.sendStatus(403);
        if (!val.pass) return res.sendStatus(403);

        if (val.name !== process.env.name) return res.sendStatus(403);
        if (val.pass !== process.env.pass) return res.sendStatus(403);

        next();
    };
};
export default myAuth;
