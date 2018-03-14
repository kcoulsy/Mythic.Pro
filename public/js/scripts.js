//use to create valid urls strings

var createValidUrl = (obj) =>{
  var str = obj.replace(/\s+/g, '-').toLowerCase();
  str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
  return str;
}

module.exports = {
  createValidUrl
};
