function descendingOrder(n) {
  return Number(
    JSON.stringify(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

descendingOrder(123456789);
