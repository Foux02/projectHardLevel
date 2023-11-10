"use strict";

let title = " Океан78901234567890123456789012 ";

// Урок №4

const argumentString = function (funTitle) {
  if (typeof funTitle !== "string") {
    return alert(`Ваша пеменная title = ${funTitle}. Это не строка.`);
  } else {
    funTitle = funTitle.trim();
    return funTitle.length > 30 ? funTitle.slice(0, 30) + "..." : funTitle;
  }
};

console.log(argumentString(title));
