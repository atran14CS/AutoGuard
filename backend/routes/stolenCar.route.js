import express from "express";
const router = express.Router();
import { addComment, addStolenCar, getComments, getStolenCarByLicensePlate, getStolenCars } from "../controllers/stolenCar.controller.js";

export default router;

router.post('/addStolenCar', addStolenCar);
router.get('/getStolenCars', getStolenCars);
router.get('/getStolenCar/:licensePlate', getStolenCarByLicensePlate)
router.get('/getComments/:licensePlate', getComments);
router.post('/addComment', addComment);