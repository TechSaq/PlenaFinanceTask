export const productQueryKeys = {
  all: [{ scope: 'products' }],
  lists: () => [{ ...productQueryKeys.all[0], entity: 'list' }],
  list: (filters = {}) => [{ ...productQueryKeys.lists()[0], ...filters }],
  listInfinite: (filters = {}) => [
    { ...productQueryKeys.all[0], entity: 'listInfinite', ...filters },
  ],

  details: () => [{ ...productQueryKeys.all[0], entity: 'detail' }],
  detail: id => [{ ...productQueryKeys.details()[0], id }],
};
