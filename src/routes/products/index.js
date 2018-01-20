import express from 'express';
import { isAuth } from '../../common/lib/middleware';
import {productDbo} from '../../common/dbo/product.dbo';

const router =  express.Router();

router.get('/list', isAuth, (req, res) => {
    productDbo.getList()
    .then(
      (rows) => res.render('list', {
        products: rows,
        buttonViewMore: req.t('buttonViewMore'),
        title: req.t('productListTitle'),
        desc: req.t('productListDesc')
      }),
      (err) => console.error(err)
    );
});

router.get('/view/:id', isAuth, (req, res) => {
    let id = req.params.id;
    productDbo.getItem(id).then(
      (row) => res.render('view', {
        product: row,
        buttonBuy: req.t('buttonBuy'),
        title: req.t('productViewTitle', {name: row.name}),
        desc: req.t('productViewDesc', {name: row.name})
      }),
      (err) => console.error(err)
    );
});

router.get('/cart/:id', isAuth, function(req, res) {
  let id = req.params.id;
  productDbo.getItem(id).then(
    (row) => res.json({success:true, text: req.t('bought', {name:row.name})}),
    (err) => console.error(err)
  );
});

export default router;
