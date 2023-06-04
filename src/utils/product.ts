export const minifyText = (text: string, limit: number) =>
  text.length > limit ? text.slice(0, limit) + "..." : text;

export const calculateTotal = (amount: number, price: number) => amount * price;
