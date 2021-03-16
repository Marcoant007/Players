import { getCustomRepository } from 'typeorm'
import PlayerRepository from '../../repositories/PlayersRepository';

class ListedPlayerService {
    public async execute() {
        const playerRepository = getCustomRepository(PlayerRepository)
        const players = await playerRepository.find();

        // const playersids = players.map(player =>(player.id))
        // console.log(playersids) 

        // const player = players.find(player =>(player.id == 21))
        // console.log(player)
       
        // const nascionality = players.filter(nationality => (nationality.nationality == "Brasileiro"))
        // console.log(nascionality)

          players.forEach(player => {
              player.playerPositions.map(playerPosition =>(playerPosition.position.name_position_first))
          }
          )
       console.log(players)

        return players
    }
}

export default ListedPlayerService