import mongoose from 'mongoose';
import ItemSchema from './schema/ItemSchema';

const ItemModel = mongoose.model('Item', ItemSchema);

export default ItemModel;
