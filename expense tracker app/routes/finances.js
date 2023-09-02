const express = require('express');
const financesController = require('../controllers/finances');

const router = express.Router();

router.get('/', financesController.getFinances);
router.post('/add', financesController.postAddFinance);
router.get('/edit/:financeId', financesController.getEditFinance);
router.post('/edit', financesController.postEditFinance);
router.post('/delete', financesController.postDeleteFinance);

module.exports = router;
