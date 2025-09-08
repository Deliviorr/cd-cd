const { Router } = require('express');
const controller = require('../controller/controller')

const router = Router();

router.get('/projecten', controller.projecten_get);
router.get('/home', controller.home_get);
router.get('/getCV', controller.get_CV);


module.exports = router;