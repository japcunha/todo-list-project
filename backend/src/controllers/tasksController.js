const tasksModel = require('../models/tasksModels');
const getAll = async (re, res) => {
   const tasks = await tasksModel.getAll();

   return res.status(200).json(taks);
};

 module.exports = {
    getAll
 };
 