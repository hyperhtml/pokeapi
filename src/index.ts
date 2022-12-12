import express, { Express, Request, Response} from 'express';
import rootRouter from './routes';
import router from './routes/pokemon'

const PORT: string = process.env.PORT || "3000";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send({success: "true"})
});

app.use('/', rootRouter)

// TODO: Add swagger API documentation

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
})