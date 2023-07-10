const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts to get all thoughts
router.route('/').get(getThoughts);

router.route('/:userId/create').post(createThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions for adding reaction to thoughts
router.route('/:thoughtId/reaction').post(addReaction)

// /api/thoughts/:thoughtId/delete/:reactionID for deleting reaction to thoughts
router.route('/:thoughtId/delete/:reactionId').delete(deleteReaction);

module.exports = router;