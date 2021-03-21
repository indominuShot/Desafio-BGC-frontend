export default function numberToPtBrFormat(number: number) {
  if (number) {
    return number.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  } else {
    return number;
  }
}
