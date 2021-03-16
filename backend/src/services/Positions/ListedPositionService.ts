import { getCustomRepository } from 'typeorm'
import PositionRepository from '../../repositories/PositionRepository'

class ListedPositionService {
    public async execute() {
        const positionRepository = getCustomRepository(PositionRepository)
        const positions = await positionRepository.find()
        return positions
    }
}

export default ListedPositionService