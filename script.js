// I. Створення класу об'єктів
class Person {
  constructor(name, age, profession, city) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.city = city;
  }

  // Спільний метод для всіх об'єктів
  getInfo() {
    return `Ім'я: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}, Місто: ${this.city}`;
  }
}

// Створення 3 об'єктів класу
const person1 = new Person('Олексій', 25, 'Інженер', 'Київ');
const person2 = new Person('Марія', 30, 'Лікар', 'Львів');
const person3 = new Person('Руслан', 19, 'Студент', 'Харків');

// Об'єднання інформації про людей
const peopleInfo = [person1, person2, person3]
  .map(person => person.getInfo())
  .join('\n');

// II. Наслідування класів
class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  // Метод для приховування елемента
  blockHide() {
    this.$el.style.display = 'none';
  }

  // Метод для зміни кольору елемента
  editColor(color) {
    this.$el.style.background = color;
  }

  // Додатковий метод
  showInfo() {
    console.log(`Елемент: ${this.$el.tagName}, ID: ${this.$el.id}, Клас: ${this.$el.className}`);
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = options.width + 'px';
    this.$el.style.height = options.height + 'px';
    this.$el.style.background = options.color;
  }

  // Метод для додавання тексту
  addText(text) {
    this.$el.innerText = text;
    this.$el.style.display = 'flex';
    this.$el.style.flexDirection = 'column';
    this.$el.style.justifyContent = 'center';
    this.$el.style.alignItems = 'center';
    this.$el.style.fontSize = '18px';
    this.$el.style.color = 'white';
    this.$el.style.fontWeight = 'bold';
    this.$el.style.textAlign = 'center';
  }
}

// Створення об'єкта класу Box
const box1 = new Box({
  selector: '#box1',
  width: 500,
  height: 150,
  color: 'blue',
});

box1.showInfo(); // Виклик методу showInfo()

// Додавання тексту про людей
box1.addText(peopleInfo);

// Зміна кольору та додавання тексту
setTimeout(() => {
  box1.editColor('red');
  box1.addText('Група: 40-IC, Ім\'я: Островський Р.Д., 20.12.2024');
}, 3000);

// Приховування елемента
setTimeout(() => {
  box1.blockHide();
}, 6000);
