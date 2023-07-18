const router = require('express').Router();
const expenseService = require('../services/expense.service');

// Get All Expenses
router.route('').get((req, res) => {
    expenseService.getAllExpenses()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create Expense
router.route('').post((req, res) => {
    expenseService.createExpense(req.body)
       .then(expense => res.json(expense))
       .catch(err => res.status(400).json('Error: ' + err));
});

// Get Expense by id
router.route('/:id').get((req, res) => {
    expenseService.getExpenseById(req.params.id)
        .then(expense => res.json(expense))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update Expense
router.route('/:id').put((req, res) => {
    expenseService.updateExpense(req.params.id, req.body)
        .then(expense => res.json(expense))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Expense by id
router.route('/:id').delete((req, res) => {
    expenseService.deleteExpenseById(req.params.id)
        .then(expense => res.json(expense))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;