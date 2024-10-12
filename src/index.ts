import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import RootRouter from './routes';
import cors from 'cors';

/* load env */
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN);
  next();
});

app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/', RootRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
