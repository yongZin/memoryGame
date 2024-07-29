export interface MemoryGameProps {
  resetCount: number;
}

export interface TimerProps {
  run: boolean;
  recordValue: (record: string) => void;
}

export interface RecordProps {
  userRecord: string;
}

export interface PropsState {
  run: boolean;
  finish: boolean;
  menu: boolean;
  userRecord: string;
  resetCount: number;
  rank: Array<{ userName: string; userRecord: string }>;
}

export const initialState: PropsState = { // PropsState 기본값
  run: false,
  finish: false,
  menu: false,
  userRecord: "00:00",
  resetCount: 0,
  rank: [],
};