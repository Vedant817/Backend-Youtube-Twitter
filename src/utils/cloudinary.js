import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        //? Uploading the File on Cloudinary
        const response = cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("File Uploaded Successfully", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //? Remove the locally saved temporary files from the server
        return null;
    }
}

export {uploadOnCloudinary}