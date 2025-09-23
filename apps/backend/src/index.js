import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Faceit AI Bot backend работает!' });
});

// TODO: добавить роуты для загрузки демо, поиска тиммейтов и AI

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
