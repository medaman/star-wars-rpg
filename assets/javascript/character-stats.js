var character = [
createChar("Obi-Wan Kanobi", 120, 6, "blue", "obi-wan-kenobi.jpg", "obi.png"),
createChar("Luke Skywalker", 180, 10, "green", "luke-skywalker.jpg", "luke.png"),
createChar("Darth Vader", 150, 8, "red", "darth-vader.jpg", "vader.png"),
createChar("Mace Windu", 100, 5, "purple", "mace-windu.jpg", "windu.png")];

function createChar(name, hp, ap, color, pic, jpeg) {
  var details = {
    name: name,
    hp: hp,
    ap: ap,
    color: color,
    pic: pic,
    jpeg: jpeg
  };
  return details;
}