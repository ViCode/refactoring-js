import {expect, use, request} from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/app';

use(chaiHttp);

describe('Products routes', () => {

  describe('List', () => {
    it('Should load correctly', (done) => {
      request(server)
      .get('/products/list')
      .end((err, res, body) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
  });

  describe('View', () => {
    it('Should load correctly', (done) => {
      request(server)
      .get('/products/view/1')
      .end((err, res, body) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
  });

  describe('Cart', () => {
    it('Should load correctly', (done) => {
      request(server)
      .get('/products/cart/1')
      .end((err, res, body) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
    });
  });
});
