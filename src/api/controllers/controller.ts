import { Request,Response } from "express"
import { helloServices } from "../services/services"
import logger from "../../../logger/logger";

export const helloController = async (req: Request, res: Response): Promise<any> => {
    try {
        await helloServices().then((response) => {
            logger.info(`Get Api Response | ${response}`);
            return res.status(200).send({ "Status ": "SUCCESS", "Response": response });
            
        }).catch((error) => {
            logger.error(`Error in helloService Response | ${error}`);
            return res.status(400).send({ "Status ": "FAILED", "Response": error.message });
            
        })
    } catch (e) {
        logger.error(`Error in helloController | ${e}`);
        return res.status(400).send({"Status ": "FAILED" , "Response":e})
    }
    
}