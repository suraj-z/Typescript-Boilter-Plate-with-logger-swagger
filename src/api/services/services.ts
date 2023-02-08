import logger from "../../../logger/logger";

export const helloServices = async ():Promise<string> => {
    try {
        return "Hello World! ";
    }
    catch (e: any) {
        logger.error(`Error in helloServices catch | ${e.message} `);
        throw ({ "message": e.message });
    }
}