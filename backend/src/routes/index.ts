require("dotenv").config();
import { Router } from 'express';
import playersRouter from './players.routes'
import teamsRouter from './teams.routes'
import positionsRouter from './positions.routes'


const routes = Router();

routes.use('/players', playersRouter)
routes.use('/teams', teamsRouter)
routes.use('/positions', positionsRouter)

export default routes;