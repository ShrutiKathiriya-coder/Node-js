const express = require('express');
const multer = require('multer');
const route = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});


const upload = multer({ storage: storage }); //mildelwere



console.log("routing");

const { loginPage, userChecked, lostPassword, otpverifypage, checkEmail, checkotp, logout, dashboard, newsetpassword, AdminData, insertadmindata, deleteAdmin, viewAdmin, updateAdmin, editAdmin, viewProfile, changepassword, changemypassword ,checkPassword} = require('../controllers/admincontroller');


//login page
 route.get('/', loginPage);


route.post('/login', userChecked);
//lost password
route.get('/lostPasswordPage', lostPassword);
route.get('/otpverify', otpverifypage);
//emailcheck
route.post('/checkEmail', checkEmail);

//otp check
route.post('/checkOTP', checkotp);

//log out 

route.get('/logout', logout);

//password logic
route.get('/lostpassword', lostPassword);

//checkNewPassword

route.post('/checkPassword',checkPassword)

//dashboard
route.get('/dashboard', dashboard)
route.get('/addAdmin', AdminData)
route.post('/insertadmin', upload.single('image'), insertadmindata);
route.get('/deleteAdmin/:id', deleteAdmin);
route.get('/updateAdmin/:id', upload.single('image'), updateAdmin);
route.get('/viewAdmin', viewAdmin);
route.post('/editAdmin/:id', upload.single('image'), editAdmin);

//view profile
route.get('/viewProfile', viewProfile);

//change password
route.get('/changepassword', changepassword)

//newpassword

route.get('/newsetpassword', newsetpassword)
//changemypassword
route.post('/changemypassword', changemypassword)
module.exports = route;