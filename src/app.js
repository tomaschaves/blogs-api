const express = require('express');
const loginRouter = require('./routes/login.router');
const userRouter = require('./routes/user.router');
const categoryRouter = require('./routes/category.router');
const postsRouter = require('./routes/posts.router');
// const salesRouter = require('./routers/sales.router');
// ...

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postsRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
