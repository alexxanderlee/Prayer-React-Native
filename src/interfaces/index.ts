export interface IColumn {
  id: string;
  title: string;
}

export interface IPrayer {
  id: string;
  columnId: string;
  title: string;
  descr: string;
  checked: boolean;
}
