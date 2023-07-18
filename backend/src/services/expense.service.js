const ExpenseModel = require('../models/expense.model');

const expenseService = {

    createExpense: (expense) => {
        const amount = Number(expense.amount);
        const date = Date.parse(expense.date);
        const location = expense.location;
        const description = expense.description;
        const necessity = Number(expense.necessity);
        const category = expense.category;

        let subCategories = [];
        if (expense.subCategories && Array.isArray(expense.subCategories)) {
            subCategories = expense.subCategories;
        }

        const expenseModel = new ExpenseModel({amount, date, location, description, necessity, category, subCategories});
        return expenseModel.save();
    },

    getAllExpenses: () => {
        return ExpenseModel.find();
    },

    getExpenseById: (id) => {
        return ExpenseModel.findById(id);
    },

    updateExpense: (id, updatedExpense) => {
        return ExpenseModel.findById(id)
            .then(expense => {
                expense.amount = Number(updatedExpense.amount);
                expense.date = Date.parse(updatedExpense.date);
                expense.location = updatedExpense.location;
                expense.description = updatedExpense.description;
                expense.necessity = Number(updatedExpense.necessity);
                expense.category = updatedExpense.category;

                if(updatedExpense.subCategories && Array.isArray(updatedExpense.subCategories)) {
                    expense.subCategories = updatedExpense.subCategories;
                }

                return expense.save();
            });
    },

    deleteExpenseById: (id) => {
        return ExpenseModel.findByIdAndDelete(id);
    },
}

module.exports = expenseService;