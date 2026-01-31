const myName = "dmeetri";
const progLang = "TypeScript";
const courseCreatorName = "Nikita";
const reasonText = "хочу зарабатывать";
const numberOfMonth = 12;

function ch1_task1() {
  return `Привет! Меня зовут ${myName}. Я выбрал ${progLang} потому что ${reasonText}. Меня обучает ${courseCreatorName} на протяжении ${numberOfMonth}`;
}

function ch1_task2() {
  let myInfoText =
    "Привет! Меня зовут dmeetri. Я выбрал TypeScript потому что хочу зарабатывать. Меня обучает Nikita на протяжении 12";
  return myInfoText.replaceAll("TypeScript", "TYPESCRIPT");
}

function ch1_task3() {
  let userName = prompt("Пиши сюда:").toLowerCase();
  userName = userName.trim();

  return userName;
}

function ch1_task4() {
  const userAge = prompt("Возраст сюда йоу").trim();
  return parseInt(userAge);

  //Я знаю про унарный способ +"123" и про Number()
  // но я использу parceInt потому что вот мне он понравился
  // и что мне будет? 5?
}

function ch1_task5() {
  alert("Делаем обрезку строки или, сами придумайте. ОК нажми это перетнзия");

  let userString = prompt("Сюда пиши текст").trim();
  const startObrezanie = parseInt(prompt("откда начинаем резать?").trim());
  const countObrezanie = parseInt(prompt("сколько режем?").trim());

  return userString.slice(startObrezanie, startObrezanie + countObrezanie);
  //я крч не понял до конца суть задания, но сейчас скрипт как бы вырезает нужную область с того момента как начали и докуда закончили
  // пример - 1234567890 > с 3 по 5 > ответ > 45678
}

function ch1_task6() {
  let userText = prompt("Сюда писать текста много").toLowerCase().split(" ");
  const word = prompt(
    "Вот текст написал, слово вспомни из него, которое бесит и напиши сюда. Напишите",
  )
    .toLowerCase()
    .split(" ")[0]; // если что это не нейронка, у меня Pretier стоит

  const index = userText.indexOf(word);

  if (index === -1) return "Слово не найдено в тексте";

  return userText.slice(index + 1).join(" ");
}

function ch1_task7() {}
//крч мне было очень скучно это писать так что я развлекался как мог
