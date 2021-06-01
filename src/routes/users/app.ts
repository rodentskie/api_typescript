import express from 'express';
const router = express.Router();
import makeExpressCallback from '../../express-callback/app';

import validateAuth from '../../middlewares/app';
// ###
import route from './routes';
// ###
const routes = route(router, makeExpressCallback, validateAuth);
// ###

export = routes;
