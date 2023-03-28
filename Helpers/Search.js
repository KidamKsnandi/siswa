const { Op } = require("sequelize");

const searchUnit = function(search) {
    return { [Op.or]: [
        { 'unit': { [Op.iRegexp]: search } }
  ]}
}

const searchUser = function(search) {
    return { [Op.or]: [
        { 'regu': { [Op.iRegexp]: search } },
        { 'nama': { [Op.iRegexp]: search } },
        { 'email': { [Op.iRegexp]: search } },
        { 'no_hp': { [Op.iRegexp]: search } }
  ]}
}

const searchWilayah = function(search) {
  return { [Op.or]: [
      { 'nama': { [Op.iRegexp]: search } },
      { 'lat': { [Op.iRegexp]: search } },
      { 'long': { [Op.iRegexp]: search } }
]}
}

module.exports = {
            searchUnit,
            searchUser,
            searchWilayah
}
