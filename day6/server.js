const express =require("express");
const mongoose =require("mongoose");
//app initialization
const app =express();
app.use(express.json())
//connect to mongodb server
const connect =()=>{
    return mongoose.connect("mongodb+srv://adarshakhatua:2HPHZpSHYkfHit0a@cluster0.9f3au.mongodb.net/library")
}
//*************************************creating Section schema*******************************************
//step:1--creating schema
const sectionSchema =new mongoose.Schema(
    {
        genre:{type:String, required:true}
    },
    {
        timestamps:true,
    }
);
//creating model
const Section =mongoose.model("section",sectionSchema);

//*************************************creating User schema*******************************************
//step:1--creating schema

const userSchema =new mongoose.Schema({
    name: { type:String ,required:true},
    type:{ type:String ,enum:["Reader","Admin"] , required:true}
})
//creating model
const User =mongoose.model("user",userSchema);


//***************************************creating Books schema************************************************
//step:1--creating schema
const booksSchema=new mongoose.Schema(
    {
        name:{type: String, required: true},
        body:{type: String, required: true},
        sectionId:{type:mongoose.Schema.Types.ObjectId,ref:"section",required:true},
        authorId:[{type: mongoose.Schema.Types.ObjectId, ref: "author", required: true}]
    },
    {
        timestamps:true,
    }
);

//creating model
const Books =mongoose.model("book",booksSchema);


//******************************creating checkout schema*********************************************************
//step:1----creating schema

const checkoutSchema =new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"user" ,required:true},
    bookId:[{type:mongoose.Schema.Types.ObjectId, ref:"book" , required:true},],
    checkedOutTime:{ type:Date, default:Date.now},
    checkedInTime :{type:Date, required:true}
})

//creating model
const Checkout =mongoose.model("checkout",checkoutSchema);

//******************************creating author schema*********************************************************
//step:1----creating schema

const authorsSchema =new mongoose.Schema(
    {
        name:{type: String, required: true},
        sectionId:{type:mongoose.Schema.Types.ObjectId,ref:"section",required:true}
    },
    {
        timestamps:true,
    }
);

//step:2----creating model--------
const Authors=mongoose.model("author",authorsSchema);

app.get("/sections",async(req,res)=>{
    try{
        const section=await Section.find().lean().exec()
        
        return res.send(section)
    }
    catch(err){
        console.log(err)
    }
})


app.get("/sections/:id",async(req,res)=>{
    try{
        const section=await Section.findById(req.params.id);
        
        return res.send(section)
    }
    catch(err){
        console.log(err)
    }
})
//---------------------------------find books in a section--------------------------------------\\
app.get("/sections/:sectionId/books",async(req,res)=>{
    try{
        const books=await Books.find({sectionId:req.params.sectionId});
        
        return res.send(books)
    }
    catch(err){
        console.log(err)
    }
})

//--------------------------------find books of 1 author inside a section Optional------------------------\\
app.get("/sections/:sectionId/:authorId/books",async(req,res)=>{
    try{
        const authors=await Authors.find({sectionId:req.params.sectionId});
        const books=await Books.find({authorId:req.params.authorId});
        return res.send(books) 
    }
    catch(err){
        console.log(err)
    }
})


app.get("/books",async(req,res)=>{
    try{
        const books=await Books.find().populate({path:"sectionId",select:["genre"]}).populate({path:"authorId",select:["name"]}).lean().exec()

        return res.send(books)
    }
    catch(err){
        console.log(err)
    }
})


app.get("/books/:id",async(req,res)=>{
    try{
        const books=await Books.findById(req.params.id)

        return res.send(books)
    }
    catch(err){
        console.log(err)
    }
})

app.get("/authors",async(req,res)=>{
    try{
        const authors=await Authors.find().lean().exec()
    
        return res.send(authors)
    }
    catch(err){
        console.log(err)
    }
})


