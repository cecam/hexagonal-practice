import { Spend } from "../domain/Spend";
import { SpendRepository } from "../domain/SpendRepository";

const STORAGE_KEY = "spends";

export const createSpendRepository = ():SpendRepository => {
    const getAllSpends = ():Spend[] => {
        const spends = localStorage.getItem(STORAGE_KEY);
        return spends ? JSON.parse(spends) : [];
    };

    const getSpend = (id:number):Spend => {
        const spends = getAllSpends();
        return spends.find(spend => spend.id === id) as Spend;
    };

    const addSpend = (spend:Spend):void => {
        let spends = getAllSpends();
        spends = [spend, ...spends];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(spends));
    };

    const deleteSpend = (id:number):void => {
        let spends = getAllSpends();
        spends = spends.filter(spend => spend.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(spends));
    };

    return {
        getSpend,
        getAllSpends,
        addSpend,
        deleteSpend
    };
}