const router = require('express').Router();
const seedController = require('../controllers/seed');
router.get('/api/seed', seedController.create);
module.exports = router;
