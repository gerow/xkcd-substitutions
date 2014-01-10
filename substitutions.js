(function() {

  substitutions = {
    "witnesses": "these dudes I know",
    "allegedly": "kinda probably",
    "new study": "tumblr post",
    "rebuild": "avenge",
    "space": "spaaace",
    "google glass": "virtual boy",
    "Google Glass": "virtual boy",
    "smartphone": "pokedex",
    "electric": "atomic",
    "senator": "elf-lord",
    "car": "cat",
    "election": "eating contest",
    "congressional leaders": "river spirits",
    "homeland security": "homestar runner",
    "Homeland Security": "Homestar Runner",
    "could not be reached for comment": "is guilty and everyone knows it"
  };

  real_substitutions = {};

  // add the upper case equivalents
  for (var k in substitutions) {
    real_substitutions[k] = substitutions[k];
    new_key = k[0].toUpperCase() + k.slice(1);
    new_value = substitutions[k][0].toUpperCase() + substitutions[k].slice(1);
    real_substitutions[new_key] = new_value;
  }


  $(document).ready(function() {
    $("div, p, span, title, h1, h2, h3, h4, h5, h6, a, b, em, i, pre, small, strong, li, dt, th, td").each(function() {
      if ($(this).html()) {
        t = $(this).html();
        for (var k in real_substitutions) {
          t = t.replace(new RegExp(k, "g"), real_substitutions[k]);
        }
        $(this).html(t);
      }
    });
  });

})();