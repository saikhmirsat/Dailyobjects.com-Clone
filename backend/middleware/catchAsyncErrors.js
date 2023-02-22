module.exports=theFuc=>(req,res,next)=>{
    Promise.resolve(theFuc(req,res,next)).catch(next)
}