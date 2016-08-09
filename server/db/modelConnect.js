const db = require('./db_config');
const User = require('./user/userModel');
const Player = require('./models/player');
const PlayerGame = require('./models/playerGame');
const Team = require('./models/team');

Player.belongsTo(Team);
Team.hasMany(Player);
PlayerGame.belongsTo(Player);
PlayerGame.belongsTo(Team);

// db.sync()
//     .then(() => console.log('we are connected'))
//     .catch(err => console.log(`unable to connect ${err}`));

module.exports = {
  db,
  User,
  Player,
  Team,
  PlayerGame,
};