import { response, Router } from 'express';

import CreatedPlayerService from '../services/Players/CreatedPlayerService';
import ListedPlayerService from '../services/Players/ListedPlayerService';
import DeletedPlayerService from '../services/Players/DeletedPlayerService';
import UpdatedPlayerService from '../services/Players/UpdatedPlayerService';
import multer from 'multer';
import multerConfig from '../config/multer'


const playersRouter = Router();


playersRouter.patch('/avatar', multer(multerConfig).single('file'), async (request, response) => {
    console.log(request.file);
    let file: any = request.file;
    console.log(file.location);
    return response.json({ location: file.location });
})

playersRouter.get('/', async (request, response) => {
    const listedPlayer = new ListedPlayerService();
    const players = await listedPlayer.execute()
    return response.json(players);
})

playersRouter.post('/', multer(multerConfig).single('avatar'), async (request, response) => {
    try {

        const { name, age, nationality, team_id, speed,
            dri,
            shoting,
            pass,
            defense,
        } = request.body;
        const createdPlayer = new CreatedPlayerService();

        let file: any = request.file;
        let defense2 = Number.parseInt(defense);
        let dri2 = Number.parseInt(dri);
        let pass2 = Number.parseInt(pass);
        let shoting2 = Number.parseInt(shoting);
        let speed2 = Number.parseInt(speed);

        const result = (defense2 + dri2 + pass2 + shoting2 + speed2) / 5
        const skill =  Math.round(result) 



        let avatar = file.location
        const players = await createdPlayer.execute(
            {
                name: name,
                age: age,
                nationality: nationality,
                team_id: +team_id,
                avatar: avatar,
                defense: +defense,
                dri: +dri,
                pass: +pass,
                shoting: +shoting,
                skill: +skill,
                speed: +speed
            }
        )
        console.log(name)
        console.log(age)
        console.log(nationality)
        console.log(team_id)
        console.log(avatar)
        console.log(defense)
        console.log(dri)
        console.log(pass)
        console.log(shoting)
        console.log(speed)
        console.log(skill)

        return response.status(200).json(players)
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})


playersRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const body = request.body
    const updatedPlayer = new UpdatedPlayerService();
    const players = await updatedPlayer.execute(body)
    return response.json(players)
})


playersRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedPlayer = new DeletedPlayerService()
    await deletedPlayer.execute({ id: +id })
    return response.status(204).send({})
})

export default playersRouter