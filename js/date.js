digits = ["naught", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
ordinals = ["naughth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"];
months = ["after-yule", "cake-tide", "lith-tide", "easter", "thrice-milk", "mid-summer", "after-litha", "grass-tide", "harvest", "winter", "blood-tide", "yule-tide"];

date = document.getElementById("date");
today = new Date();
date.innerHTML = " the " + datify(today.getDate()) + " of " + monthify(today.getMonth());

function datify(d) {
  if (d < 10) return ordinals[d % 10];
  else if (d == 10) {
    return "tenth";
  } else if (d < 20) {
    return "onety-" + ordinals[d % 10];
  } else if (d == 20) {
    return "twentieth";
  } else {
    return "twenty-" + ordinals[d % 10];
  }
}

function monthify(m) {
  return months[m];
}
