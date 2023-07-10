const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
      if (!thought) {
        return res.status(404).json({ message: 'No thought with such ID found!' });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "UserId not found!" });
      } 
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
    // Updates existing thought by its thoughtID from URL.
    async updateThought(req, res) {
        try {
          const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
          );
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with this id can be found!' });
          }  
          res.json(thought);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
    // Delete a thought by thoughtId in URL
    async deleteThought(req, res) {
        try {
          const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
          if (!thought) {
            return res.status(404).json({ message: 'No thought with this id can be found!' });
          };
          res.json({ message: 'Thought has been deleted!' });
        } catch (err) {
          res.status(500).json(err);
        }
      },
      // Add a reaction stored in a single thought's reactions array field
      async addReaction(req,res){
        try{
          const reaction = await Thought.findByIdAndUpdate({_id:req.params.userId},
            { $push: {reactions:req.body} },
            { new:true }
        )
            res.json(reaction)
        }catch(err){
          console.error(err)
        }
      },
      // Delete to pull and remove a reaction by reactionId value
      async deleteReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { _id: req.params.reactionId } } },
                { new: true }
            );
      
            if (!reaction) {
                return res.status(404).json({ message: "Thought and/or Reaction ID cannot be found!" });
            }     
            res.status(200).json({ message: 'Reaction has been successfully deleted' });
        } catch (err) {
            console.error(err);
        }
      },
};
