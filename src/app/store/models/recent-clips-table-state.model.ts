import { Clip } from './../../models/clip.model';

export class RecentClipsTableState {
  public clips: Clip[];
  public gameId: string;
  public take: number;
  public fetchFrom: Date;
  public isLoading: boolean;
}

export const initialRecentClipsTableState: RecentClipsTableState = {
  clips: [],
  gameId: '32399',
  fetchFrom: new Date(),
  take: 20,
  isLoading: false,
}

