import { Clip } from './../../models/clip.model';

export class MostViewedClipsTable {
  public clips: Clip[];
  public cursor: string;
  public take: number;
  public isLoading: boolean;
}

export const initialMostViewedClipsTable: MostViewedClipsTable = {
  clips: [],
  cursor: '',
  take: 20,
  isLoading: false,
};
