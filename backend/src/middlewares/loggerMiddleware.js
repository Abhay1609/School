const logger=require('../configs/logger');
const loggerMiddleware=(req,res,next)=>{
    const start=Date.now();
    res.on('finish',()=>{
        const duration=Date.now()-start;
        const logMessage=`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;

        if(res.statusCode>=400){
            logger.warn(logMessage);
        }
        else{
            logger.info(logMessage);
        }
    });
    next();
}
module.exports=loggerMiddleware