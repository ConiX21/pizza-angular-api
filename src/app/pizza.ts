import { Categories } from "./categories.enum";
import { Category } from "./category";

export class Pizza {
    public idPizza: number;
    public title: string;
    public description: string;
    public price: number;
    public imagePath: string;
    public available:boolean;
    public category?:Category
}
