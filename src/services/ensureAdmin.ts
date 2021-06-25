import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Authenticator } from "./Authenticator";

export const ensureAdmin = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const token = request.headers.authorization

        if (!token) {
            throw new UnauthorizedError('token is required!')
        }

        const hashManager = new Authenticator()
        const tokenData = hashManager.getData(token)

        if (tokenData) {
            next()
        }

    } catch (error) {
        if (error.message === 'invalid signature') {
            response.status(401).json({error: 'Token is invalid!'})
        }

        if (error.message === 'jwt expired') {
            response.status(401).json({error: 'Token expired!'})
        }

        response.status(error.code || 401).json({ error: error.message })
    }
}