//1-misol
// Funksiya yozing, u berilgan sonni faktorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak:

function num1(son) {
  if (typeof son !== "number" || son < 0) {
    throw new Error("Faktorialni hisoblash uchun musbat son kerak!");
  }
  let faktorial = 1;
  for (let i = 1; i <= son; i++) {
    faktorial *= i;
  }
  return faktorial;
}

function sum1(son) {
  try {
    const natija = num1(son);
    return `Natija: ${natija}`;
  } catch (xato) {
    console.log(`"Xato yuz berdi:  ${xato.message}`);
  }
}

console.log(sum1(5));
console.log(sum1(-3));
console.log(sum1("matn"));

//2-misol
//Agar funksiya argument sifatida massiv qabul qilmasa yoki undefined bo‘lsa, xato tashlash kerak:

function num2(massiv) {
  if (!Array.isArray(massiv) || massiv === undefined) {
    throw new Error("Funksiya argument sifatida massiv qabul qilishi kerak!");
  }
}

function sum2(massiv) {
  try {
    const natija = num_2(massiv);
    return `O‘rtacha qiymat: ${natija}`;
  } catch (xato) {
    console.log(`Massiv uzatilmadi! ${xato.message}`);
  }
}

console.log(sum2(5));
console.log(sum2(-3));
console.log(sum2("matn"));

//3-misol
//Agar massivda hech bo‘lmaganda bitta element son bo‘lmasa, xato tashlash kerak:

function num3(massiv) {
  if (!Array.isArray(massiv)) {
    throw new Error("Funksiya argument sifatida massiv qabul qilishi kerak!");
  }
  const summa = sonlar.reduce((a, b) => a + b, 0);
  return summa / sonlar.length;
}

function sum3(massiv) {
  try {
    const natija = num3(massiv);
    return `O‘rtacha qiymat: ${natija}`;
  } catch (xato) {
    console.log(`Xato yuz berdi: ${xato.message}`);
  }
}

console.log(sum3([1, 2, 3, 4, 5]));

//4-misol
//Xato yuz berganda try...catch orqali "Xato yuz berdi: xato haqida xabar" deb konsolga chiqaring.

function num4(massiv) {
  if (!Array.isArray(massiv)) {
    throw new Error("Funksiya argument sifatida massiv qabul qilishi kerak!");
  }
  const summa = sonlar.reduce((a, b) => a + b, 0);
  return summa / sonlar.length;
}

function sum4(massiv) {
  try {
    const natija = num4(massiv);
    return `O‘rtacha qiymat: ${natija}`;
  } catch (xato) {
    console.log(`Xato yuz berdi: ${xato.message}`);
  }
}

console.log(sum4([1, 2, 3, 4, 5]));

//5-misol
//O‘zingizning CustomError nomli xatolik sinfini yarating. Ushbu sinf konstruktoriga xabar va kod qabul qiladi (message va code).

//6-misol
//Agar massivda hech bo‘lmaganda bitta element son bo‘lmasa, xato tashlash kerak:

//7-misol
//Xato yuz berganda try...catch orqali "Xato yuz berdi: xato haqida xabar" deb konsolga chiqaring.

//8-misol
//Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.

function num8(numbers) {
  let sum8 = 0;

  for (let num of numbers) {
    if (typeof num === "number" && num % 2 === 0) {
      sum8 += num;
    }
  }

  return sum8;
}

