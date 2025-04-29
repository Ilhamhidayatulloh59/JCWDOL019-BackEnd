export interface IExpense {
  id: number;
  title: string;
  nominal: number;
  type: "income" | "expense";
  category: "salary" | "food" | "tranport";
  date: string;
}
