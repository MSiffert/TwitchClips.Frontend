import { Game } from 'src/app/models/game.model';
import { User } from 'src/app/models/users.model';

export class ClipsFilter {
  public games: Game[];
  public selectedGame: Game;
  public selectedUser: User;
}

export const initialClipsFilter: ClipsFilter = {
  games: [],
  selectedUser: null,
  selectedGame: null
};
