const cars = [
  {
    id: "0",
    img: "https://i.infocar.ua/i/12/1547/1400x936.jpg",
    name: "ЗАЗ Vida",
    motor: "1.5i 8v",
    motorType: "ДВС",
    gas: "Бензин",
    power: "84 л.с.",
    maxSpeed: "170 км/ч",
    shortDescr:
      "Переднеприводный седан класса «В», практически полностью копирующий первое поколение Chevrolet Aveo в кузове T250.",
    fullDescr: `ЗАЗ Vida (ЗАЗ Вида) - переднеприводный седан класса «В», практически полностью копирующий первое поколение Chevrolet Aveo в кузове T250. Производство автомобиля стартовало в январе 2012 года, а в марте он поступил в свободную продажу. Ни по дизайну, ни по ходовой части Vida не отличается от Aveo. Сохранились и габариты и 2480-миллиметровая колесная база. В качестве передней подвески в автомобиле использованы стойки McPherson, тогда как сзади установлена рычажная конструкция с цилиндрическими пружинами. Передние колеса оборудованы дисковыми тормозами, задние - барабанного типа. В базовое оснащение автомобиля, кроме прочего, входят 14-дюймовые стальные колесные диски, гидроусилитель руля и подушка безопасности водителя. В более дорогих версиях в списке оборудования фигурирует кондиционер, электростеклоподъемники, противотуманные фары и так далее.
      Под капотом ЗАЗ Вида может быть установлен один из двух 4-цилиндровых бензиновых силовых агрегатов. 1,5-литровый двигатель с распределенным впрыском топлива выдает 86 л. с. мощности при 5600 об/мин и 128 Нм крутящего момента при 3000 об/мин. Агрегатироваться он может только с 5-ступенчатой механической коробкой передач, разгоняя автомобиль до 100 км/час за 11,5 секунд. Расход топлива, при этом, составляет 7,8 литра на 100 км пути в смешанном цикле.
      Второй мотор, 1,4-литровый с функцией изменения фаз газораспределения и четырьмя клапанами на цилиндр, располагает 94 «лошадками» при 6000 об/мин и 130 Нм крутящего момента при 3400 об/мин. До «сотни» автомобиль с таким двигателем в паре с 4-ступенчатой автоматической КПП разгоняется за 14 секунд, потребляя в смешанном цикле 7,3 литра топлива. Оба силовых агрегата разработаны General Motors.
      За счет того, что уровень локализации производства ЗАЗ Vida превышает порог в 50%, седан разрешено экспортировать на внешние рынки. В частности, российский, где автомобиль продается под именем Point. Со временем Vida должна полностью заменить собой легендарный ЗАЗ Lanos.`
  },
  {
    id: "1",
    img: "https://i.infocar.ua/i/12/720/1400x936.jpg",
    name: "ЗАЗ Lanos Cargo",
    motor: "1.5i 8v",
    motorType: "ДВС",
    gas: "Бензин",
    power: "84 л.с.",
    maxSpeed: "150 км/ч",
    shortDescr:
      "Грузовой автомобиль, созданный на базе шасси легкового автомобиля Daewoo Lanos.",
    fullDescr: `ЗАЗ Lanos Cargo – грузовой автомобиль, созданный на базе шасси легкового автомобиля Daewoo Lanos. Lanos Cargo оснащен просторной пластиковой надстройкой, внутри которой может свободно работать человек среднего роста.
  
      Грузовой отсек фургона ЗАЗ Ланос Карго отделен от пассажирского помещения жесткой перегородкой из труб, закрытых обивками.
      
      Большой объем грузового отделения, небольшая загрузочная высота, широкий широкий угол открытия дверей, прекрасная управляемость и маневренность делают ЗАЗ Lanos Cargo незаменимым для городских и загородных перевозок.
      
      Автомоиль ЗАЗ Ланос Карго оснащён двумя типами двигателей рабочим объёмом 1,3 л (МеМЗ) и 1,5 л (Ланос), усиленной задней подвеской. Запасное колесо раположено за спинкой пассажира и для его извлечения не надо будет выгружать багаж из грузового отделения.
      
      Привлекательными эксплуатационными характеристиками ЗАЗ Lanos Cargo являются экономичность, большой дверной проем, малая погрузочная высота и вполне доступная для такого автомобиля цена.`
  },
  {
    id: "2",
    img: "https://i.infocar.ua/i/12/707/1400x936.jpg",
    name: "ЗАЗ Sens",
    motor: "1.3i 8v",
    motorType: "ДВС",
    gas: "Бензин",
    power: "70 л.с.",
    maxSpeed: "162 км/ч",
    shortDescr:
      "Это первый украинский автомобиль класса B, созданный украинскими специалистами СП `АвтоЗАЗ-Дэу`.",
    fullDescr: `ZAZ Sens (ЗАЗ Сенс) - это первый украинский автомобиль класса B, созданный украинскими специалистами СП "АвтоЗАЗ-Дэу". За базу для его создания был принят автомобиль Daewoo Lanos, чей вместительный салон, выносливая подвеска, эффективные тормоза, легкое управление и система пассивной безопасности были признаны многими автовладельцами как наиболее оптимальные для данного класса.
  
      Сохранив лучшие достоинства базовой модели, ЗАЗ Sens был оснащен двигателем, коробкой передач и радиатором украинского производства.
      
      Силовой агрегат автомобиля ЗАЗ Сенс получился динамичным, тяговитым и экономичным. Старт с места полностью загруженного автомобиля, быстрый разгон до максимальной скорости, хорошая отзывчивость на открытие дроссельной заслонки, быстрый запуск холодного двигателя и устойчивая работа на всех режимах подняли репутацию мелитопольских моторов и самого Сенса как добротного, недорогого семейного автомобиля, для которого скорость - не основной показатель.
      
      ZAZ Sens прекрасно вписывается в интенсивный городской режим и уверенно преодолевает крутые и затяжные подъемы. Для удобства движения в плотном городском потоке на Sens установлен дополнительный стоп-сигнал.
      
      Благодаря просторному салону, тяговитому и экономичному двигателю, легкому управлению и выносливой подвеске ЗАЗ Сенс прекрасно зарекомендовал себя и как разъездная машина.`
  },
  {
    id: "3",
    img: "https://i.infocar.ua/i/12/1100/1400x936.jpg",
    name: "ЗАЗ Forza",
    motor: "1.5i 16v",
    motorType: "ДВС",
    gas: "Бензин",
    power: "109 л.с.",
    maxSpeed: "160 км/ч",
    shortDescr:
      "Локализованная для Украины версия переднеприводного лифтбека Chery A13. Дебют модели, пришедшей на смену ЗАЗ-1103 Славута.",
    fullDescr: `ЗАЗ Forza (ЗАЗ Форца) – локализованная для Украины версия переднеприводного лифтбека Chery A13. Дебют модели, пришедшей на смену ЗАЗ-1103 Славута. Модель Forza была представлена 17 февраля на Запорожском автомобильном заводе.
  
      Внешний облик Форца создавался дизайнерами итальянского ателье Torino Design. За ходовую часть китайские специалисты отвечали сами, оснастив автомобиль стойками McPherson на поперечных рычагах с гидравлическими телескопическими амортизаторами спереди и закручивающейся балкой - сзади. Лифтбек, при этом, на 13 см длиннее хэтчбека (4269 мм).
      
      Forza предлагается в трех комплектациях. В Base присутствует кондиционер, стеклоподъемники с электроприводом, сигнализация, иммобилайзер, одна фронтальная подушка безопасности для водителя и датчик межсервисного интервала. Гидроусилитель руля есть во всех комплектациях, равно как и передние дисковые тормоза, и барабанные задние. В более дорогих версиях - Comfort и Luxury - на Форца устанавливается антиблокировочная система с распределением тормозных усилий, задний парктроник, электроподогрев зеркал и передних сидений, MP3-плеер и легкосплавные колесные диски 185/60R15.
      
      Силовой агрегат у ЗАЗ Форца один - рядный 4-цилиндровый бензиновый мотор объемом 1,5 литра. Агрегатируется он с 5-ступенчатой механической коробкой передач, развивая 109 л. с. мощности (80 кВт). На 100 км пути в смешанном цикле лифтбек израсходует 7,2 литра, а максимальная скорость Форца - 160 км/час. По нормам токсичности автомобиль соответствует стандарту Евро-4.
      
      Производство комплектующих для ЗАЗ Forza разделено между Украиной и Китаем примерно поровну. В Китае изготавливают кузовные панели, а в Украине - обивку сидений, приборную панель, сиденья, бензобак, бамперы, и выхлопную систему. Сборка двигателя ACTECO SQR477F налажена на заводе МеМЗ в Мелитополе.  `
  },
  {
    id: "4",
    img: "https://i.infocar.ua/i/12/149/1400x936.jpg",
    name: "ЗАЗ Lanos T150",
    motor: "1.5i",
    motorType: "ДВС",
    gas: "Бензин",
    power: "86 л.с.",
    maxSpeed: "172 км/ч",
    shortDescr:
      "Седан B-класса с механической коробкой передач, 1,5-литровым двигателем мощностью 86 л.с.",
    fullDescr: `ЗАЗ Ланос T150 (ZAZ Lanos T150) - седан B-класса с механической коробкой передач, 1,5-литровым двигателем мощностью 86 л.с., подушкой безопасности водителя, аудиоподготовкой и обогревом заднего стекла отличает высокая надежность и развитая система пассивной безопасности: усиленные передние и задние стойки кузова, соединенные по крыше четырьмя прочными стяжками, балки безопасности из стальных труб, которые устанавливаются в передних и задних дверях и под лобовым стеклом, конструкция кузова с жесткой пассажирской ячейкой.
  
      Ланос T150 – простое и элегантное решение для тех, кому нужен надежный автомобиль без излишеств, при этом удобный и функциональный. Это автомобиль, в котором есть все самое необходимое и нет ничего лишнего. От вас потребуется только вовремя наполнять бензобак и заливать воду в бачок омывателя, а также проходить техобслуживание. Да, и еще – неплохо хотя бы раз в несколько месяцев проверять давление в шинах.
      
      Ланос T150 (Lanos T150) создан для того, чтобы приносить Вам радость. Дизайн, который не перестает радовать взгляд. Ходовые качества, которые пробуждают в вас тягу к активному вождению. Обширный набор стандартного оборудования, который создает комфорт и уют.
      
      В салоне автомобиля Ланос T150 и компактный водитель будет чувствовать себя комфортно. Объем багажного отделения составляет 322 л., а задние сиденья автомобиля складываются в пропорции 60:40, тем самым можно увеличить багажник до 958 л.
      
      На российском авторынке автомобиль ЗАЗ Ланос T150 продается под торговой маркой Chevrolet Lanos и ЗАЗ Chance.`
  }
];

export default cars;