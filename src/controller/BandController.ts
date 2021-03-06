import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO } from "../model/Band";

export class BandController {

    async register(request: Request, response: Response) {

        try {

            const input: BandInputDTO = {
                name: request.body.name,
                musicGenre: request.body.musicGenre,
                responsible: request.body.responsible
            }

            const bandBusiness = new BandBusiness()
            const band = await bandBusiness.register(input)

            return response.json(band)
        } catch (error) {
            return response
                .status(error.code || 400)
                .json({ message: error.sqlMessage || error.message })
        }

    }

    async details(request: Request, response: Response) {
        try {
            const id = request.query.id as string
            const name = request.query.name as string

            const bandBusiness = new BandBusiness()
            const band = await bandBusiness.details(id, name)

            return response.json(band)
        } catch (error) {
            return response
                .status(error.code || 400)
                .json({ message: error.sqlMessage || error.message })
        }
    }
}