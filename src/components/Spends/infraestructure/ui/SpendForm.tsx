"use client";
import { useState } from "react";
import { addSpend } from "../../application/Spend.service";

export const SpendForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSpend = {
      id: Date.now(),
      ...formData,
      date: new Date(),
    };
    addSpend(newSpend);
  };

  return (
    <div>
      <h1>Spend Form</h1>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          className="text-[#333] px-3 py-2 rounded-md border border-[#333]"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          className="text-[#333] px-3 py-2 rounded-md border border-[#333]"
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          className="text-[#333] px-3 py-2 rounded-md border border-[#333]"
          onChange={handleChange}
        />
        <button className="border-2 border-white rounded-md" type="submit">
          Add Spend
        </button>
      </form>
    </div>
  );
};
