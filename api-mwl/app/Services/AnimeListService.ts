import { HttpGet } from "App/Functions/Axios"
import Env from '@ioc:Adonis/Core/Env'

const jikanUrl = Env.get('JIKAN_URL')

export class AnimeListService {
    public async getAll(): Promise<any> {
        return await HttpGet(jikanUrl + '/anime')
    }
}