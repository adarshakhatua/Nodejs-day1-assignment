const Product =require("../models/product.model");
const express =require("express");
const client =require("../redis");




const router =express.Router();

router.get("", async(req,res)=>{
    try{
        const page=req.query.page;
        const pageSize=req.query.pagesize;

        const skip=(page-1)*pageSize;
        
        client.get("product",async(err,fetchProduct)=>{
            if(fetchProduct){                                            
                const product=JSON.parse(fetchProduct);
                res.status(200).send({product:product,redis:true});
            }
            else{
                try{
                    const product = await Product.find().skip(skip).limit(pageSize).lean().exec();
                    res.status(200).send({product:product,redis:false});
                }
                catch(err){
                    res.status(500).send({message:err.message});
                }
            }
        })
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})


router.post("", async(req,res)=>{
    try{
        const product = await Product.create(req.body);
        client.set("product",JSON.stringify(product));
        res.status(200).send(product);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})


router.get("/:id", async(req,res)=>{
    try{
        client.get(`product.${req.params.id}`,async(err,fetchProduct)=>{
                if(fetchProduct){
                        const product =JSON.parse(fetchProduct);
                        res.status(200).send({product:product,redis:true});
                }
                else{
                    try{
                        const product= await Product.findById(req.params.id).lean().exec();
                        res.status(200).send({product:product,redis:false});
                    }
                    catch(err){
                        res.status(500).send({message:err.message})
                    }
                }
        })
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})


router.patch("/:id", async(req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        const products = await Product.find().lean().exec();
        client.set("product",JSON.stringify(products));
        client.set(`product.${req.params.id}`,JSON.stringify(product));
        res.status(200).send(product);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})


router.delete("/:id", async(req,res)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
        const products = await Product.find().lean().exec();
        client.set("product",JSON.stringify(products))
        client.set(`product.${req.params.id}`,JSON.stringify(product))
        res.status(200).send(product);
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
})


module.exports =router;