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
                        url:"/products/"+ n._id
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
     
               
}


exports.delete_news_single=(req,res,next)=>{


}
exports.update_news_single=(req,res,next)=>{


}
