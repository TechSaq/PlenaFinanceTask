export const cartItemQueryKeys = {
  all: [{ scope: 'cartItems' }],
  lists: () => [{ ...cartItemQueryKeys.all[0], entity: 'list' }],
  list: (filters = {}) => [{ ...cartItemQueryKeys.lists()[0], ...filters }],
  listInfinite: (filters = {}) => [
    { ...cartItemQueryKeys.all[0], entity: 'listInfinite', ...filters },
  ],
  count: () => [{
    ...cartItemQueryKeys.all[0],
    entity: 'count'
  }]

};
