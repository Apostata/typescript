const envs = require('dotenv').config();
console.log(envs)
let environments = Object.keys(envs.parsed)
.reduce((acum, env)=>{
  return acum = {...acum, [env]:envs.parsed[env]};
},{});

environments = {...environments, ["NODE_ENV"]:process.env.NODE_ENV};
module.exports = environments;