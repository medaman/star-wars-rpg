var character = [
createChar("Obi-Wan Kanobi", 120, 8, 10, "obi-wan-kenobi.jpg", "obi.png"),
createChar("Luke Skywalker", 100, 15, 5, "luke-skywalker.jpg", "luke.png"),
createChar("Darth Vader", 150, 7, 20, "darth-vader.jpg", "vader.png"),
createChar("Yoda", 180, 4, 25, "yoda.jpg", "yoda.png")];

function createChar(name, hp, ap, counter, pic, jpeg) {
  var details = {
    name: name,
    hp: hp,
    ap: ap,
    counter: counter,
    pic: pic,
    jpeg: jpeg
  };
  return details;
}