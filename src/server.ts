import express, { Application } from 'express';
import { resolve } from 'path';
import { indexRouter } from './utils/routes/index';
import { uploadRouter } from './utils/routes/upload';
import { reszieRouter } from './utils/routes/resize';

const port = 5000;

const app: Application = express();

app.set('views', resolve(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploaded_images', express.static(resolve(__dirname, '..', 'images', 'uploaded_images')));
app.use('/processed_images', express.static(resolve(__dirname, '..', 'images', 'processed_images')));

app.use('/', indexRouter);
app.use('/upload', uploadRouter);
app.use('/processed_images', reszieRouter);

app.listen(port, () => console.log(`Image_API_SERVER RUNNING ON PORT ${port}`));

export default app;