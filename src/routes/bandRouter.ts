import express from 'express'
import { BandController } from '../controller/BandController';
import { ensureAdmin } from '../services/ensureAdmin'

const bandRouter = express.Router()

const bandController = new BandController();

bandRouter.post('/register', ensureAdmin, bandController.register)

export { bandRouter }