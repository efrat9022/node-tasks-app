var express=require('express');
var router=express.Router();
const logController = require('../Controllers/logController'); 

router.get('/logTask', logController.getLogList);
router.get('/deleteLogTask', logController.deleteLog);

module.exports = router;

