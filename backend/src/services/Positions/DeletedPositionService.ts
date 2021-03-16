import { getCustomRepository } from "typeorm";
import PositionRepository from "../../repositories/PositionRepository";


interface Request {
    id: number
}

class DeletedPositionService {
    public async execute({id}: Request){
        const positionDeleted = getCustomRepository(PositionRepository)
        await positionDeleted.delete({id})
    }
}

export default DeletedPositionService