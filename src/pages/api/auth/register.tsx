import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../../../lib/mongodb"
import * as AuthController from "@/controller/auth.controller";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = await connectToDatabase();
    AuthController.registerUser(req, res, db);
}