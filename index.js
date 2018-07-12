function img1() {
  $("#presentImg").css("background", () => {
    return 'url(svg/image1.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    });
  $("#postcard").css("background", () => {
    return 'url(svg/postcard1.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    })
}

function img2() {
  $("#presentImg").css("background", () => {
    return 'url(svg/image2.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    });
  $("#postcard").css("background", () => {
    return 'url(svg/postcard2.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    })
}

function img3() {
  $("#presentImg").css("background", () => {
    return 'url(svg/image3.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    });
  $("#postcard").css("background", () => {
    return 'url(svg/postcard3.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    })
}

function img4() {
  $("#presentImg").css("background-image", () => {
    return 'url(svg/image4.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    });
  $("#postcard").css("background", () => {
    return 'url(svg/postcard4.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    })
}

function img5() {
  $("#presentImg").css("background-image", () => {
    return 'url(svg/image5.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    });
  $("#postcard").css("background", () => {
    return 'url(svg/postcard5.jpg)';
  })
    .css("background-size", () => {
      return 'cover';
    })
}

////////////////////////////////

function textOnPostcard (filenameIN, personName, textPostcard) {
  let filenameOUT = 'svg/postcard/postcardTEST.jpg';
  let loadedImage;
  let footerText = 'Вы держите в руках самый Большой и Настоязий подарок: теплу. и искреннюю благодарность' +
    ' от маленького пациента, который ведет борьбу с тяжелым недугом. Именно ему Вы с нашей помощью передали огромную ' +
    'ценность - шанс на выздоровление. Фонд "Подари жизнь" помогает детям с тяжелыми онкогематологическими заболеваниями. И ' +
    'благодаря Вашей поддержке мы имеем возможность помогать детям лечиться, а врачам лечить. Спасибо Вам!';

  Jimp.read(filenameIN)
    .then((image) => {
      loadedImage = image;
      return Jimp.loadFont('font/font/font.fnt');
    })
    .then((font) => {
      loadedImage.print(font, 306, 588, personName)
        .print(font, 142, 695, textPostcard, 705)
        .print(font, 96, 1137, footerText, 609)
        .write(filenameOUT);
    })
    .catch((err) => {
      console.error(err);
    });

  Jimp.read(filenameOUT)
    .then((image) => {
      loadedImage = image;
      return Jimp.loadFont('font/font/font.fnt');
    })
    .then((font) => {
      loadedImage.print(font, 142, 695, textPostcard, 705)
        .write(filenameOUT);
    })
    .catch((err) => {
      console.error(err);
    });

  Jimp.read(filenameOUT)
    .then((image) => {
      loadedImage = image;
      return Jimp.loadFont('font/font/font.fnt');
    })
    .then((font) => {
      loadedImage.print(font, 96, 1137, footerText, 609)
        .write(filenameOUT);
    })
    .catch((err) => {
      console.error(err);
    });

}
let textPostcard = 'Вы держите в руках самый Большой и Настоящий подарок: теплую и искреннюю благодарность' +
  ' от маленького пациента, который ведет борьбу с тяжелым недугом. Именно ему Вы с нашей помощью передали огромную ' +
  'ценность - шанс на выздоровление. Фонд "Подари жизнь" помогает детям с тяжелыми онкогематологическими заболеваниями. И ' +
  'благодаря Вашей поддержке мы имеем возможность помогать детям лечиться, а врачам лечить. Спасибо Вам!';

let name = 'Дорогой Иван Иванович!';

textOnPostcard('image/postcard2.jpg', name, textPostcard);

function lookPostcard () {
    textOnPostcard('svg/postcard2.jpg', name, textPostcard);
    $("#postcard").css("background", () => {
      return 'url(svg/postcard/postcard.jpg)';
    })
      .css("background-size", () => {
        return 'contain';
      });
  // }
}


function dataFromForm() {
  let nameSender = $('#nameSender').val();
  if (nameSender.length !== 0) {
    $('#postSenderName').html(() => {
      let emphasis = "<p>" + nameSender + "</p>";
      return emphasis;
    });
  }
  let nameRecipient = $('#nameRecipient').val();
  if (nameRecipient.length !== 0) {
    $('#postRecipientName').html(() => {
      let emphasis = "<p>" + nameRecipient + "</p>";
      return emphasis;
    });
  }
  let textCongratulation = $('#textCongratulation').val();
  if (textCongratulation.length !== 0) {
    $('#postText').html(() => {
      let emphasis = "<p>" + textCongratulation + "</p>";
      return emphasis;
    });
  }
}



// $("#nameRecipient").change(() => {
//   $( "input:text#nameRecipient" ).val((index, value ) => {
//      return value;                                 //   $( "#postRecipientName" ).replaceWith(value);
//     }
//   );
// });