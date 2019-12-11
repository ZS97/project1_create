'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API:'http://www.classbro.com/crm/',
  BASE_API:'http://121.43.174.41/crm/',
})
