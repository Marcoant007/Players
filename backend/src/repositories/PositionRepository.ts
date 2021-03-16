import Position from '../models/Position'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Position)
class PositionRepository extends Repository<Position>{
    public async findByPosition(name_position_fist: string): Promise<Position | null> {
        const findPosition = await this.findOne({
            where: { name_position_fist }
        })
        return findPosition || null
    }
}

export default PositionRepository;
