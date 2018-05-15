/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-15 11:54:19 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-15 14:55:27
 */

const supertest = require('supertest')
const chai = require('chai')

const app = require('../index.js')
const expect = chai.expect
const request = supertest(app.listen())

describe('测试demo的GET请求', () => {
  it('测试/getJSON.json请求', (done) => {
    request
      .get('/getJSON.json')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('Object')
        expect(res.body.success).to.be.an('Boolean')
        expect(res.body.msg).to.be.an('String')
        done()
      })
  })
})