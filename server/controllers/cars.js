
import CarMessage from "../models/carMessage.js";

export const getCars = async (req, res) => {
    try {
        // Asynchronous method to retrieve cars
        const carMessages = await CarMessage.find();
        res.status(200).json(carMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addCar = async (req, res) => {
    const car = req.body;
    const newCar = new CarMessage(car);
    try {
        await newCar.save();
        res.status(202).json(newCar);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}