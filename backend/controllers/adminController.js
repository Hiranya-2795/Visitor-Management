const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const blacklistUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ userId: parseInt(userId) });

    if (!user) return res.status(404).json({ error: 'User not found' });

    user.blacklisted = true;
    await user.save();
    res.json({ message: 'User blacklisted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  blacklistUser
};
