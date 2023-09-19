const asyncahandling = (passfunction)=>(req,res,next)=>{
    return new Promise((resolve,reject) => {
            resolve(passfunction(req,res,next)).catch(next);
    })
};

module.exports = asyncahandling;