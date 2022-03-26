var jwt = require('jsonwebtoken');
require('dotenv').config()


const verifyToken=(token)=>{
   return new Promise((res,rej)=>{
    jwt.verify(token, process.env.KEY, function(err, decoded) {
        if(err){
            return rej(err);
        }
        return res(decoded);    
      });
    })
}


const authanticate=async(req,res,next)=>{
    
    const token=req.headers.authorization
    //console.log(token)

    if(!token){
        res.status(400).send({message:"Authorization token is not available"})
    }

    if(!token.startsWith("Bearer ")){
        res.status(400).send({message:"Authorization token not in correct format"})
    }
  
    try{
        await verifyToken(token.trim().split(" ")[1])
    }
    catch(err){
        res.status(500).send({message:"Authorization token is not correct"})
    }

    next();
}

module.exports=authanticate;