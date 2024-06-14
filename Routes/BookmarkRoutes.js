const express = require('express');
const router = express.Router();
const {
  addToBookmarks,
  getBookmarks,
  removeFromBookmarks,
} = require('../controllers/Bookmark');

router.post('/add', addToBookmarks);
router.delete("/remove", removeFromBookmarks);
router.get("/bookmarks/:email", getBookmarks);
module.exports = router;