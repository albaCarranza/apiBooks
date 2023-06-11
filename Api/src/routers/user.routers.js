
const {Router} = require ('express')
const router = Router();
const userCtrl = require('../controller/user.controller')

router.post("/register", userCtrl.postRegister);

router.post("/login", userCtrl.postLogin)


module.exports = router;