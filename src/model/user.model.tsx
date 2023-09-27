import { Db, WithId, Document } from "mongodb";
import { User } from "../types/types";

export const findUser = async (user: User, db: Db): Promise<User | null> => {
    try {
        const result:WithId<Document> | null = await db.collection('User').findOne({email: user.email});
        const resultUser: User | null = (result === null ? null : { email: result.email, username: result.username, password: result.password });
        return resultUser;
    } catch (err: any) {
        return err;
    }
}