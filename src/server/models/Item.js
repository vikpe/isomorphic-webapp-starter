import mongoose from 'mongoose';
import ItemSchema from 'server/models/schema/ItemSchema';

const ItemModel = mongoose.model('Item', ItemSchema);

export default ItemModel;
