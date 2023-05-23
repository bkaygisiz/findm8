import { User } from "../types/types";
import { Db } from "mongodb";

export const registerUser = async (user: User, db: Db) => {
    try {
        const collection = db.collection('User');
        const op = await collection.insertOne(user);
        return op;
    } catch (err: any) {
        return err;
    }
}