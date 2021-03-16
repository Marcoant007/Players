import { getCustomRepository } from "typeorm";
import TeamRepository from "../../repositories/TeamRepository";

class FindByIdTeamService {
    public async execute(id: number){
        const teamRepository = getCustomRepository(TeamRepository)
        const team = await teamRepository.findOne({
            where: { id :id}
        })

        return team
    }
}

export default FindByIdTeamService