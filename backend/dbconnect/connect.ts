import mongoose, { ConnectOptions, Promise } from 'mongoose';
import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017";


// 定義 MongoDB 連接設定
const options: ConnectOptions = {
    dbName:"test",
    autoIndex:true,
    autoCreate:true
};

const connectDB = async (url: string) => {
    try {
        
        await mongoose.connect(url,options);
        console.log('已連接到 MongoDB！');
      } catch (error) {
        console.error('連接到 MongoDB 失敗：', error);
      }
};


export default connectDB