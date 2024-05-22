import { Spend } from "./Spend";

export interface SpendRepository {
    getSpend(id:number):Spend;
    getAllSpends():Spend[];
    addSpend(spend:Spend):void;
    deleteSpend(id:number):void;
}