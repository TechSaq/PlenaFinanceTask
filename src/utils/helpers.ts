type Price = number | string;

export const getDiscount = (price: Price, discountPercentage: Price) => {

  const _price = Number(price);
  const _discountPercentage = Number(discountPercentage);

  const _discount = _price * (_discountPercentage / 100);

  const discount = parseFloat(_discount.toString()).toFixed(2);

  return discount;

}