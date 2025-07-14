export function calculateTotal(input: string): number {
  if (!input.trim()) return 0; // Если строка пустая, возвращаем 0

  // Разделяем строку по запятым или переносам строки и преобразуем в массив чисел
  const numbers = input
    .split(/[\n,]+/) // Разделяем по запятым или переносам строк
    .map(item => item.trim()) // Убираем пробелы вокруг чисел
    .filter(item => item !== '') // Удаляем пустые строки
    .map(Number); // Преобразуем строки в числа

  // Проверяем, есть ли в массиве NaN (если в строке были нечисловые значения)
  if (numbers.some(isNaN)) {
    return 0;
  }

  // Суммируем числа
  return numbers.reduce((sum, num) => sum + num, 0);
}