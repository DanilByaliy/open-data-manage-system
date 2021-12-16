const { AvailableAction } = require('../models/model');

exports.getAllAvailableAction = async (req, res) => {
  try {
    const aAction = await AvailableAction.findAll();
    return res.json(aAction);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createAvailableAction = async (req, res) => {
  try {
    const aAction = await AvailableAction.create(req.body);

    return res.json(aAction);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getAvailableAction = async (req, res) => {
  try {
    const id = req.params.id;
    const aAction = await AvailableAction.findOne({
      where: {
        id,
      },
    });
    return res.json(aAction);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateAvailableAction = async (req, res) => {
  try {
    const id = req.params.id;
    const aAction = await AvailableAction.findOne({
      where: {
        id,
      },
    });
    aAction.update(req.body);
    aAction.save();
    return res.json(aAction);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteAvailableAction = async (req, res) => {
  try {
    const id = req.params.id;
    const aAction = await AvailableAction.destroy({
      where: {
        id,
      },
    });
    return res.json(aAction);
  } catch (e) {
    return res.json({ message: e.message });
  }
};