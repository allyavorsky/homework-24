/*
 * #1
 *
 * Розробити функцію, яка використовує метод reduce масиву для обчислення суми усіх елементів масиву чисел.
 Функція повинна приймати масив чисел та повертати їх суму.
*/

function sumArray(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

//
const exampleArraySum = [1, 2, 3, 4, 5];
const sum = sumArray(exampleArraySum);
console.log("Sum:", sum); // 15

/*
 * #2
 *
 * Розробити функцію, яка використовує метод map масиву для створення нового масиву, в якому кожен елемент буде вдвічі більшим за елементи вхідного масиву чисел.
 */

function doubleArrayElements(numbers) {
  return numbers.map((num) => num * 2);
}

//
const exampleArrayDouble = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayElements(exampleArrayDouble);
console.log("Double:", doubledArray); // 2, 4, 6, 8, 10

/*
 * #3
 *
 * Розробити клас `SkillsManager`, що відповідає за управління списком навичок. Клас повинен включати:
 * 1. Конструктор:
 * - Ініціалізує порожній масив `skills`, який буде використовуватися для зберігання навичок.
 * 2. Метод `addSkill(skill)`:
 * - Приймає один аргумент `skill` (рядок).
 * - Перевіряє, чи аргумент є рядком і має мінімум два символи.
 * - Якщо умови виконані, додає `skill` до масиву `skills` і повертає додану навичку.
 * - Якщо умови не виконані (навичка не є рядком або має менше двох символів), повертає `null`.
 * 3. Метод `getAllSkills()`:
 *   - Повертає поточний масив усіх навичок, збережених у класі.
 *
 * Загальні вимоги:
 * - Клас має бути модульним і здатним до використання в інших частинах програми, тому він повинен бути експортований.
 * - Клас має забезпечувати легке управління навичками, включаючи додавання нових навичок та отримання списку всіх наявних навичок.
 * - Код має бути написаний з урахуванням принципів чистого коду, забезпечуючи читабельність та легкість підтримки.
 */

class SkillsManager {
  constructor() {
    this.skills = [];
  }

  addSkill(skill) {
    if (typeof skill === "string" && skill.length >= 2) {
      this.skills.push(skill);
      return skill;
    }
    return null;
  }

  getAllSkills() {
    return this.skills;
  }
}

//
const skillsManager = new SkillsManager();

//
console.log(skillsManager.addSkill("JavaScript")); // JavaScript
console.log(skillsManager.addSkill("CSS")); // CSS
console.log(skillsManager.addSkill("A")); // null

//
console.log(skillsManager.getAllSkills()); // JavaScript, CSS

/*
 * #4
 * Задача: Калькулятор дат.
 * Завдання: Створити модуль на JavaScript, який імплементує функцію-конструктор DateCalculator для створення об'єктів, здатних керувати датами. Калькулятор дат має надавати такі можливості:
 * Додавання днів: Метод addDays приймає кількість днів як аргумент і додає цю кількість до поточної дати об'єкта.
 * Віднімання днів: Метод subtractDays приймає кількість днів як аргумент і віднімає цю кількість від поточної дати об'єкта.
 * Отримання результату: Метод getResult повертає поточну дату об'єкта у форматі "YYYY-MM-DD".
 *
 * Критерії перевірки:
 * В модулі має бути визначена функція-конструктор DateCalculator, яка ініціалізує об'єкт з початковою датою.
 * Мають бути реалізовані та доступні методи addDays, subtractDays, та getResult для екземплярів DateCalculator.
 * Об'єкти DateCalculator мають створюватися за допомогою ключового слова new і використання функції-конструктора.
 */

function DateCalculator(initialDate) {
  this.date = new Date(initialDate);

  this.addDays = function (days) {
    this.date.setTime(this.date.getTime() + days * 24 * 60 * 60 * 1000);
  };

  this.subtractDays = function (days) {
    this.date.setTime(this.date.getTime() - days * 24 * 60 * 60 * 1000);
  };

  this.getResult = function () {
    return this.date.toISOString().slice(0, 10);
  };
}

//
const dateCalculator = new DateCalculator("2023-01-01");

//
dateCalculator.addDays(5);
console.log(dateCalculator.getResult()); // 2023-01-06

//
dateCalculator.subtractDays(3);
console.log(dateCalculator.getResult()); // 2023-01-03
