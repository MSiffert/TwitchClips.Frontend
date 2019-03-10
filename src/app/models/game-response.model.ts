import { Pagination } from "./pagination.model";
import { Game } from "./game.model";

export class GameResponse {
  data?: Game[] | undefined;
  pagination?: Pagination | undefined;
}
