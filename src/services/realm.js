import realm from 'realm';

import ProductsSchema from '../schemas/ProductsSchema';
import HistorySchema from '../schemas/HistorySchema';

export default function getRealm() {
  return realm.open({
    schema: [ProductsSchema, HistorySchema],
  });
}
