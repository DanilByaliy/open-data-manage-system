const { Role } = require("../models/model");

exports.getAllRoles = async (req, res) => {
  try {
    const role = await Role.findAll();
    return res.json(role);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.getRole = async (req, res) => {
  try {
    const id = req.params.id;
    const role = await Role.findOne({
      where: {
        id,
      },
    });
    return res.json(role);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const id = req.params.id;
    const role = await Role.findOne({
      where: {
        id,
      },
    });
    role.update(req.body);
    role.save();
    return res.json(role);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const id = req.params.id;
    const role = await Role.destroy({
      where: {
        id,
      },
    });
    return res.json(role);
  } catch (e) {
    return res.json({ message: e.message });
  }
};

exports.createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);

    return res.json(role);
  } catch (e) {
    return res.json({ message: e.message });
  }
};