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
    const id = req.params.newsId;
    News.remove({_id:id}).exec()
        .then(result=>{
            res.status(200).json({
                items:result,
                message:"item deleted",
                request:{
                    type:"GET",
                    url:"/news",
                    description:"lets go back to the news"
                }
            })

        })
        .catch(err => {
            console.log(err)

            res.status(500).json({
                  error: err
            })
      })


}
exports.update_news_single=(req,res,next)=>{


    const news = new News({
        _id:req.body._id,
        title:req.body.title,
        content:req.body.content,
        date:req.body.date
        
  }) 


    var query = {'_id': req.body._id};

    req.newData = news;

News.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
    if (err) return res.send(505, {error: err});
    return res.json({
        message:"updated"
    });
});

      /*  
        news.save()
                .then(result=>{
                      res.json({
                            message:"ok the news was posted",
                            newsData:{
                                  title:result.title,
                                  content:result.content,
                                  date:result.date,
                                  _id:result._id
                            }
                            
                      })
                })
                .catch(err=>{
                    res.json({
                          error:err
                    })
              })  */
  
                    
  
}
