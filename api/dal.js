const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const couch_base_uri = "http://127.0.0.1:5984/" 
const couch_dbname = "todos"
const db = new PouchDB(couch_base_uri + couch_dbname)
const {
    map,
    uniq,
    prop,
    omit,
    compose,
    drop
} = require('ramda')



const dal = {

}

module.exports = dal
