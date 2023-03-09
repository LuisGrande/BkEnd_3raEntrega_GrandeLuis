const fs = require('fs')

class Contenedor {
  constructor(path) {
    this.path = path
  }

  static id = 000;

  writeFile = async data => {
    try {
      await fs.promises.writeFile(
        this.path, JSON.stringify(data,null,2)
      )
    } catch (error) {
      console.log(`se produjo el siguiente error: ${error}`)
    }
  }

  getAll = async()=>{
    try {
      const productos = await fs.promises.readFile(this.path,'utf-8')
      return JSON.parse(productos)
    } catch (error) {
      if(error.message.includes('no such file or directory'))
      console.log(`error: ${error}`)
    }
  }

}

module.exports = Contenedor;