app.get("/authors/:id",async(req,res)=>{
    try{
        const authors=await Authors.findById(req.params.id);
    
        return res.send(authors)
    }
    catch(err){
        console.log(err)
    }
})
//-----------------------------find all books written by an author-------------------------------------\\
app.get("/authors/:authorId/books",async(req,res)=>{
    try{
        const books=await Books.find({authorId:req.params.authorId});
    
        return res.send(books)
    }
    catch(err){
        console.log(err)
    }
})

app.post("/sections",async(req,res)=>{
    try{
        const section= await Section.create(req.body)
        return res.status(201).send(section)
    }
    catch(err){
        console.log(err);
        console.log(err)
        return res.status(500).send({message:err.message})
    }
})

app.post("/books",async(req,res)=>{
    try{
        const books= await Books.create(req.body)
        return res.status(201).send(books)
    }
    catch(err){
        console.log(err);
        return res.status(500).send({message:err.message})
    }
})

app.post("/authors",async(req,res)=>{
    try{
        const authors= await Authors.create(req.body)
        return res.status(201).send(authors)
    }
    catch(err){
        console.log(err);
        return res.status(500).send({message:err.message})
    }
})
app.put("/authors",async(req,res)=>{
    try{
        const authors= await Authors.create(req.body)
        return res.status(201).send(authors)
    }
    catch(err){
        console.log(err);
        return res.status(500).send({message:err.message})
    }
})


app.patch("/sections/:id",async(req,res)=>{
    try{
        const section=await Section.findByIdAndUpdate(req.params.id, req.body,{new:true})
        return res.status(200).send(section).lean().exec()
    }
    catch(err){
        console.log(err);
        return res.status(500).send({message:err.message})
    }
})

app.patch("books/:id",async(req,res)=>{
    try{
        const book=await Books.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(book).lean().exec();
    }
    catch(err){
        console.log(err);
        return res.status(500).send({message:err.message});
    }
})

app.patch("/authors",async(req,res)=>{
    try{
        const author=await Authors.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send(author).lean().exec()
    }
    catch(err){
        console.log(err)
        return res.status(500).send({message:err.message})
    }
})
//---------------------------adding user to collections-------------------------------------

app.post("/users",async(req,res)=>{
    try{
        const user =await User.create(req.body)
         res.status(201).send(user)
    }
    catch(err){
        res.status(500).send({messgae:err.message})
    }
})
app.get("/users",async(req,res)=>{
    try{
        const user=await User.find().lean().exec();
        // const checkout_books= await Checkout.find().lean().exec();
        // console.log(checkout_books);
        return res.send(user)
    }
    catch(err){
        console.log(err)
    }
})
//---------------------------book checkout-------------------------------------

app.get("/checkout",async(req,res)=>{
    try{
        const checkout =await Checkout.find().lean().exec();
         res.status(200).send(checkout)
    }
    catch(err){
        res.status(500).send({messgae:err.message})
    }
})


app.post("/checkout",async(req,res)=>{
    try{
        const checkout =await Checkout.create(req.body);
        const bookId =req.body.bookId;
        console.log("bookId:"+bookId)
        const checkout_books= await Checkout.find().lean().exec();
        for(let i=0;i<checkout_books.length;i++){
            console.log("checkout:"+checkout_books[i].bookId.toString())
            // if(bookId==checkout_books[i].bookId.toString()){
            //     console.log("checkout:"+checkout_books[i].bookId.toString())
            //     throw Error("book is not available");
            // }
        }
         res.status(201).send(checkout)
    }
    catch(err){
        res.status(500).send({messgae:err.message})
    }
})

app.listen(4000,async()=>{
    await connect()
    console.log("listening at port:4000")
})


// async function availibityChecker(req,res,next){
//     const bookId =req.body.bookId;
//         console.log(bookId)
//         const checkout_books= await Checkout.find().lean().exec();
//         for(let i=0;i<checkout_books.length;i++){
//             console.log(checkout_books[i].bookId.toString())
//             if(bookId==checkout_books[i].bookId.toString()){
//                 throw Error("book is not available")
                
//             }
//         }
//     return true;
//     next();
// }
