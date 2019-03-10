import { Game } from 'src/app/models/game.model';

export class ClipsFilter {
  public games: Game[];
  public selectedGame: Game;
  public streamerId: string;
}

export const initialClipsFilter: ClipsFilter = {
  games: [],
  streamerId: null,
  selectedGame: null
};
