export interface IColumn {
  id: number;
  title: string;
  description: string;
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
  text: string;
  created: string;
  prayerId: number;
  author: string;
  avatar: any;
}
