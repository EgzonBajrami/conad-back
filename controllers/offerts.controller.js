const offertModel = require('../models/offerts.models');

module.exports = {
    createOffert: async(params) =>{
        console.log(params);
        const result = await offertModel.create({start:params.title,end:params.end});
        console.log(result);
        return result;


    },
    createImage:async(id,file,index)=>{
        let fileName=null;
        console.log(file);
        
        console.log(index);
      
        if(file){
            fileName=`/images/${file.filename}`
        }
        const result = await offertModel.findById(id)
        console.log(result);
        const currentImages = result.images;
       
        console.log(currentImages[index]);
        if(currentImages[index]==""){
            
            currentImages.push(fileName)

        }else{
                        currentImages.splice(index,1,fileName);
                        console.log(currentImages)
        }

     
        const updated = await offertModel.findByIdAndUpdate(id,{images:currentImages}).exec();

        return updated;
    },
    getOffert:async()=>{
        const result = await offertModel.find().sort('-createdAt').limit(1);
        return result;

    }

}