const productModel = require('../models/products.models');

module.exports = {
    add: async(params) =>{
        console.log(params);
        const {title,barcode,section,description} = params;
        const result = await productModel.create({title,barcode,section,description});
        console.log(result);
        return result;

    },
    createImage: async (id, file) => {
        let fileName = null
        console.log(file);
        if(file){
          fileName =  `/images/${file.filename}` 
        }    
        const postId= await productModel.findById(id.id);
        let postImages = postId.images;
        console.log(postImages.images);
        postImages = [fileName];

  
        const result = await productModel.findByIdAndUpdate(id.id,{images:postImages}).exec();
        console.log(result);
       
        return result 
      },
      getProducts: async(id)=>{
        console.log(id);
        const result = await productModel.find({section:id})
        console.log(result);
        return result;
      },
      editProduct:async(params,id) =>{
        console.log(params);
        console.log(id);
        const {title,barcode,section,description} = params;
        const result = await productModel.findByIdAndUpdate(id,{title:title,barcode:barcode,section:section,description:description});
        return result;
      },
      findBarcode:async(params) =>{
        console.log(params);
        const {barcode} = params;
        const result = await productModel.find({barcode:barcode})
        return result;
      },
      removeProduct:async(params)=>{
        const {barcode} = params;
        const productToFind = await productModel.find({barcode:barcode});
        console.log(productToFind);
        const result = await productModel.findByIdAndDelete(productToFind[0]._id);
        console.log(result);
        return result;
      }
}