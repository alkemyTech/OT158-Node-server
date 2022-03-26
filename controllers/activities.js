const express = require('express');
const activitiesService = require('../services/activities');

/*const createActivities = (req, res) => {
    console.log(req.body);
    res.send('received');
}*/



const getAll = async (req, res, next) => {
    try {
        const result = await activitiesService.getAll(req);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        next(e);
    }
};

const create = async (req, res, next) => {
    try {
        let activities = req.body;
        activities = await activitiesService.save(activities);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        next(e);
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        let activities = req.body;

        const activitiesUpdated = await activitiesService.update(id, activities);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        next(e);
    }
};

const getById = async (req, res) => {
    try {
        const activities = await activitiesService.findById(req.params.id);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        next(e);
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const activities = await activitiesService.remove(id);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        next(e);
    }
};

module.exports = {
    getAll,
    create,
    update,
    getById,
    remove
}







