var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
  response.sendfile('layouts/home.html');
});
router.use(express.static(__dirname + '/../assets'));
module.exports = router;
