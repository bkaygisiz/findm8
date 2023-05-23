import { Db, WithId } from "mongodb";
import { User } from "../types/types";

export const findUser = async (user: User, db: Db): Promise<any> => {
    try {
        const collection = db.collection('User');
        const result = await collection.findOne({email: user.email});
        return result;
    } catch (err: any) {
        return err;
    }
}