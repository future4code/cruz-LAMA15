import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {
    private static TABLE_NAME = 'LAMA_BANDS'

    public async register(
        id: string,
        name: string,
        music_genre: string,
        responsible: string
    ) {
        try {
            await this.getConnection()
                .insert({
                    id,
                    name,
                    music_genre,
                    responsible
                })
                .into(BandDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getByName(name: string) {
        try {
            const result = await this.getConnection()
                .select()
                .where({ name })
                .into(BandDatabase.TABLE_NAME)

            return result
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getById(id: string) {
        try {
            const result = await this.getConnection()
                .select()
                .where({ id })
                .into(BandDatabase.TABLE_NAME)

            return result
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}