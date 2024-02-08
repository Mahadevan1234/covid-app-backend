const mongoose=require("mongoose")

const entryschema=new mongoose.Schema(
    {
        patientName:String,
        patientAddress:String,
        patientMobile:String,
        patientSymptom:String,
        patientStatus:String
    }
)

module.exports=mongoose.model("patient",entryschema)