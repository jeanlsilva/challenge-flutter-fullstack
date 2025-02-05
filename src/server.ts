import { config } from 'dotenv';
import app from './app';

config();

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server started on port ${process.env.PORT || 3333}!`);
});
