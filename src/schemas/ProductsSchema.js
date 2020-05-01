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
      code: 'string',
      category: 'string',
      image: 'string',
      price: 'float',
      technical_information: 'string',
      starts: 'int',
      votes: 'int',
    },
  };
}
