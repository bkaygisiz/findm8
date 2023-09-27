import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../../../lib/mongodb"
import * as AuthController from "@/controller/auth.controller";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const db = await connectToDatabase();
    await AuthController.loginUser(req, res, db);
}