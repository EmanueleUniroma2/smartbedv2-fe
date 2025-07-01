export interface IRole {
  _id: string;
  name: string;
  dynamicFeatures: any[];
}

export interface IUser {
  _id: string;
  userName: string;
  role: IRole | null;
}
