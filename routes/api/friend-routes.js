const router = require('express').Router();

const {
    addFriend
} = require('../../controllers/friend-controller');

// api/users/:userId/friends/:friendId
router.route('/:userId/friends').post(addFriend);

module.exports = router;