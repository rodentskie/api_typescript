const makeExpressCallback = (controller: Function) => {
    return (req: any, res: any) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent'),
                Cookie: req.get('Authorization'),
                'Access-Control-Allow-Origin': '*'
            }
        };
        controller(httpRequest)
            .then((httpResponse: any) => {
                if (httpResponse.headers) {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.set(httpResponse.headers);
                }
                res.type('json');
                res.status(httpResponse.statusCode).send(httpResponse.body);
            })
            .catch((e: string) => res.sendStatus(500));
    };
};

export default makeExpressCallback;
