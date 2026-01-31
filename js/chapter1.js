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

  alert(userName);
  return userName;
}

function ch1_task4() {
  let userAge = prompt("Возраст сюда йоу").trim();
  return parseInt(userAge);

  //Я знаю про унарный способ +"123" и про Number()
  // но я использу parceInt потому что вот мне он понравился
  // и что мне будет? 5?
}

function ch1_task5() {
  alert("Делаем обрезку строки или, сами придумайте. ОК нажми это перетнзия");

  let userString = prompt("Сюда пиши текст").trim();
  let startObrezanie = parseInt(prompt("откда начинаем резать?").trim());
  let countObrezanie = parseInt(prompt("сколько режем?").trim());

  return userString.slice(startObrezanie, startObrezanie + countObrezanie);
}

function ch1_task6() {}

function ch1_task7() {}
