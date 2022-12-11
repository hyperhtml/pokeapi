import { Router } from 'express';
import pokemon from './pokemon';

const rootRouter = Router();

rootRouter.use(pokemon);

export default rootRouter;