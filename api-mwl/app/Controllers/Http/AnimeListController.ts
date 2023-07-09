// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AnimeListService } from 'App/Services/AnimeListService';

export default class AnimeListsController {
    public async getAll(): Promise<any> {
        return await new AnimeListService().getAll()
    }
}
