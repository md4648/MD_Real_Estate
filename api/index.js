import  express  from "express";
// we use type module so it does't need to use "required" 
const app=express();

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})