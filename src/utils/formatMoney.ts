// Formatter money
export default function formatMoney(amount: number): string {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "VND",
  };

  // Constructor to define number according to language
  const formatter = Intl.NumberFormat("vi-VN", options);
  return formatter.format(amount);
}
