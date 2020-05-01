export default class ProductsSchema {
  static schema = {
    name: 'Products',
    primaryKey: 'id',
    properties: {
      id: {
        type: 'int',
        indexed: true,
      },
      name: 'string',
      description: 'string',
    },
  };
}
