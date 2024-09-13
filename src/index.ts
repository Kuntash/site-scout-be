import express from 'express';
import morgan from 'morgan';
import exampleRoutes from './modules/example/routes/example.routes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', exampleRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
