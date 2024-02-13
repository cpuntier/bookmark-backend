const Bookmark = require("../models/Bookmark")


async function index(req, res) {
    try {
        const bookmarks = await Bookmark.find({})
        if (bookmarks) {
            res.status(200).send(bookmarks)
        }

    } catch (error) {
        res.status(400).send(errpr)
    }

}


async function create(req, res) {
    try {
        //req.body will have the info that the user filled on the front end
        const createdBookmark = await Bookmark.create(req.body)
        if (createdBookmark) {
            res.status(201).send(createdBookmark)
        }
    } catch (error) {
        res.status(400).send(error)
    }

}


async function destroy(req, res) {
    try {
        const deletedBookmark = await Bookmark.findByIdAndDelete(req.params.id)
        if (deletedBookmark) {
            res.status(201).send(deletedBookmark);
        }
    } catch (error) {
        res.status(400).send(error)
    }

}



module.exports = {
    index,
    create,
    destroy
} 