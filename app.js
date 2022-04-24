const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const slidesRouter = require('./routes/slides');
const categoriesRouter = require('./routes/categories');
const contactRouter = require('./routes/contacts');
const membersRouter = require('./routes/members');
const testimonialsRouter = require('./routes/testimonials');
const newsRouter = require('./routes/news');
const authRouter = require('./routes/auth');
const activitiesRouter = require('./routes/activities');
const backofficeRouter = require('./routes/backoffice');
const organizationRouter = require('./routes/organization');
const { swaggerDefinitions } = require('./helpers/swaggerDefinitions');

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    debug: true
  })
);

app.use('/', indexRouter);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerDefinitions)));
app.use('/users', usersRouter);
app.use('/slides', slidesRouter);
app.use('/categories', categoriesRouter);
app.use('/contacts', contactRouter);
app.use('/members', membersRouter);
app.use('/news', newsRouter);
app.use('/auth', authRouter);
app.use('/actvities', activitiesRouter);
app.use('/backoffice', backofficeRouter);
app.use('/testimonials', testimonialsRouter);
app.use('/organization', organizationRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).json({
    isHttpError: true,
    statusCode: 404,
    title: 'Not found',
    message: 'Not found',
    type: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404'
  });
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error =
    req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).json({
    isHttpError: true,
    statusCode: err.status || 500,
    title: err.message,
    message: err.message,
    type: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${
      err.status || 500
    }`
  });
});

module.exports = app;
