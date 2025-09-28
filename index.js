import express from 'express';
import userRoutes from './routes/clientes.js';
import taskRoutes from './routes/ordenes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/clientes', userRoutes);
app.use('/ordenes', taskRoutes);


const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
