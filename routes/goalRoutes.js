const express = require('express');
const goalController = require('../controllers/goalController');
const auth = require("../middleware/auth");

const router = express.Router();

router.get('/', auth, goalController.get_goals);
router.post('/update', auth, goalController.update_goal);
router.post('/addGoal', auth, goalController.add_goal);
router.post('/deleteGoal', auth, goalController.delete_goal);
router.post('/updateCategories', auth, goalController.update_categories);

module.exports = router;