import express from 'express';
import mongoose from 'mongoose';
import router from './Avto/router.js';
import authRouter from './Authorization/authRouter.js';

const PORT = 5000;
const app = express();
const DB_URL = 'mongodb://localhost:27017';
app.use(express.json());
app.use('/api', router);
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  console.log(req.body);
  res.status(200).json('сервер работает');
});
async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log(`SERVER STERTED ON PORT${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
startApp();
