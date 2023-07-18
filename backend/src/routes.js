const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
const categoryRouter = require('./routes/category.routes')
const expenseRouter = require('./routes/expense.routes')

const routes = app => {
    app.use('/exercises', exercisesRouter);
    app.use('/users', userRouter);
    app.use('/categories', categoryRouter)
    app.use('/expenses', expenseRouter)

};

module.exports = routes;

