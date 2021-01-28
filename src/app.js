// Modules
//--------
const express = require ('express');
const app = express();
const methodOverride = require('method-override');

// Setting
//--------
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static('public'));

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

app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);


app.listen(process.env.PORT || 3030, console.log('Ya puedes ir a http://localhost:3030'));