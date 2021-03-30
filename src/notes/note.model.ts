export interface Note {
  id?: string;
  body: string;
  updatedAt: number;
  status: NoteStatus;
}

export enum NoteStatus {
  DELETED = 'DELETED',
  IDLE = 'IDLE',
}
