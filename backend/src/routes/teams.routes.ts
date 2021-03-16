import { request, response, Router } from 'express'
import CreatedTeamService from '../services/Teams/CreatedTeamService'
import ListedTeamService from '../services/Teams/ListedTeamService'
import DeletedTeamService from '../services/Teams/DeletedTeamService'
import UpdatedTeamService from '../services/Teams/UpdatedTeamService'
import FindByIdTeamService from '../services/Teams/FindByIdTeamService'


const teamsRouter = Router()

teamsRouter.get('/:id', async(request,response) => {
    const { id } = request.params
    const findById = new FindByIdTeamService
    const team = await findById.execute(+id)
    return response.json(team)
})


teamsRouter.get('/', async (request, response) => {
    const listTeam = new ListedTeamService();
    const teams = await listTeam.execute()
    return response.status(200).json(teams)

})

teamsRouter.post('/', async (request, response) => {
    try {
        const { name, awards } = request.body
        const createdTeam = new CreatedTeamService()
        const teams = await createdTeam.execute({
            name,
            awards
        })
        console.log(name)
        console.log(awards)
        return response.status(200).json(teams)
    }
    catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

teamsRouter.put('/:id', async (request, response) => {
    const { id } = request.params
    const { name, awards } = request.body
    const updateTeamService = new UpdatedTeamService()
    const teams = await updateTeamService.execute({
        id: Number(id),
        name: name,
        awards: awards

    })
    return response.json(teams)
})

teamsRouter.delete('/:id', async (request, response) => {
    const { id } = request.params
    const deletedTeam = new DeletedTeamService()
    await deletedTeam.execute({ id: +id })
    return response.status(204).send({})
})

export default teamsRouter