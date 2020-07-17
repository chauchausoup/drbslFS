const mongoose = require('mongoose');


const News = require('../models/news');


exports.get_news_all=(req,res,next)=>{
    News.find()
        .select('-__v')
        .exec()
        .then(news=>{

            const response={

            count:news.length,
            items:news.map(n=>{
                return{
                    id:n._id,
                    title:n.title,
                    content:n.content,
                    date:n.date,
                    request:{
                        type:'GET',
                        url:"/news/"+ n._id
                    }
                }
            })
        }
        res.status(200).json(response)

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                  error: err
            })
      })
       
}


exports.get_news_single=(req,res,next)=>{
     const id=req.params.newsId;
     News.findById(id)
        .select('_id title content date')
        .exec()
        .then((news)=>{
            if(news){
                res.status(200).json({
                    item:news,
                })
            }else{
                res.status(400).json({
                    message:"not valid entry"
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                  error: err
            })
        });

               
}


exports.delete_news_single=(req,res,next)=>{


}
exports.update_news_single=(req,res,next)=>{


}
