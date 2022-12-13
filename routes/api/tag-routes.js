const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
Tag.findAll({
include:[ 
  {
  model:Product,
  through:ProductTag,
} 
]
})
.then(tags => res.json(tags))
.catch(err => res.status (500).json(err))
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
      id:req.params.id
    }, 
    include:[
      {
        model:Product,
        through:ProductTag,
      }
    ]
  }) 
  .then(tags => res.json(tags))
  .catch(err => res.status (500).json(err))
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(tags => res.json(tags))
  .catch(err => res.status (500).json(err))
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Tag.update(req.body,{
    where:{
      id:req.params.id
    }
  })
   .then(tags => res.json(tags))
  .catch(err => res.status (500).json(err))
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{
      id:req.params.id
    }
  })  
  .then(tags => res.json(tags))
  .catch(err => res.status (500).json(err))
  // delete a category by its `id` value
});

module.exports = router;
