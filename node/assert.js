function assert(...statements) {
  var ErrorFormat = function (indices) {
    var index_str = (function () {
      var raw_str = "";
      indices.forEach(x => raw_str += (x + ", "));
      return raw_str.slice(0, -2);
    }());
    return "Assertation failed at index " + index_str;
  };

  var throw_index_list = [];

  for (let i = 0; i < statements.length; i++) {
    if (statements[i] == false) {
      throw_index_list.push(i);
    }
  }

  if (throw_index_list.length > 0) {
    if (1 in statements) {
      throw new Error(ErrorFormat(throw_index_list));
    } else {
      throw new Error("Assertation failed");
    }
  }
  return;
}

module.exports = assert;
