const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// Set up GET one, PUT and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// Set up POST and DELETE routes for reactions at /api/thoughts/:id/reactions
router
    .route('/:id/reactions')
    .post(addReaction)

router
    .route('/:id/reactions/:reactionId')
    .delete(removeReaction);
    
module.exports = router;