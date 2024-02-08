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

module.exports=router