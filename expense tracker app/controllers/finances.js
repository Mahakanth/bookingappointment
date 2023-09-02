// controllers/finances.js
const Expense = require('../models/expense'); // Assuming you have an Expense model

exports.getFinances = (req, res, next) => {
  Expense.findAll()
    .then((expenses) => {
      res.render('finances', {
        pageTitle: 'Finances',
        expenses: expenses,
      });
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/');
    });
};

exports.postAddFinance = (req, res, next) => {
  const description = req.body.description;
  const amount = parseFloat(req.body.amount);
  const type = req.body.type; // You can use a dropdown to specify "expense" or "income"

  Expense.create({
    description: description,
    amount: amount,
    type: type,
  })
    .then(() => {
      res.redirect('/finances');
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/finances');
    });
};

exports.getEditFinance = (req, res, next) => {
  const financeId = req.params.financeId;

  Expense.findByPk(financeId)
    .then((finance) => {
      if (!finance) {
        return res.redirect('/finances');
      }

      res.render('edit-finance', {
        pageTitle: 'Edit Finance',
        finance: finance,
      });
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/finances');
    });
};

exports.postEditFinance = (req, res, next) => {
  const financeId = req.body.financeId;
  const updatedDescription = req.body.description;
  const updatedAmount = parseFloat(req.body.amount);

  Expense.findByPk(financeId)
    .then((finance) => {
      if (!finance) {
        return res.redirect('/finances');
      }

      finance.description = updatedDescription;
      finance.amount = updatedAmount;

      return finance.save();
    })
    .then(() => {
      res.redirect('/finances');
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/finances');
    });
};

exports.postDeleteFinance = (req, res, next) => {
  const financeId = req.body.financeId;

  Expense.findByPk(financeId)
    .then((finance) => {
      if (!finance) {
        return res.redirect('/finances');
      }

      return finance.destroy();
    })
    .then(() => {
      res.redirect('/finances');
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/finances');
    });
};
