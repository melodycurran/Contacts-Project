const router = require('express').Router();
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/docs', swaggerUI.serve);
router.get('/docs', swaggerUI.setup(swaggerDocument));

module.exports = router;