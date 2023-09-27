import { ObjectId, WithId, Document } from "mongodb";

export interface SignUpFormData {
    email: string;
    username: string;
    password: string;
    comfirmPassword: string;
};

export interface User {
    email: string;
    username: string;
    password: string;
};

export interface LogingUser {
    email: string;
    password: string;
};