import { UPLOAD_FOLDER } from "../config/config.js";
import { moveFile } from "../utility/moveFile.js";



export const damo1 = async (req,res)=>{
    let name = req.params.name;
    let age = req.params.age;


    let country = req.query.country
    let lang = req.query.lang

    return res.json({message:lang});

}




export const damo2 = async (req,res)=>{
    let reqBody = req.body["name"]

    return res.json({message:reqBody});

}


export const damo3 = async (req,res)=>{
    let pic = req.files['myFile']
    let reqBody = req.body

    return res.json({message:pic});

}


export const damo4 = async (req,res)=>{
    let myFile = req.files['myFile']
    let myFilepath = UPLOAD_FOLDER(myFile.name)
    await moveFile(myFile, myFilepath);

    return res.json({message:"successfully moved file"});

}









