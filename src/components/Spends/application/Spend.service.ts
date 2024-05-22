import { Spend } from "../domain/Spend";
import { createSpendRepository } from "../infraestructure/Spends.repositories";

export const getSpend = (id:number) => {
    return createSpendRepository().getSpend(id);
};

export const getAllSpends = () => {
    return createSpendRepository().getAllSpends();
};

export const addSpend = (spend:Spend) => {
    createSpendRepository().addSpend(spend);
};

export const deleteSpend = (id:number) => {
    createSpendRepository().deleteSpend(id);
};
