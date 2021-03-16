import { getCustomRepository } from "typeorm";
import PositionRepository from "../../repositories/PositionRepository";


class FindByIdPositionService {
    public async execute(id: number){
        const positionRepository = getCustomRepository(PositionRepository)
        const positions = await positionRepository.findOne({
            where: {id: id}
        })

        return positions
    }
}

export default FindByIdPositionService