var jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate=(req,res,next)=>
{
    const token =req.headers.authorization
    console.log(token)
    if(token)
    {
        const verified_token=jwt.verify(token,process.env.key)
            //console.log(verified_token)
        if(verified_token)
        {
            const userID=verified_token.userID
            //console.log(userID)
            req.body.userID=userID
            next()
        }
        else{
            res.json("please login first")
        }
    }
    else{
        res.json("please login")
    }
}


module.exports={
    authenticate
}