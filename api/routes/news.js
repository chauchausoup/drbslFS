const express = require('express')
const router = express.Router();

const NewsController = require('../controllers/news');

router.get('/',  NewsController.get_news_all);
router.get('/:newsId',  NewsController.get_news_single);
router.delete('/:newsId',NewsController.delete_news_single)
router.patch('/:newsId',NewsController.update_news_single)

module.exports=router;


