
import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import { DbContext } from '../interfaces/DbContext';

const basename: string = path.basename(module.filename);
const env: string = process.env.NODE_ENV || 'development';
let config = require(path.resolve(`${__dirname}/../../config/db/config.json`))[env];
let db = null;

if(!db) {
  db = {};

  const operatorAliases = false;
  config = Object.assign({ operatorAliases }, config);

  var sequelize: Sequelize.Sequelize = config.use_env_variable 
  ? new Sequelize(process.env[config.use_env_variable])
  : new Sequelize(config.database, config.username, config.password, config);  

  fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: string) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model['name']] = model;
  });
  
  Object.keys(db).forEach((modelName: string) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
}

export default <DbContext>db;