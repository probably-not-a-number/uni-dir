const referenceLanguage = "en";
const languages = ["en", "ru"];
const resources = [{ "type": "Resource", "languageTag": { "type": "LanguageTag", "name": "en" }, "body": [{ "type": "Message", "metadata": { "keyName": "directus_load" }, "id": { "type": "Identifier", "name": "directus_load" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Directus is loading, please wait..." }] } }, { "type": "Message", "metadata": { "keyName": "directus_failed" }, "id": { "type": "Identifier", "name": "directus_failed" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Directus is not connected" }] } }, { "type": "Message", "metadata": { "keyName": "error.header" }, "id": { "type": "Identifier", "name": "error.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "An error occurred!" }] } }, { "type": "Message", "metadata": { "keyName": "error.text" }, "id": { "type": "Identifier", "name": "error.text" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Back to home page" }] } }, { "type": "Message", "metadata": { "keyName": "form.name" }, "id": { "type": "Identifier", "name": "form.name" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Name" }] } }, { "type": "Message", "metadata": { "keyName": "form.email" }, "id": { "type": "Identifier", "name": "form.email" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Email" }] } }, { "type": "Message", "metadata": { "keyName": "form.phone" }, "id": { "type": "Identifier", "name": "form.phone" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Phone" }] } }, { "type": "Message", "metadata": { "keyName": "form.address" }, "id": { "type": "Identifier", "name": "form.address" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Address" }] } }, { "type": "Message", "metadata": { "keyName": "form.comment" }, "id": { "type": "Identifier", "name": "form.comment" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Comment" }] } }, { "type": "Message", "metadata": { "keyName": "form.submit" }, "id": { "type": "Identifier", "name": "form.submit" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Submit" }] } }, { "type": "Message", "metadata": { "keyName": "toast.success" }, "id": { "type": "Identifier", "name": "toast.success" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Sent!" }] } }, { "type": "Message", "metadata": { "keyName": "toast.loading" }, "id": { "type": "Identifier", "name": "toast.loading" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Loading..." }] } }, { "type": "Message", "metadata": { "keyName": "toast.error" }, "id": { "type": "Identifier", "name": "toast.error" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Error: something went wrong!" }] } }, { "type": "Message", "metadata": { "keyName": "nav.home" }, "id": { "type": "Identifier", "name": "nav.home" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Home" }] } }, { "type": "Message", "metadata": { "keyName": "nav.menu" }, "id": { "type": "Identifier", "name": "nav.menu" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Menu" }] } }, { "type": "Message", "metadata": { "keyName": "nav.reviews" }, "id": { "type": "Identifier", "name": "nav.reviews" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Reviews" }] } }, { "type": "Message", "metadata": { "keyName": "nav.reserve" }, "id": { "type": "Identifier", "name": "nav.reserve" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Reserve" }] } }, { "type": "Message", "metadata": { "keyName": "home.header" }, "id": { "type": "Identifier", "name": "home.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Welcome to The Gusteau's restaurant" }] } }, { "type": "Message", "metadata": { "keyName": "home.text" }, "id": { "type": "Identifier", "name": "home.text" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Known as the last bastion in London of classically rich French haute cuisine, Gustau's restaurant has become a London institution, internationally recognised for its culinary excellence and unparalleled attention to detail.It was the first UK restaurant to be awarded one, two, and then three Michelin Stars, and was the first Michelin-rated restaurant to offer a set-price lunch.\n\n When it opened over 50 years ago, London’s dining scene was almost non-existent on a global scale. Today, London is an industry leader, a melting pot of culinary talents and international gastronomy – influenced in no small part by Gustau's restaurant, which has encouraged discerning dining and attracted internationally renowned chefs to its kitchen.\n\nGustau's restaurant maintains the very highest of standards, with a sense of unremitting concentration and effortless attention to the needs of the clients, who are immediately made to feel at home by the team." }] } }, { "type": "Message", "metadata": { "keyName": "home.contacts.header" }, "id": { "type": "Identifier", "name": "home.contacts.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Contacts" }] } }, { "type": "Message", "metadata": { "keyName": "home.contacts.text" }, "id": { "type": "Identifier", "name": "home.contacts.text" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Hours \nTuesday–Saturday \n5pm–10pm \n\n43 Upper Brook Street \nLondon W1K 7QR." }] } }, { "type": "Message", "metadata": { "keyName": "menu.add" }, "id": { "type": "Identifier", "name": "menu.add" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Add" }] } }, { "type": "Message", "metadata": { "keyName": "menu.sum" }, "id": { "type": "Identifier", "name": "menu.sum" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Sum: " }] } }, { "type": "Message", "metadata": { "keyName": "menu.currency" }, "id": { "type": "Identifier", "name": "menu.currency" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "rub" }] } }, { "type": "Message", "metadata": { "keyName": "menu.chechkout" }, "id": { "type": "Identifier", "name": "menu.chechkout" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Checkout" }] } }, { "type": "Message", "metadata": { "keyName": "menu.order.title" }, "id": { "type": "Identifier", "name": "menu.order.title" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Title" }] } }, { "type": "Message", "metadata": { "keyName": "menu.order.price" }, "id": { "type": "Identifier", "name": "menu.order.price" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Price" }] } }, { "type": "Message", "metadata": { "keyName": "menu.order.subtotal" }, "id": { "type": "Identifier", "name": "menu.order.subtotal" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Total" }] } }, { "type": "Message", "metadata": { "keyName": "menu.order.total" }, "id": { "type": "Identifier", "name": "menu.order.total" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Total" }] } }, { "type": "Message", "metadata": { "keyName": "reserve.header" }, "id": { "type": "Identifier", "name": "reserve.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Book a table" }] } }, { "type": "Message", "metadata": { "keyName": "reserve.date" }, "id": { "type": "Identifier", "name": "reserve.date" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Date" }] } }, { "type": "Message", "metadata": { "keyName": "reserve.time" }, "id": { "type": "Identifier", "name": "reserve.time" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Time" }] } }, { "type": "Message", "metadata": { "keyName": "reserve.people" }, "id": { "type": "Identifier", "name": "reserve.people" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Number of people" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.header" }, "id": { "type": "Identifier", "name": "reviews.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Leave a feedback" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.last_reviews" }, "id": { "type": "Identifier", "name": "reviews.last_reviews" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Last reviews" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.no_reviews" }, "id": { "type": "Identifier", "name": "reviews.no_reviews" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "No reviews" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating.header" }, "id": { "type": "Identifier", "name": "reviews.rating.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Rating" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating1" }, "id": { "type": "Identifier", "name": "reviews.rating1" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Very poor" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating2" }, "id": { "type": "Identifier", "name": "reviews.rating2" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Dissatisfied" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating3" }, "id": { "type": "Identifier", "name": "reviews.rating3" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Average" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating4" }, "id": { "type": "Identifier", "name": "reviews.rating4" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Good" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating5" }, "id": { "type": "Identifier", "name": "reviews.rating5" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Excellent" }] } }] }, { "type": "Resource", "languageTag": { "type": "LanguageTag", "name": "ru" }, "body": [{ "type": "Message", "metadata": { "keyName": "directus_load" }, "id": { "type": "Identifier", "name": "directus_load" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Directus загружается, пожалуйста, подождите..." }] } }, { "type": "Message", "metadata": { "keyName": "directus_failed" }, "id": { "type": "Identifier", "name": "directus_failed" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Directus не подключен" }] } }, { "type": "Message", "metadata": { "keyName": "error.header" }, "id": { "type": "Identifier", "name": "error.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Прозошла ошибка!" }] } }, { "type": "Message", "metadata": { "keyName": "error.text" }, "id": { "type": "Identifier", "name": "error.text" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Вернуться на главную страницу" }] } }, { "type": "Message", "metadata": { "keyName": "form.name" }, "id": { "type": "Identifier", "name": "form.name" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Имя" }] } }, { "type": "Message", "metadata": { "keyName": "form.email" }, "id": { "type": "Identifier", "name": "form.email" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Почта" }] } }, { "type": "Message", "metadata": { "keyName": "form.phone" }, "id": { "type": "Identifier", "name": "form.phone" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Телефон" }] } }, { "type": "Message", "metadata": { "keyName": "form.address" }, "id": { "type": "Identifier", "name": "form.address" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Адрес" }] } }, { "type": "Message", "metadata": { "keyName": "form.comment" }, "id": { "type": "Identifier", "name": "form.comment" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Комментарий" }] } }, { "type": "Message", "metadata": { "keyName": "form.submit" }, "id": { "type": "Identifier", "name": "form.submit" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Отправить" }] } }, { "type": "Message", "metadata": { "keyName": "toast.success" }, "id": { "type": "Identifier", "name": "toast.success" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Отправлено!" }] } }, { "type": "Message", "metadata": { "keyName": "toast.loading" }, "id": { "type": "Identifier", "name": "toast.loading" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Загрузка..." }] } }, { "type": "Message", "metadata": { "keyName": "toast.error" }, "id": { "type": "Identifier", "name": "toast.error" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Ошибка: что-то пошло не так!" }] } }, { "type": "Message", "metadata": { "keyName": "nav.home" }, "id": { "type": "Identifier", "name": "nav.home" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Главная" }] } }, { "type": "Message", "metadata": { "keyName": "nav.menu" }, "id": { "type": "Identifier", "name": "nav.menu" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Меню" }] } }, { "type": "Message", "metadata": { "keyName": "nav.reviews" }, "id": { "type": "Identifier", "name": "nav.reviews" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Отзывы" }] } }, { "type": "Message", "metadata": { "keyName": "nav.reserve" }, "id": { "type": "Identifier", "name": "nav.reserve" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Резервация" }] } }, { "type": "Message", "metadata": { "keyName": "home.header" }, "id": { "type": "Identifier", "name": "home.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Добро пожаловать в Gustau's" }] } }, { "type": "Message", "metadata": { "keyName": "home.text" }, "id": { "type": "Identifier", "name": "home.text" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Нарядный интерьер ресторана погружает во времена конца XVIII-начала XIX века, где днем свет сочится из больших окон в пол, создавая тень от узора, который повторяет историческую ограду Михайловского замка, а вечером теплое освещение создают люстры, оформленные цветами.\n\nЕжедневно с 11:00 до 15:00 в ресторане готовят завтраки. В утренние часы подают гурьевскую кашу с орехами, вареники с вишней и взбитой сметаной, яйца всмятку с красной икрой, круассаны и сырники. В основном меню также прослеживаются русско-французские мотивы: блины с икрой, оливье трех видов, паштет из печени индейки с вареньем из лесных ягод, холодец из говяжьих хвостов с хреном, борщ со смальцем. На десерт предлагают бланманже с маком, крем-брюле или наполеон.\n\nВ винной карте собрали в основном российские и французские наименования: игристые, розовые, оранжевые, белые и красные, а также шампань." }] } }, { "type": "Message", "metadata": { "keyName": "home.contacts.header" }, "id": { "type": "Identifier", "name": "home.contacts.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Контакты" }] } }, { "type": "Message", "metadata": { "keyName": "home.contacts.text" }, "id": { "type": "Identifier", "name": "home.contacts.text" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Часы работы: 11:00 - 23:00 \nАдрес: ул. Михайловская, 5\nТелефон: +7 (495) 123-45-67" }] } }, { "type": "Message", "metadata": { "keyName": "menu.add" }, "id": { "type": "Identifier", "name": "menu.add" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Добавить" }] } }, { "type": "Message", "metadata": { "keyName": "menu.sum" }, "id": { "type": "Identifier", "name": "menu.sum" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Сумма: " }] } }, { "type": "Message", "metadata": { "keyName": "menu.currency" }, "id": { "type": "Identifier", "name": "menu.currency" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "руб" }] } }, { "type": "Message", "metadata": { "keyName": "menu.chechkout" }, "id": { "type": "Identifier", "name": "menu.chechkout" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Подтверждение заказа" }] } }, { "type": "Message", "metadata": { "keyName": "menu.order.title" }, "id": { "type": "Identifier", "name": "menu.order.title" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Наименование" }] } }, { "type": "Message", "metadata": { "keyName": "menu.order.price" }, "id": { "type": "Identifier", "name": "menu.order.price" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Цена" }] } }, { "type": "Message", "metadata": { "keyName": "menu.order.subtotal" }, "id": { "type": "Identifier", "name": "menu.order.subtotal" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Стоимость" }] } }, { "type": "Message", "metadata": { "keyName": "menu.order.total" }, "id": { "type": "Identifier", "name": "menu.order.total" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Всего" }] } }, { "type": "Message", "metadata": { "keyName": "reserve.header" }, "id": { "type": "Identifier", "name": "reserve.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Резервация" }] } }, { "type": "Message", "metadata": { "keyName": "reserve.date" }, "id": { "type": "Identifier", "name": "reserve.date" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Дата" }] } }, { "type": "Message", "metadata": { "keyName": "reserve.time" }, "id": { "type": "Identifier", "name": "reserve.time" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Время" }] } }, { "type": "Message", "metadata": { "keyName": "reserve.people" }, "id": { "type": "Identifier", "name": "reserve.people" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Кол-во человек" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.header" }, "id": { "type": "Identifier", "name": "reviews.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Оставтить отзыв" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.last_reviews" }, "id": { "type": "Identifier", "name": "reviews.last_reviews" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Последние отзывы" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.no_reviews" }, "id": { "type": "Identifier", "name": "reviews.no_reviews" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Нет отзывов" }] } }, { "type": "Message", "metadata": { "keyName": "reveiw.rating.header" }, "id": { "type": "Identifier", "name": "reveiw.rating.header" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Оценка" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating1" }, "id": { "type": "Identifier", "name": "reviews.rating1" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Ужасно" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating2" }, "id": { "type": "Identifier", "name": "reviews.rating2" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Плохо" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating3" }, "id": { "type": "Identifier", "name": "reviews.rating3" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Нормально" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating4" }, "id": { "type": "Identifier", "name": "reviews.rating4" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Хорошо" }] } }, { "type": "Message", "metadata": { "keyName": "reviews.rating5" }, "id": { "type": "Identifier", "name": "reviews.rating5" }, "pattern": { "type": "Pattern", "elements": [{ "type": "Text", "value": "Отлично" }] } }] }];

export { languages, referenceLanguage, resources };
//# sourceMappingURL=_virtual_inlang-static-4b529d8e.js.map
