body      = document.body
menu      = document.querySelector('.js_dropdown-menu')
dropdown  = document.querySelector('.js_dropdown')
nums      = document.querySelector('.js_paragraph')
datesPa   = document.querySelector('.js_datesPa')
minp      = document.querySelector('.js_minp')
maxp      = document.querySelector('.js_maxp')
price     = document.querySelector('.js_price')

datesSoon           = document.querySelector('.datesSoon')
datesSoon.innerHTML = 'СПбГУТ Рус: 15.07.2022, 13:00; МосПолитех Рус: 18.07.2022, **:**;'

// Инф: 20.07.2022;                  
// Мат: 19.07.2022; Рус: 20.07.2022; Инф: 22.07.2022; СПбПУ

links = document.querySelectorAll(".js_links")

links.forEach(e => {
  e.classList.add('link-active')
});

links_btn = document.querySelectorAll('.js_links_btn')

button1 = document.querySelector('.js_btn1')
button2 = document.querySelector('.js_btn2')
button3 = document.querySelector('.js_btn3')
button4 = document.querySelector('.js_btn4')
button5 = document.querySelector('.js_btn5')

button4.disabled = true;
button5.disabled = true;

js_dropdownItems = document.querySelectorAll('.js_dropdownItem')


function mosPolyt() {
  button1.classList.add('mosPolyt')
  button2.classList.remove('spbpu')
  button3.classList.remove('spbgut')
  button4.classList.remove('laty')
  button5.classList.remove('itmo')

  js_dropdownItems[0].innerHTML = "1) === Бюджет === 09.03.01 Информатика и вычислительная техника (Веб-технологии) (Б-О, Москва)"
  js_dropdownItems[1].innerHTML = "2) === Бюджет === 09.03.02 Информационные системы и технологии (Цифровая трансформация) (Б-О, Москва)"
  js_dropdownItems[2].innerHTML = "3) === Бюджет === 09.03.02 Информационные системы и технологии (Автоматизированные системы обработки информации и управления; Информационные технологии в медиаиндустрии и дизайне; Технологии дополненной и виртуальной реальности; Программное обеспечение игровой компьютерной индустрии; Информационные системы умных пространств) (Б-О, Москва)"
  js_dropdownItems[3].innerHTML = '4) Направление отсутствует'
  js_dropdownItems[4].innerHTML = '5) Направление отсутствует'
  js_dropdownItems[5].innerHTML = '6) Направление отсутствует'

  body.classList.add('mosPolyt')
  body.classList.remove('spbpu')
  body.classList.remove('spbgut')
  body.classList.remove('laty')
  body.classList.remove('itmo')

  menu.classList.add('menu-active')

  nums.innerHTML = "Номер в рейтинговом списке: 52240"

  dropdown.innerHTML = "3 Направления, 3 бюджет"

  datesPa.innerHTML = "Мат: Закончен; Инф: 20.07.2022; Рус: 18.07.2022;"

  minp.innerHTML = "Проходные баллы: 1) 263 2) 232 3) ***"
  maxp.innerHTML = "Набранные баллы: Мат: 95 Инф: *** Рус: ***"

  price.innerHTML = "Цена: 276.600 рублей в год"

  links_btn[0].disabled = false;
  links_btn[1].disabled = false;
  links_btn[2].disabled = false;
  links[1].action       = "https://mospolytech.ru/postupayushchim/priem-v-universitet/rating-abiturientov/?qs=MDAwMDAwMDMxXzAxfDA5LjAzLjAxX8Ll4S3y5fXt7uvu4%2BjofM737eD%2FfMH%2B5Obl8u3g%2FyDu8e3u4uA%3D"
  links[2].action       = "https://mospolytech.ru/postupayushchim/priem-v-universitet/rating-abiturientov/?qs=MDAwMDAwMDMxXzAxfDA5LjAzLjAxX8%2Fw7uPw4Ozs7e7lIO7h5fHv5ffl7ejlIOjt9O7w7OD26O7t7fv1IPHo8fLl7HzO9%2B3g%2F3zB%2FuTm5fLt4P8g7vHt7uLg"
  links[3].action       = "https://mospolytech.ru/postupayushchim/priem-v-universitet/rating-abiturientov/?qs=MDAwMDAwMDMxXzAxfDA5LjAzLjAyX9bo9PDu4uD%2FIPLw4O3x9O7w7OD26P98zvft4P98wf7k5uXy7eD%2FIO7x7e7i4A%3D%3D"
  
  links_btn[3].disabled = true;
  links_btn[4].disabled = true;
  links_btn[5].disabled = true;
}
button1.addEventListener("click", mosPolyt);

