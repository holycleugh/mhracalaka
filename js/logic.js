elephant = ["p", "t", "c", "k", "g", "gh", "ṅ", "ṅh", "ñh", "nh", "mh", "m", "v", "b", "d", "j", "jh", "ñ", "n", "dh"];
whale = ["i", "a", "u"];
vulture = ["l", "lh", "yh", "rh", "r", "y"];

loaves = ["&#8857;", "&#8868;", "&perp;", "&#8866;", "&#8872;", "&isin;", "=", "(", ")", "&not;", "&rarr;", "&and;", "&or;", "&harr;", "&forall;", "&exist;", "&#9723;", "&#9671;", "R"];

bread = "";

quran = [];

for (var i = 0; i < 18; i++) {
  quran.push(vulture[(2 * i + Math.trunc(i / 9)) % vulture.length] + whale[Math.floor(2 * i / 3) % whale.length]);
}

bread += "From b&oelig;otia.";
bread += "<br />";
bread += "<table class = \"ships\">";

for (var i = 0; i < 18; i++) {
  bread += "<tr><td>" + i + "</td><td>" + quran[i % quran.length] + "</td><td>" + loaves[i % loaves.length] + "</td></tr>";
}

bread += "</table>";

document.getElementById("ships").innerHTML = bread;
