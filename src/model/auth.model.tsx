import { LogingUser, User } from "../types/types";
import { Db } from "mongodb";
import bcrypt from "bcryptjs";

export const registerUser = async (user: User, db: Db) => {
    try {
        const collection = db.collection('User');
        const op = await collection.insertOne(user);
        return op;
    } catch (err: any) {
        return err;
    }
}

export const loginUser = async (user: LogingUser, db: Db) => {
    try {
        const document = await db.collection('User').findOne({ email: user.email });
        let dbUser: User | null = document === null ? null : { email: document.email, username: document.username, password: document.password };
        if (dbUser !== null) {
            const hash = dbUser.password;
            const match = await bcrypt.compare(user.password, hash);
            if (!match) {
                return null;
            }
        }
        return dbUser;
    } catch (err: any) {
        return err;
    }
}