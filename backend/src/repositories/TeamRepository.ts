import Team from '../models/Team'
import { EntityRepository, Repository } from 'typeorm'
@EntityRepository(Team)
class TeamRepository extends Repository<Team> {
    public async findByTeam(name: string): Promise<Team | null> {
        const findTeam = await this.findOne({
            where: { name }
        })

        return findTeam || null
    }
}
export default TeamRepository