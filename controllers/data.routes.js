const express = require('express')

const {DataModel} = require('../model/data.model.js')

const DataRouter = express.Router();

DataRouter.get('/',async (req,res)=>{
    try {
       let {sort,filter} = req.query
    //    res.send({sort,filter})
    // console.log(sort)
        if(!sort && !filter){
            let data = await DataModel.find()
            res.status(200).send(data)
        }else if(!filter){
            let data = await DataModel.find().sort({budget_per_person : sort})
            res.status(200).send(data)
        }else if(!sort){
            let data = await DataModel.find({destination:filter})
            res.status(200).send(data)
        }else{
            // console.log(sort)
            let data = await DataModel.find({destination:filter}).sort({budget_per_person : sort})
            res.status(200).send(data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:error.message})
    }
})


DataRouter.post('/',async (req,res)=>{
    try {
        let {name, email, destination,  no_of_travellers, budget_per_person} = req.body;
        if(!name || !email || !destination || !no_of_travellers || !budget_per_person){
            res.status(400).send({msg:"Please Provide all the details"});
        }else{
            let data = new DataModel({name, email, destination,  no_of_travellers, budget_per_person});
            await data.save();
            res.status(201).send({msg:"Data Saved successfully",data})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:error.message})
    }
})

DataRouter.get('/:id',async (req,res)=>{
    try {
        let id = req.params.id
        if(!id ){
            res.status(400).send({msg:"Please Provide correct id"});
        }else{
            let data = await DataModel.findById(id)
            res.status(200).send(data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:error.message})
    }
})

DataRouter.delete('/:id',async (req,res)=>{
    try {
        let id = req.params.id
        if(!id ){
            res.status(400).send({msg:"Please Provide correct id"});
        }else{
            let data = await DataModel.findByIdAndDelete(id)
            res.status(202).send({msg:"Data Has been Deleted"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:error.message})
    }
})

module.exports = {DataRouter}