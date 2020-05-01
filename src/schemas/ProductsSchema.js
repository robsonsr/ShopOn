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
      image_url: 'string',
      price: 'float',
      technical_information: 'string',
      starts: 'int',
      votes: 'int',
    },
  };

  get values() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      code: this.code,
      category: this.category,
      image_url: this.image_url,
      price: this.price,
      technical_information: this.technical_information,
      starts: this.starts,
      votes: this.votes,
    };
  }
}
