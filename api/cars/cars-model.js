const db = require('../../data/db-config')

const getAll = async () => {
  return db('cars')
}

const getById = async (id) => {
  return db('cars').where('id', id).first()
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = async (car) => {
  return db('cars').insert(car).then(([id]) => getById(id))
}

module.exports = {
  getAll,
  getById,
  create,
  getByVin
}