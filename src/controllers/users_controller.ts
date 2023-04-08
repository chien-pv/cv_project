import {Request, Response} from "express"
import User from '../models/user';

class UserController {

    async index(req:Request, res:Response) {
        const users = await User.find({});
        res.render("index", {users: users});
    }
}

export default new UserController();