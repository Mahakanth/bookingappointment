const express = require('express');
const router = express.Router();

const expenseController = require('../controllers/expenses');

router.get('/', expenseController.getExpenses);

router.get('/add', expenseController.getAddExpense);

router.post('/add', expenseController.postAddExpense);

router.get('/edit/:expenseId', expenseController.getEditExpense);

router.post('/edit', expenseController.postEditExpense);

router.post('/delete/:expenseId', expenseController.postDeleteExpense);

module.exports = router;
