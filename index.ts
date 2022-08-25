import epxress, { NextFunction, Request, Response } from "express";
import { userRouter } from './users/users.js';

const port = 8080;
const app = epxress();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Время: ", Date.now());
  next();
});

app.get('/hello', (req: Request, res: Response) => {
  throw new Error("ERROR");
});

app.use("/users", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(401).send(err.message);
});

app.listen(port, () => {
  console.log(`Server is starting on http://localhost:${port}`);
});