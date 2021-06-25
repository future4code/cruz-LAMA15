import { BandDatabase } from "../data/BandDatabase";
import { ConflictError } from "../error/ConflictError";
import { MissingParametersError } from "../error/MissingParametersError";
import { Band, BandInputDTO } from "../model/Band";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {

    async register(band: BandInputDTO) {
        const { name, musicGenre, responsible } = band

        if (!name || !musicGenre || !responsible) {
            throw new MissingParametersError("absence of parameters 'name' or 'musicGenre' or 'responsible', these are required")
        }

        const bandDatabase = new BandDatabase()

        const bandFromDatabase = await bandDatabase.getByName(name)
        
        if (bandFromDatabase.length > 0) {
            throw new ConflictError('band already assigned')
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        await bandDatabase.register(id, name, musicGenre, responsible)

        return { 
            ...band,
            id
        }
    }
}