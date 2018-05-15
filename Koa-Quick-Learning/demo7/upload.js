/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-14 20:09:30 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-15 10:25:35
 */

const path = require('path')
const fs = require('fs')
const Busboy = require('busboy')

function makeDir (filePath) {
  if (fs.existsSync(filePath)) {
    return true
  } else {
    if (makeDir(path.dirname(filePath))) {
      fs.mkdirSync(filePath)
      return true
    }
  }
}

module.exports.uploadFile = function (ctx, option) {
  let req = ctx.req
  
  let busboy = new Busboy({
    headers: req.headers
  })

  let result = {
    success: false,
    message: '',
    formData: {}
  }

  makeDir(option.path)

  return new Promise((resolve, reject) => {
    console.log('文件上传中···')
    busboy.on('file', (fieldname, file, filename, encoding, mimeType) => {
      file.pipe(fs.createWriteStream(path.join(option.path, filename)))
      busboy.on('end', () => {
        result.success = true
        result.message = '文件上传完成！'
        console.log('文件上传完成！')
        resolve(result)
      })
    })
    
    // 监听请求中的字段
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
      console.log(`Field [${fieldname}]: value: ${val}`)
    })
    
    // 监听结束事件
    busboy.on('finish', function() {
      result.success = true
      result.message = '文件上传完成！'
      console.log('文件上传完成！')
      resolve(result)
    })

    busboy.on('error', err => {
      result.message = err.message
      reject(result)
    })
    req.pipe(busboy)
  })
}