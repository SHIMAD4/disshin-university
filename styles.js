body      = document.body
menu      = document.querySelector('.dropdown-menu')
dropdown  = document.querySelector('.js_dropdown')
nums      = document.querySelector('.paragraph')
datesPa   = document.querySelector('.datesPa')
datesSoon = document.querySelector('.datesSoon')
datesSoon.innerHTML = ' СПбГУТ Математика: 12 июля 13.00;  СПбПУ Информатика: 12 июля 16.00;'
minp      = document.querySelector('.js_minp')
maxp      = document.querySelector('.js_maxp')
price    = document.querySelector('.js_price')

button1 = document.querySelector('.js_btn1')
button2 = document.querySelector('.js_btn2')
button3 = document.querySelector('.js_btn3')
button4 = document.querySelector('.js_btn4')
button5 = document.querySelector('.js_btn5')


js_dropdownItem1 = document.querySelector('.js_dropdownItem1')
js_dropdownItem2 = document.querySelector('.js_dropdownItem2')
js_dropdownItem3 = document.querySelector('.js_dropdownItem3')
js_dropdownItem4 = document.querySelector('.js_dropdownItem4')
js_dropdownItem5 = document.querySelector('.js_dropdownItem5')
js_dropdownItem6 = document.querySelector('.js_dropdownItem6')





function mosPolyt() {
  button1.classList.add('mosPolyt')
  button2.classList.remove('spbpu')
  button3.classList.remove('spbgut')
  button4.classList.remove('laty')
  button5.classList.remove('itmo')

  js_dropdownItem1.innerHTML = '1) === Бюджет === 09.03.01 Информатика и вычислительная техника (Веб-технологии) (Б-О, Москва)'
  js_dropdownItem2.innerHTML = '2) === Бюджет === 09.03.02 Информационные системы и технологии (Цифровая трансформация) (Б-О, Москва)'
  js_dropdownItem3.innerHTML = `3) === Бюджет === 09.03.02 Информационные системы и технологии 
                                (Автоматизированные системы обработки информации и управления;
                                   Информационные технологии в медиаиндустрии и дизайне;
                                    Технологии дополненной и виртуальной реальности;
                                     Программное обеспечение игровой компьютерной индустрии;
                                      Информационные системы умных пространств) (Б-О, Москва)`
  js_dropdownItem4.innerHTML = '4) Направление отсутствует'
  js_dropdownItem5.innerHTML = '5) Направление отсутствует'
  js_dropdownItem6.innerHTML = '6) Направление отсутствует'

  body.classList.add('mosPolyt')
  body.classList.remove('spbpu')
  body.classList.remove('spbgut')
  body.classList.remove('laty')
  body.classList.remove('itmo')

  menu.classList.add('menu-active')

  nums.innerHTML = 'Номер в рейтинговом списке: 52240'

  dropdown.innerHTML = '3 Направления, 3 бюджет'

  datesPa.innerHTML = `Мат: Закончен; Инф: 20.07.2022; Рус: 18.07.2022;`

  minp.innerHTML = 'Проходные баллы: 1) 263 2) 232 3) ***'
  maxp.innerHTML = 'Набранные баллы: Мат: 100 Инф: *** Рус: ***'

  price.innerHTML = 'Цена: 276.600 рублей в год'
}
button1.addEventListener("click", mosPolyt);



function spbpu() {
  button1.classList.remove('mosPolyt')
  button2.classList.add('spbpu')
  button3.classList.remove('spbgut')
  button4.classList.remove('laty')
  button5.classList.remove('itmo')

  js_dropdownItem1.innerHTML = '1) === Бюджет === 09.03.01 Информатика и вычислительная техника'
  js_dropdownItem2.innerHTML = '2) === Бюджет === 09.03.02 Информационные системы и технологии'
  js_dropdownItem3.innerHTML = '3) === Бюджет === 09.03.03 Прикладная информатика'

  js_dropdownItem4.innerHTML = '4) === Контракт === 09.03.01 Информатика и вычислительная техника'
  js_dropdownItem5.innerHTML = '5) === Контракт === 09.03.02 Информационные системы и технологии'
  js_dropdownItem6.innerHTML = '6) === Контракт === 09.03.03 Прикладная информатика'

  body.classList.remove('mosPolyt')
  body.classList.add('spbpu')
  body.classList.remove('spbgut')
  body.classList.remove('laty')
  body.classList.remove('itmo')

  menu.classList.add('menu-active')

  nums.innerHTML = 'Номер в рейтинговом списке: '

  dropdown.innerHTML = '6 Направления, 3 бюджет, 3 контракт'

  datesPa.innerHTML = `Мат: 19.07.2022; Инф: 12.07.2022; Рус: 20.07.2022;`

  minp.innerHTML = 'Проходные баллы: 1) 270 2) 266 3) 256'
  maxp.innerHTML = 'Набранные баллы: Мат: *** Инф: *** Рус: ***'

  price.innerHTML = 'Цена: 105.000 рублей в семестр'
}
button2.addEventListener("click", spbpu);



