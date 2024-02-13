const express = require("express")

const router = express.Router();

//Grab the controller files
const {index, create, destroy} = require("../controllers/bookmarks");


//http://localhose:9000/bookmarks


//get all bookmarks

router.get("/", index);

//
router.post("/", create);

//delete a bookmark
router.delete("/:id", destroy);


module.exports = router