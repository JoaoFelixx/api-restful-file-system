const REGEX_UUID = /^([\d]{4})\.*([\d]{5})-*([\d]{4})/;

const _id = Math.round(Math.random() * 8) + Date.now()+"";

module.exports = () =>  _id.replace(REGEX_UUID, "$1-$2-$3") 