try {
  const resultat = num8([1, 2, 3, 4, 5, 6]);
  console.log("Juft sonlar yig'indisi:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//9-misol
//Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan

function num9(numbers) {
  const evenNumbers = numbers.filter(
    (num) => typeof num === "number" && num % 2 == 1
  );

  return evenNumbers;
}

try {
  const resultat = num9([1, 2, 3, 4, 5, 6]);
  console.log("Juft sonlar:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//10-misol
//Funksiya yozing, massiv ichida nechta unikal element borligini aniqlaydigan.

//11-misol
//Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.

function num11(numbers) {
  if (numbers.length === 0) {
    throw new Error("Massiv bo'sh");
  }

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return max - min;
}

try {
  const resultat = num11([1, 2, 3, 4, 5, 6]);
  console.log("Eng katta va eng kichik sonlar o‘rtasidagi farq:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//12-misol
//Funksiya yozing, massivning barcha elementlarini o‘zgartirmasdan teskari tartibda qaytaradigan.

function num12(numbers) {
  return numbers.slice().reverse();
}

try {
  const resultat = num12([1, 2, 3, 4, 5]);
  console.log("Teskari tartibdagi massiv:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//13-misol
//Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.

function num13(numbers, value) {
  let count = 0;

  for (let num of numbers) {
    if (num === value) {
      count++;
    }
  }

  return count;
}

try {
  const resultat = num13([1, 2, 3, 1, 4, 1, 5], 1);
  console.log("Qiymat uchragan marta:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//14-misol
//Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.

function sortByLength(strings) {
  if (!strings.every((item) => typeof item === "string")) {
    throw new Error("Massivda faqat satr elementlar bo‘lishi kerak");
  }

  return strings.sort((a, b) => a.length - b.length);
}

try {
  const resultat = sortByLength(["apple", "banana", "kiwi", "grape"]);
  console.log("Satr elementlari uzunligi bo‘yicha tartiblangan:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//15-misol
//Funksiya yozing, massivni ikki qismga bo‘lib, yangi massiv yaratadigan (birinchi yarmi va ikkinchi yarmi alohida massivlarda).

function num15(numbers) {
  const sum15 = Math.floor(numbers.length / 2);

  const yarim = numbers.slice(0, sum15);
  const yarim2 = numbers.slice(sum15);

  return [yarim, yarim2];
}

try {
  const resultat = num15([1, 2, 3, 4, 5, 6]);
  console.log("Birinchi qism:", resultat[0]);
  console.log("Ikkinchi qism:", resultat[1]);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//16-misol
//Funksiya yozing, massiv ichidan faqat musbat sonlarni yig‘ib yangi massiv yaratadigan.

function num16(numbers) {
  const sum16 = numbers.filter((num) => num > 0);

  return sum16;
}

try {
  const resultat = num16([-5, 3, 0, 7, -2, 4]);
  console.log("Musbat sonlar:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//17-misol
//Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.

function num17(numbers) {
  if (!numbers.every((item) => typeof item === "number")) {
    throw new Error("Massivda faqat sonlar bo‘lishi kerak");
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);

  const orta = sum / numbers.length;

  return orta;
}

// Misol
try {
  const resultat = num17([1, 2, 3, 4, 5]);
  console.log("O‘rtacha qiymat:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//18-misol
//Funksiya yozing, massiv ichidagi barcha elementlarni ikki marta takrorlab qaytaradigan.

function num18(numbers) {
  const sum18 = numbers.flatMap((num) => [num, num]);

  return sum18;
}

try {
  const resultat = num18([1, 2, 3, 4, 5]);
  console.log("Takrorlangan massiv:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//19-misol
//Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan

function num19(strings) {
  const sum19 = strings.map((str) => {
    if (typeof str === "string") {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str;
  });

  return sum19;
}

try {
  const resultat = num19(["apple", "banana", "kiwi", "grape"]);
  console.log("Satr elementlari birinchi harfi katta:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//20-misol
//Funksiya yozing, massiv ichidagi raqamlar massivini saralash uchun, ammo tartibni belgilovchi flag qabul qilsin (o‘sish yoki kamayish tartibi).

function num20(numbers, isAscending = true) {
  if (!numbers.every((item) => typeof item === "number")) {
    throw new Error("Massivda faqat raqamlar bo‘lishi kerak");
  }

  return numbers.sort((a, b) => {
    if (isAscending) {
      return a - b;
    } else {
      return b - a;
    }
  });
}

try {
  const osish = num20([5, 2, 8, 1, 3], true);
  console.log("O‘sish tartibi:", osish);

  const kamayish = num20([5, 2, 8, 1, 3], false);
  console.log("Kamayish tartibi:", kamayish);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//21-misol
//Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.

function num21(strings) {
  let uzun = strings[0];
  let kalta = strings[0];

  strings.forEach((value) => {
    if (value.length > uzun.length) {
      uzun = value;
    }
    if (value.length < kalta.length) {
      kalta = value;
    }
  });

  return [kalta, uzun];
}

try {
  const resultat = num21(["apple", "banana", "kiwi", "grape", "orange"]);
  console.log("Eng qisqa va eng uzun satrlar:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//22-misol
//Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).

function num22(numbers) {
  const sum22 = numbers.map((num) => {
    if (typeof num === "number") {
      return num.toString();
    }
  });

  return sum22;
}

try {
  const resultat = num22([1, 2, 3, 4, 5]);
  console.log("Stringga aylantirilgan massiv:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//23-misol
//Funksiya yozing, satr ichida nechta unli harf borligini qaytaradigan.

function num23(str) {
  const unli = "aeiouAEIOU";

  const sum23 = str.split("").filter((char) => unli.includes(char)).length;

  return sum23;
}

try {
  const resultat = num23("Hello World");
  console.log("Unli harflar soni:", resultat);
} catch (e) {
  console.log(`Xato yuz berdi: ${e.message}`);
}

//24-misol
//Funksiya yozing, berilgan satrdan barcha probellarni olib tashlaydigan va yangi satr qaytaradigan.

//25-misol
//Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan.

function num25(string) {}

//26-misol
//Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.

function num26(str) {
  try {
    const sum26 = str.split(" ");

    for (let i = 0; i < sum26.length; i++) {
      for (let j = i + 1; j < sum26.length; j++) {
        if (sum26[i].length > sum26[j].length) {
          const uzun = sum26[i];
          sum26[i] = sum26[j];
          sum26[j] = uzun;
        }
      }
    }

    return sum26.join(" ");
  } catch (error) {
    console.log("Xatolik yuz berdi:", error.message);
    return "";
  }
}

console.log(num26("Men dasturlashni o'rganishni juda yaxshi ko'raman"));

//27-misol
//Funksiya yozing, satr ichida ma’lum bir so‘z necha marta takrorlanganini aniqlaydigan.

function num27(sentence, value) {
  try {
    const sum27 = sentence.split(" ");

    let counter = 0;
    for (let i = 0; i < sum27.length; i++) {
      if (sum27[i] === value) {
        counter++;
      }
    }

    return counter;
  } catch (error) {
    console.log("Xatolik yuz berdi:", error.message);
    return 0;
  }
}

console.log(num27("salom dunyo salom bolalar salom"));

//28-misol
//Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.

//29-misol
//Funksiya yozing, satrdagi barcha raqamlarni yig‘indisini hisoblaydigan.

function num29(str) {
  try {
    if (typeof str !== "string") {
      throw new Error(" faqat raqamlardan iborat bo'lishi kerak!");
    }

    let sum29 = 0;
    for (let i = 0; i < str.length; i++) {
      sum29 += parseInt(str[i], 10);
    }

    return sum29;
  } catch (error) {
    console.log("Xatolik yuz berdi:", error.message);
    return 0;
  }
}

console.log(num29(20231224));

//30-misol
//Funksiya yozing, satrdan faqat unikal harflarni qoldiradigan va takroriylarini olib tashlaydigan.

//31-misol
//Funksiya yozing, satrdan barcha belgilarni o‘z o‘rniga teskari tartibda chiqaradigan.

function num31(str) {
  try {
    return str.split("").reverse().join("");
  } catch (error) {
    console.log("Xatolik yuz berdi:", error.message);
    return "";
  }
}

console.log(num31("Salom Dunyo!"));

//32-misol
//Funksiya yozing, satr ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartiradigan.

function num32(str) {
  try {
    return str
      .split(" ")
      .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .join(" ");
  } catch (error) {
    console.log("Xatolik yuz berdi:", error.message);
    return "";
  }
}

console.log(num32("salom dunyo"));

//33-misol
//Funksiya yozing, satrdan barcha so‘zlarni massivga ajratadigan va so‘zlarni alfavit tartibida qaytaradigan.

//34-misol
//Funksiya yozing, massiv ichidagi barcha so‘zlarni birlashtirib, yagona satr yaratadigan.

function num34(wordsArray) {
  try {
    return wordsArray.join(" ");
  } catch (error) {
    console.log("Xatolik yuz berdi:", error.message);
    return "";
  }
}

console.log(num34(["Salom", "Dunyo", "bugun", "yaxshi"]));

//35-misol
//Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.

//36-misol
//Funksiya yozing, massiv ichidagi har bir elementni teskari qilib, yangi massiv qaytaradigan.

function num36(wordsArray) {
  try {
    return wordsArray.map((word) => word.split("").reverse().join(""));
  } catch (error) {
    console.log("Xatolik yuz berdi:", error.message);
    return [];
  }
}

console.log(num36(["Salom", "Dunyo", "bugun", "yaxshi"]));

//37-misol
//Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan.

function num37(str) {
  try {
    const sum37 = str.split(" ");
    const num37 = sum37.filter((word, index) => sum37.indexOf(word) === index);
    return num37;
  } catch (error) {
    console.log("Xatolik yuz berdi:", error.message);
    return [];
  }
}

console.log(num37("salom dunyo dunyo bugun salom yaxshi"));
