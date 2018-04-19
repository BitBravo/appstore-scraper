// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as scrapController from '../controllers/scrap.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/').post(scrapController.getData);
router.route('/').post(scrapController.saveData);

export default router;
