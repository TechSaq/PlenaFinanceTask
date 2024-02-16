type Price = number | string;

export const getDiscount = (price: Price, discountPercentage: Price) => {

  const _price = Number(price);
  const _discountPercentage = Number(discountPercentage);

  const _discount = _price * (_discountPercentage / 100);

  const discount = parseFloat(_discount.toString()).toFixed(2);

  return discount;

}

export const getTotal = (numbers: string[] = []) => {

  const sum = numbers.reduce((result, num) => {

    const _num = Number(num);

    result = parseFloat(result.toString()) + parseFloat(_num.toString());

    return result;

  }, 0);

  return parseFloat(sum.toString()).toFixed(2);

}