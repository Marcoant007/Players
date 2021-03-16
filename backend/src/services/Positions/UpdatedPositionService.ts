import { getCustomRepository } from "typeorm";
import Position from "../../models/Position";
import PositionRepository from "../../repositories/PositionRepository";


interface Request {
    id: number,
    name_position_first: string
}

class UpdatedPositionService {
    public async execute({id,name_position_first} :Request){
        const positionRepository = getCustomRepository(PositionRepository)
        const positionUpdated = await positionRepository.save({
            id,
            name_position_first
        })
        return positionUpdated
    }
}


export default UpdatedPositionService