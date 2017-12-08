import Item from 'server/models/Item';

const ItemController = {
  index: (request, response) => {
    const conditions = {};

    Item.find(conditions, (error, items) => {
      if (error) {
        response.send(error);
      } else {
        response.json(items);
      }
    });
  },

  create: (request, response) => {
    Item.create(request.body, (error, itemDoc) => {
      if (error) {
        response.send(error);
      } else {
        response.json(itemDoc);
      }
    });
  },

  read: (request, response) => {
    const conditions = { _id: request.params.id };

    Item.findOne(conditions, (error, itemDoc) => {
      if (error) {
        response.send(error);
      } else {
        response.json(itemDoc);
      }
    });
  },

  update: (request, response) => {
    const conditions = { _id: request.params.id };

    Item.findOneAndUpdate(conditions, request.body, error => {
      if (error) {
        response.send(error);
      } else {
        response.json('OK');
      }
    });
  },

  delete: (request, response) => {
    const conditions = { _id: request.params.id };

    Item.findOneAndRemove(conditions, error => {
      if (error) {
        response.send(error);
      } else {
        response.json('OK');
      }
    });
  },
};

export default ItemController;
