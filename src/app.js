const express = require ('express');
const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', 'src/views');


const mainRouter = require('./routes/mainRouter')
app.use('/', mainRouter);


const userRouter = require('./routes/userRouter')
app.use('/user', userRouter);
app.use('/user', userRouter);


const productRouter = require('./routes/productRouter')
app.use('/product', productRouter);
app.use('/product',productRouter);
app.use('/product', productRouter);


app.listen(process.env.PORT || 3030, console.log('Ya puedes ir a http://localhost:3030'));

