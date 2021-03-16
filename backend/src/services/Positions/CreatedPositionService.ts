import { getCustomRepository } from 'typeorm'
import Position from '../../models/Position';
import PositionRepository from '../../repositories/PositionRepository'

interface Request {
    name_position_first: string

}

class CreatePositionService {
    public async execute({ name_position_first }: Request): Promise<Position> {
        const positionRepository = getCustomRepository(PositionRepository)
        const positionCreated = positionRepository.create({
            name_position_first
        })
        await positionRepository.save(positionCreated)
        return positionCreated
    }
}

export default CreatePositionService