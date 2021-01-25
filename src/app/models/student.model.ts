export interface MyStudent {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  email: string;
  group: number;
  edit: boolean;
}

export enum MyGroups {
  web,
  sapr,
  machino,
  design,
}
