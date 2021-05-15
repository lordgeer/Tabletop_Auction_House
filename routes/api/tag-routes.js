// const router = require('express').Router();
// const { Tag, Product, ProductTag } = require('../../models');

// // The `/api/tags` endpoint
//  // find all tags
//   // be sure to include its associated Product data
// router.get('/', (req, res) => {
//   Tag.findAll({
//     include: [
//       {
//         model: Product,
//         attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
//       }
//     ]
//   })
//     .then(dbStoreData => res.json(dbStoreData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
 
// });
//  // find a single tag by its `id`
//   // be sure to include its associated Product data
// router.get('/:id', (req, res) => {
//   Tag.findOne({
//     where: {
//       id: req.params.id
//     },
//     include: [
//       {
//         model: Product,
//         attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
//       }
//     ]
//   })
//     .then(dbStoreData => {
//       if (!dbStoreData) {
//         res.status(404).json({ message: 'No such entry found'});
//         return;
//       }
//       res.json(dbStoreData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
//  // create a new tag
// router.post('/', (req, res) => {
//   Tag.create({
//     store_name: req.body.store_name
//   })
//     .then(dbStoreData => res.json(dbStoreData))
//     .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//   });
// });
// // update a tag's name by its `id` value
// router.put('/:id', (req, res) => {
//   Tag.update(req.body, {
//     where: {
//         id: req.params.id
//     }
//   })
//     .then(dbStoreData => {
//         if (!dbStoreData[0]) {
//             res.status(404).json({ message: 'No such entry found'});
//             return;
//         }
//         res.json(dbStoreData);
//   })
//     .catch(err => {
//         console.log(err); 
//         res.status(500).json(err);
//   });
// });

// // delete on tag by its `id` value
// router.delete('/:id', (req, res) => {
//   Tag.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbStoreData => {
//       if (!dbStoreData) {
//         res.status(404).json({ message: "No such entry found"});
//         return;
//       }
//       res.json(dbStoreData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json.err;
//     })
  
// });

// module.exports = router;






