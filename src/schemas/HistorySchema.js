export default class ProductsSchema {
  static schema = {
    name: 'Historical',
    primaryKey: 'id',
    properties: {
      id: {
        type: 'int',
        indexed: true,
      },
      category: 'string',
      url: 'string',
      title: 'string',
      date: 'date',
    },
  };
}
