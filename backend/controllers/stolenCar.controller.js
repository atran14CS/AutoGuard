import mongoose from "mongoose";
import StolenCar from "../models/stolenCar.model.js";
import Comment from "../models/comment.model.js";


export const addStolenCar = async (req, res) => {
    let {licensePlate, make, model, state, city, vin, year} = req.body;
    try {
        let existingCar = await StolenCar.findOne({licensePlate});
        if(existingCar) {
            return res.status(400).send("Car with that license plate already exists");
        }
        if(licensePlate && make && model && state && city && vin) {
            let date = new Date();
            let stolenCar = new StolenCar({
                licensePlate,
                make,
                model,
                state,
                city,
                vin,
                year,
                date
            });
            await stolenCar.save();
            res.status(201).json({message: `Stolen car with license plate ${licensePlate} has been added`});
        } else {
            res.status(400).send("Missing required fields");
        }
    } catch (error) {
        console.log("Error occurred while trying to add stolen car");
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

export const getStolenCars = async (req, res) => {
    
}