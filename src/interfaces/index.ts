export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IColumn {
  id: number;
  title: string;
  description: string;
  userId: number;
}

export interface IPrayer {
  id: number;
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
}

export interface IComment {
  id: number;
  body: string;
  created: string;
  prayerId: number;
  userId: number;
}
