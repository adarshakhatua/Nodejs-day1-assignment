const multer=require("multer")
const path =require("path");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, cb) {
        console.log({file});
      const uniquePrefix = Date.now()
      cb(null,uniquePrefix + '-' + file.originalname)
    }
  })
  
const fileFilter = (req, file, cb)=>{

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
    if(file.mimetype==="image/jpeg" || file.mimetype==="image/png"){
        // To accept the file pass `true`, like so:
    cb(null, true)
    }
    else{
        // To reject this file pass `false`, like so:
    cb(null, false)
    }

  
  }


const option={
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024*1024*5,
    },
};



const upload =multer(option)

module.exports=upload;