function spbpu() {
  button1.classList.remove('mosPolyt')
  button2.classList.add('spbpu')
  button3.classList.remove('spbgut')
  button4.classList.remove('laty')
  button5.classList.remove('itmo')

  js_dropdownItems[0].innerHTML = "1) === Бюджет === 09.03.01 Информатика и вычислительная техника"
  js_dropdownItems[1].innerHTML = "2) === Бюджет === 09.03.02 Информационные системы и технологии"
  js_dropdownItems[2].innerHTML = "3) === Бюджет === 09.03.03 Прикладная информатика"
  js_dropdownItems[3].innerHTML = "4) === Контракт === 09.03.01 Информатика и вычислительная техника"
  js_dropdownItems[4].innerHTML = "5) === Контракт === 09.03.02 Информационные системы и технологии"
  js_dropdownItems[5].innerHTML = "6) === Контракт === 09.03.03 Прикладная информатика"

  body.classList.remove('mosPolyt')
  body.classList.add('spbpu')
  body.classList.remove('spbgut')
  body.classList.remove('laty')
  body.classList.remove('itmo')

  menu.classList.add('menu-active')

  nums.innerHTML = "Номер в рейтинговом списке: ***"

  dropdown.innerHTML = "6 Направления, 3 бюджет, 3 контракт"

  datesPa.innerHTML = "Мат: 19.07.2022; Инф: 22.07.2022; Рус: 20.07.2022;"

  minp.innerHTML = "Проходные баллы: 1) 270 2) 266 3) 256"
  maxp.innerHTML = "Набранные баллы: Мат: *** Инф: *** Рус: ***"

  price.innerHTML = "Цена: 105.000 рублей в семестр"

  links_btn[0].disabled = false;
  links[1].action       = "https://enroll.spbstu.ru/applicants/1-2"

  links_btn[1].disabled = true;
  links_btn[2].disabled = true;
  links_btn[3].disabled = true;
  links_btn[4].disabled = true;
  links_btn[5].disabled = true;
}
button2.addEventListener("click", spbpu);

function spbgut() {
  button1.classList.remove('mosPolyt')
  button2.classList.remove('spbpu')
  button3.classList.add('spbgut')
  button4.classList.remove('laty')
  button5.classList.remove('itmo')


  js_dropdownItems[0].innerHTML = "1) === Бюджет === 09.03.02 Информационные системы и технологии; Дизайн графических и пользовательских интерфейсов информационных систем"
  js_dropdownItems[1].innerHTML = "2) === Бюджет === 09.03.02 Информационные системы и технологии; Интеллектуальные информационные системы и технологии"
  js_dropdownItems[2].innerHTML = "3) === Бюджет === 09.03.02 Информационные системы и технологии; Прикладные информационные системы"
  js_dropdownItems[3].innerHTML = "4) === Бюджет === 27.03.04 Управление в технических системах; Информационные технологии в технических системах"
  js_dropdownItems[4].innerHTML = "5) === Контракт === 27.03.04 Управление в технических системах; Информационные технологии в технических системах"
  js_dropdownItems[5].innerHTML = '6) 6 Направление отсутствует'

  body.classList.remove('mosPolyt')
  body.classList.remove('spbpu')
  body.classList.add('spbgut')
  body.classList.remove('laty')
  body.classList.remove('itmo')

  menu.classList.add('menu-active');

  nums.innerHTML = "Номер в рейтинговом списке: 22-15911 или по ФИО"

  dropdown.innerHTML = "5 Направления, 4 бюджет, 1 контракт"

  datesPa.innerHTML = "Мат: Закончен; Инф: Закончен; Рус: 15.07.2022;"

  minp.innerHTML = "Проходные баллы: 1) 253  2) 250 3) 252 "
  maxp.innerHTML = "Набранные баллы: Мат: 70 Инф: *** Рус: ***"

  price.innerHTML = "Цена: 228.000 рублей в год"

  links_btn[0].disabled = false;
  links_btn[1].disabled = true;
  links_btn[2].disabled = true;

  links[1].action       = "https://www.sut.ru/doci/abbit/entrance_tests/math120722.pdf"
  // links[2].action       = ""
  // links[3].action       = ""

  links_btn[3].disabled = true;
  links_btn[4].disabled = true;
  links_btn[5].disabled = true;
}
button3.addEventListener("click", spbgut);