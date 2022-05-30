const Project = require("../models/project");

module.exports = {
  getAll: async (req, res) => {
    try {
      const projects = await Project.findAll();
      res.json({
        data: projects,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const project = await Project.findOne({ where: { id } });
      res.json({
        data: project,
      });
    } catch (err) {
      console.error(err.message);
      res.status(400).json({
        error: {
          message: err.message,
        },
      });
    }
  },
  create: async (req, res) => {
    const { name, description, github, site } = req.body;
    try {
      const project = await Project.create({
        name,
        description,
        github,
        site,
      });
      res.status(201).json({
        data: project,
      });
    } catch (err) {
      console.error(err.message);
      res.status(400).json({
        error: {
          message: err.message,
        },
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const project = await Project.destroy({ where: { id } });
      res.json({
        data: "`Project ${projectId} and associated tickets/team data succesfully deleted",
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, description, github, site } = req.body;
    try {
      await Project.update(
        {
          name,
          description,
          github,
          site,
        },
        {
          where: {
            id,
          },
        }
      );
      res.json({
        data: `Project: ${name} updated successfully`,
      });
    } catch (err) {
      console.error(err.message);
      res.status(400).json({
        error: {
          message: err.message,
        },
      });
    }
  },
};