function spbgut() {
  button1.classList.remove('mosPolyt')
  button2.classList.remove('spbpu')
  button3.classList.add('spbgut')
  button4.classList.remove('laty')
  button5.classList.remove('itmo')


  js_dropdownItem1.innerHTML = '1) === Бюджет === 09.03.02 Информационные системы и технологии; Дизайн графических и пользовательских интерфейсов информационных систем'
  js_dropdownItem2.innerHTML = '2) === Бюджет === 09.03.02 Информационные системы и технологии; Интеллектуальные информационные системы и технологии'
  js_dropdownItem3.innerHTML = '3) === Бюджет === 09.03.02 Информационные системы и технологии; Прикладные информационные системы'
  js_dropdownItem4.innerHTML = '4) === Бюджет === 27.03.04 Управление в технических системах; Информационные технологии в технических системах'
  js_dropdownItem5.innerHTML = '5) === Контракт === 27.03.04 Управление в технических системах; Информационные технологии в технических системах'
  js_dropdownItem6.innerHTML = '6) 6 Направление отсутствует'

  body.classList.remove('mosPolyt')
  body.classList.remove('spbpu')
  body.classList.add('spbgut')
  body.classList.remove('laty')
  body.classList.remove('itmo')

  menu.classList.add('menu-active');

  nums.innerHTML = 'Номер в рейтинговом списке: 22-15911'

  dropdown.innerHTML = '5 Направления, 4 бюджет, 1 контракт'

  datesPa.innerHTML = `Мат: 12.07.2022; Инф: 14.07.2022; Рус: 15.07.2022;`

  minp.innerHTML = 'Проходные баллы: 1) 253  2) 250 3) 252 '
  maxp.innerHTML = 'Набранные баллы: Мат: *** Инф: *** Рус: ***'

  price.innerHTML = 'Цена: 228.000 рублей в год'
}
button3.addEventListener("click", spbgut);



function laty() {
  button1.classList.remove('mosPolyt')
  button2.classList.remove('spbpu')
  button3.classList.remove('spbgut')
  button4.classList.add('laty')
  button5.classList.remove('itmo')

  js_dropdownItem1.innerHTML = '1) === Бюджет === 09.03.02 Информационные системы и технологии'
  js_dropdownItem2.innerHTML = '2) === Бюджет === 09.03.04 Программная инженерия'
  js_dropdownItem3.innerHTML = '3) === Бюджет === 09.03.01 Информатика и вычислительная техника (Искусственный интеллект)'
  js_dropdownItem4.innerHTML = '4) === Контракт === 09.03.01 Информатика и вычислительная техника (Искусственный интеллект)'
  js_dropdownItem5.innerHTML = '5) 5 Направление отсутствует'
  js_dropdownItem6.innerHTML = '6) 6 Направление отсутствует'

  body.classList.remove('mosPolyt')
  body.classList.remove('spbpu')
  body.classList.remove('spbgut')
  body.classList.add('laty')
  body.classList.remove('itmo')

  menu.classList.add('menu-active')

  nums.innerHTML = 'Номер в рейтинговом списке: 311-860-616 46'

  dropdown.innerHTML = '4 Направления, 3 бюджет, 1 контракт'

  datesPa.innerHTML = `Мат: Закончена; Инф: 22.07.2022; Рус: 23.07.2022;` 
  
  minp.innerHTML = 'Проходные баллы: 1) 263  2) 282 3) 265'
  maxp.innerHTML = 'Набранные баллы: Мат: 60 Инф: *** Рус: ***'

  price.innerHTML = 'Цена: 112.500 рублей в семестр'
}
button4.addEventListener("click", laty);



function itmo() {
  button1.classList.remove('mosPolyt')
  button2.classList.remove('spbpu')
  button3.classList.remove('spbgut')
  button4.classList.remove('laty')
  button5.classList.add('itmo')

  js_dropdownItem1.innerHTML = `1) === Бюджет === Разработка программного обеспечения / Software Engineering 
                                  09.03.02 Информационные системы и технологии`
  js_dropdownItem2.innerHTML = `2) === Бюджет === Компьютерные технологии: Программирование и искусственный интеллект
                                  01.03.02 Прикладная математика и информатика`
  js_dropdownItem3.innerHTML = `3) === Бюджет === Компьютерные системы и технологии
                                  09.03.01 Информатика и вычислительная техника`
  js_dropdownItem4.innerHTML = `4) === Контракт === Системное и прикладное программное обеспечение
                                  09.03.04 Программная инженерия`
  js_dropdownItem5.innerHTML = '5) Направление отсутствует'
  js_dropdownItem6.innerHTML = '6) Направление отсутствует'

  body.classList.remove('mosPolyt')
  body.classList.remove('spbpu')
  body.classList.remove('spbgut')
  body.classList.remove('laty')
  body.classList.add('itmo')

  menu.classList.add('menu-active')

  nums.innerHTML = 'Номер в рейтинговом списке: F1-0002-2022'

  dropdown.innerHTML = '4 Направления, 3 бюджет, 1 контракт'

  datesPa.innerHTML = `Мат: Закончена; Инф: Закончена; Рус: Закончена;` 

  minp.innerHTML = 'Проходные баллы: 1) 290  2) 305 3) 281'
  maxp.innerHTML = 'Набранные баллы: Мат: 70 Инф: 20 Рус: 96'

  price.innerHTML = 'Цена: 280.000 рублей в год'
}
button5.addEventListener("click", itmo);