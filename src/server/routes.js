import express from 'express';
import ItemController from 'server/controllers/ItemController';

const ApiRouter = express.Router();

ApiRouter.route('/items')
  .get(ItemController.index)
  .post(ItemController.create);

ApiRouter.route('/items/:id')
  .get(ItemController.read)
  .put(ItemController.update)
  .delete(ItemController.delete);

const routes = {
  api: ApiRouter,
};

export default routes;
