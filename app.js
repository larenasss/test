$(document).ready(() => {
  function translateLettersEnInRu(inputEl) {
    const dictionaryLettersInput = {
      q: "й",
      w: "ц",
      e: "у",
      r: "к",
      t: "е",
      y: "н",
      u: "г",
      i: "ш",
      o: "щ",
      p: "з",
      "[": "х",
      "]": "ъ",
      a: "ф",
      s: "ы",
      d: "в",
      f: "а",
      g: "п",
      h: "р",
      j: "о",
      k: "л",
      l: "д",
      ";": "ж",
      "'": "э",
      z: "я",
      x: "ч",
      c: "с",
      v: "м",
      b: "и",
      n: "т",
      m: "ь",
      ",": "б",
      ".": ".",
      Q: "Й",
      W: "Ц",
      E: "У",
      R: "К",
      T: "Е",
      Y: "Н",
      U: "Г",
      I: "Ш",
      O: "Щ",
      P: "З",
      "{": "Х",
      "}": "Ъ",
      A: "Ф",
      S: "Ы",
      D: "В",
      F: "А",
      G: "П",
      H: "Р",
      J: "О",
      K: "Л",
      L: "Д",
      ":": "Ж",
      '"': "Э",
      Z: "Я",
      X: "Ч",
      C: "С",
      V: "М",
      B: "И",
      N: "Т",
      M: "Ь",
      "<": "Б",
      ">": "Ю",
    };

    $(inputEl).on("input", function () {
      const input = $(this);
      let result = "";
      for (let i = 0; i < input.val().length; i++) {
        result +=
          dictionaryLettersInput[input.val().charAt(i)] ||
          input.val().charAt(i);
      }
      input.val(result);
    });
  }

  translateLettersEnInRu($(".js-translete-letters"));

  $(".js-mask-not-number").inputmask({ regex: "[^0-9]*" });
});
