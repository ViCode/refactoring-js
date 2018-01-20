import {expect} from 'chai';
import {productDbo} from '../src/common/dbo';

describe('Products DBO', () => {

  describe('getList', () => {
    it('Should return respective list', () => {
      return productDbo.getList().then(
        (rows) => {
          expect(rows).to.be.a('array').that.is.not.empty;
        });
    });
  });

  describe('getItem', () => {
    it('Should return respective item', () => {
      return productDbo.getItem(1).then((row) => {
        expect(row).to.be.a('object');
        expect(row).to.have.property('id');
        expect(row).to.have.property('name');
        expect(row).to.have.property('description');
        expect(row).to.have.property('image');
        expect(row).to.have.property('stock');
      });
    });
  });

});
