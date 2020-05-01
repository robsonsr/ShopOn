import realm from 'realm';

import ProductsSchema from '../schemas/ProductsSchema';

export default function getRealm() {
  return realm.open({
    schema: [ProductsSchema],
  });
}
