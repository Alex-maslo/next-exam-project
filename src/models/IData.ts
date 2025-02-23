import { IUser } from "@/models/IUser";
import { IRecipe } from "@/models/IRecipe";

export interface IData {
  users?: IUser[];
  recipes?: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}
