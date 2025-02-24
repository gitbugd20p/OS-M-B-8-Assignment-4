const express = require('express');
const UserController = require('../controllers/UserController')
const PortfolioController = require('../controllers/PortfolioController')

const AuthVerification = require('../middlewares/AuthVerification')

const router = express.Router();


// User
// =====================## I did not included OTP option for this Assignment.
// ex: router.get('/UserOTP/:email', UserController.UserOTP)

// =====================## Answers
// 1. Create an api for register user
router.post('/Register', UserController.Register);

// 2. Create an api for login (user logout)
router.get('/VerifyLogin/:email/:password', UserController.VerifyLogin)
router.get('/UserLogout', AuthVerification, UserController.UserLogout)

// 3. Only authorized user can create, read, delete and update portfolios. After login, they can perform these api if they have a token via jwt or cookie. 
// ==> AuthVerification for authorized user.

//  4. Create an API for portfolio and use post method for this. The portfolio body should contain -  title, description, img, code link, live link etc.
router.post('/CreatePortfolio', AuthVerification, PortfolioController.CreatePortfolio);

// 5. Create an API to delete a portfolio
router.post('/DeletePortfolio/:PortfolioID', AuthVerification, PortfolioController.DeletePortfolio);

// 6. Create an API to update or edit a portfolio
router.post('/UpdatePortfolio/:PortfolioID', AuthVerification, PortfolioController.UpdatePortfolio);

// 7. Create an API to read all the portfolio
router.get('/GetPortfolio', AuthVerification, PortfolioController.GetPortfolio);

module.exports = router;
