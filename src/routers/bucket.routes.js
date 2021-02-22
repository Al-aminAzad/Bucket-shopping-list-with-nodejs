const router = require('express').Router();
router.get('/', (req, res) => {
  res.render('../views/pages/buckets.ejs');
});
router.get('/:id',(req,res)=>{
  res.render('../views/pages/bucket-details.ejs')
})

module.exports = router;
