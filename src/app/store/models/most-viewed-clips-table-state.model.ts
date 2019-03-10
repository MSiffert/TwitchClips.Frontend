import { Clip } from './../../models/clip.model';

export class MostViewedClipsTableState {
  public clips: Clip[];
  public gameId: string;
  public cursor: string;
  public take: number;
  public isLoading: boolean;
}

export const initialMostViewedClipsTableState: MostViewedClipsTableState = {
  clips: [],
  gameId: '32399',
  cursor: '',
  take: 20,
  isLoading: false,
}

