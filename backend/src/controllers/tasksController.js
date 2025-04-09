const tasksModel = require('../models/taskModel');
const getAll = async (re, res) => {
   const tasks = tasksModel.getAll();

   return res.status(200).json(tasks);
}
 module.exports = {
    getAll
 };
 