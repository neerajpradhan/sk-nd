const authorize = (req, res, next)=>{
    console.log('authorize');
    const {user} = req.query;
    if(user === 'John'){
        req.user = {name:'John', id:1}
        next();
    } else {
        res.status(401).send('Unauthorize');
    }
}

module.exports=authorize;