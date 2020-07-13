const express = require('express')
const router = express.Router();

const NewsController = require('../controllers/news');

router.get('/',  NewsController.get_news_all);
router.get('/:newsId',  NewsController.get_news_single);

module.exports=router;


