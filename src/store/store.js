const model = require('../models/mode');

const read = async (id)=>{

    const data = await model.find().lean().sort({date: "desc"});
    return data;

}

const create = async  (data)=>{

     const newData = new model(data);
     await newData.save;

}

const update = async  (id, data)=>{

    await new model.findByIdAndUpdate(id, data);
}


const delet = async  (id)=>{

    await new model.findByIdAndDelete(id);
}

module.exports = {

    read, 
    create, 
    update, 
    delet


}