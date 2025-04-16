
/*
const {Router} = require('express')

const {createActivityHandler, getActivitiesHandler} = require('../handlers/activityHandler')

const router = Router()

router.post('/', createActivityHandler)
router.get('/', getActivitiesHandler)

module.exports = router
*/

const { Router } = require('express');

// Importa los handlers (controladores)
const { createActivityHandler, getActivitiesHandler } = require('../handlers/activityHandler');

const router = Router();

// Define las rutas y asocia los handlers
router.post('/', (req, res) => {
  console.log("conectado a controlador createActivityHandler");
  createActivityHandler(req, res);
});

router.get('/', (req, res) => {
  console.log("conectado a controlador getActivitiesHandler");
  getActivitiesHandler(req, res);
});

module.exports = router;