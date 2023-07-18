const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
const categoryRouter = require('./routes/category.routes')

const routes = app => {
    app.use('/exercises', exercisesRouter);
    app.use('/users', userRouter);
    app.use('/category', categoryRouter)

};

module.exports = routes;

