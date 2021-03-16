
import express from 'express';
import routes from './routes';
import morgan from 'morgan'
import cors from 'cors'
import './database'

const corsOpts = cors({origin: true})

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(corsOpts);
app.use(routes);

app.listen(3333, () => {
    console.log('⚽ Os jogadores ja estão em campo (porta 3333!)')
})