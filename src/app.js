const express = require ('express');
const app = express();
const methodOverride = require('method-override');

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', 'src/views');

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

const productRouter = require('./routes/productRouter');
app.use('/product', productRouter);

app.listen(process.env.PORT || 3030, console.log('Ya puedes ir a http://localhost:3030'));