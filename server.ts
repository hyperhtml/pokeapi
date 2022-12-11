import express, { Express, Request, Response} from 'express';

const PORT: string = process.env.PORT || "3000";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send({success: "true"})
});

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
})