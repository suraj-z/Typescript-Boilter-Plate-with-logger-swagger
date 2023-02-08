import express from 'express';
import bodyParser from 'body-parser';
import router from './api/routes/routes';
import swaggerUi from 'swagger-ui-express';
import swagger from '../swagger.json';
import logger from '../logger/logger';
import { banner } from '../logger/banner';
import morgan from 'morgan';

const app = express();
app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens['response-time'](req, res), 'ms',
    ].join(' ')
}));
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(router);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger));     
  
const port = 3000;
app.listen(port, () => {
    banner(logger)
})
export default app;