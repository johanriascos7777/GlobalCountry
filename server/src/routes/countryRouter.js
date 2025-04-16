/*
const {Router} = require('express')

const {getCountriesHandler, getCountryDetailHandler} = require('../handlers/countryHandler')

const router = Router()


router.get('/', getCountriesHandler)
router.get('/:id', getCountryDetailHandler)

module.exports = router
*/

const { Router } = require('express');

// Importa los handlers (controladores)
const { getCountriesHandler, getCountryDetailHandler } = require('../handlers/countryHandler');

const router = Router();

// Define las rutas y asocia los handlers
router.get('/', (req, res) => {
  console.log("conectado a controlador getCountriesHandler");
  getCountriesHandler(req, res);
});

router.get('/:id', (req, res) => {
  console.log("conectado a controlador getCountryDetailHandler");
  getCountryDetailHandler(req, res);
});

module.exports = router;