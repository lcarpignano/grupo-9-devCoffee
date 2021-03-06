// Modules
//--------
const express = require ('express');
const app = express();
const methodOverride = require('method-override');
const session = require ('express-session');
const userLoggedMiddleware = require('../src/middleware/userLoggedMiddleware')
const cors = require('cors')


app.use(session({ 
    secret: 'Break Coffee',
    resave: false,
    saveUninitialized: true,
    maxAge: Date.now() + (1000 * 3600)
}));

const cookieParser = require ('cookie-parser')
app.use(cookieParser());

app.use(userLoggedMiddleware);


// Setting
//--------
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static('public'));
app.use(cors())

// Forms
//--------
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/* app.use((req, res, next) => {
    res.status(404).render('not-found')
}); */

// Routes
//--------
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const apiProductsRouter = require('./routes/apiProductsRouter');
const apiUsersRouter = require('./routes/apiUsersRouter');

app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/apiproducts', apiProductsRouter);
app.use('/apiusers', apiUsersRouter);


app.listen(process.env.PORT || 3030, console.log('Ya puedes ir a http://localhost:3030'));