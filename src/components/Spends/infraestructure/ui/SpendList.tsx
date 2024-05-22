"use client";

import { getAllSpends, deleteSpend } from "../../application/Spend.service";

export const SpendList = () => {
  const handleDelete = (id: number) => {
    deleteSpend(id);
  };

  return (
    <ul>
      {getAllSpends().map((spend) => (
        <li key={spend.id}>
          {spend.description} - ${spend.amount}
          <button onClick={() => handleDelete(spend.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};
