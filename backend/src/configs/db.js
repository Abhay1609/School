const mongoose = require('mongoose');
class Database{
    constructor(){
        if(!Database.instance){
            Database.instance=this;
            this._connect();
        }
        return Database.instance;
    }
    _connect(){
        mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{
            console.log('Database connection successful');
        })
        .catch(err=>{
            console.log('Database connection error:',err);
        });
    }
    disconnect(){
        mongoose.disconnect();
    }
}
const instance=new Database();
Object.freeze(instance);
module.exports=instance;