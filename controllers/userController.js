const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'No user with such ID found!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
    // Updates user info based on UserId in URL field.
    async updateUser(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
    
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }  
          res.json(user);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
    // Delete a user and associated thoughts
    async deleteUser(req, res) {
        try {
          const user = await User.findOneAndDelete({ _id: req.params.userId });
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
    
          await Thought.deleteMany({ _id: { $in: user.thoughts } });
          res.json({ message: 'User and associated thoughts deleted!' })
        } catch (err) {
          res.status(500).json(err);
        }
      },
      // Add a friend to a user's friend list
      async addFriend(req,res){
        try{
          const friend = await User.findByIdAndUpdate({_id:req.params.userId},
            {$push:{friends:req.params.friendId}},
            {new:true}
        )
            res.json(friend)
        }catch(err){
          console.error(err)
        }
      },
      // Delete a friend from a user's friend list
      async deleteFriend(req, res) {
        try {
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
      
            if (!friend) {
                return res.status(404).json({ message: "Cannot find this friend" });
            }     
            res.status(200).json({ message: 'Friend has been successfully deleted' });
        } catch (err) {
            console.error(err);
        }
      },
};

