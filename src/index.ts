import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import RootRouter from './routes';

/* load env */
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/', RootRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
