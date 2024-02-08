const express=require("express")
const entrymodel=require("../models/EntryModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let entry=entrymodel(data)
    let result=await entry.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await entrymodel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await entrymodel.find(input)
    res.json(data)
})

module.exports=router