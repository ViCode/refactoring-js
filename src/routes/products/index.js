import express from 'express';
import { isAuth } from '../../common/lib/middleware';
import {productDbo} from '../../common/dbo/product.dbo';

const router =  express.Router();

router.get('/list', isAuth, (req, res) => {
    productDbo.getList()
    .then(
      (rows) => res.render('list', {products: rows}),
      (err) => console.error(err)
    );
});

router.get('/view/:id', isAuth, (req, res) => {
    let id = req.params.id;
    productDbo.getItem(id).then(
      (row) => res.render('view', {product: row}),
      (err) => console.error(err)
    );
});

router.get('/cart/:id', isAuth, function(req, res) {
  let id = req.params.id;
  productDbo.getItem(id).then(
    (row) => res.json({success:true, text: "Product " + row.id + " successfully bought"}),
    (err) => console.error(err)
  );
});

export default router;
