const User = require('../models/User');
const VisitLog = require('../models/VisitLog');
const Feedback = require('../models/Feedback');

let userIdCounter = 1;

const registerVisitor = async (req, res) => {
  try {
    const { name, email, phone, photo } = req.body;

    const newUser = new User({
      userId: userIdCounter++,
      name,
      email,
      phone,
      photo
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const findVisitorByFace = async (req, res) => {
  try {
    const { faceId } = req.body;
    const user = await User.findOne({ photo: faceId });

    if (!user) return res.status(404).json({ found: false });

    res.json({ found: true, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const checkInVisitor = async (req, res) => {
  try {
    const { userId, purpose, personToVisit } = req.body;
    const newVisit = new VisitLog({ userId, purpose, personToVisit });
    await newVisit.save();
    res.status(201).json(newVisit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const checkOutVisitor = async (req, res) => {
  try {
    const { visitId } = req.body;
    const visit = await VisitLog.findById(visitId);
    visit.checkOut = new Date();
    visit.status = 'checked-out';
    await visit.save();
    res.json(visit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const submitFeedback = async (req, res) => {
  try {
    const { userId, visitId, feedbackText, rating } = req.body;
    const feedback = new Feedback({ userId, visitId, feedbackText, rating });
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  registerVisitor,
  findVisitorByFace,
  checkInVisitor,
  checkOutVisitor,
  submitFeedback
};
