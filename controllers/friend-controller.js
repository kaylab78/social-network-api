const { User } = require('../models');

const friendController = {
    // add a new friend to a user's friend list
    addFriend({ params, body }, res) {
        console.log(body);
        User.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { friends: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id.' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    }
}

module.exports = friendController;