const express = require("express"),
    router = express.Router(),
    mainController = require('../app/controllers/main.controller');

module.exports = router;


router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/SAMPLEPOST', mainController.SAMPLEPOST);
router.get('/contact', mainController.contact);
