import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import RootRouter from './routes';

/* load env */
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/', RootRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
