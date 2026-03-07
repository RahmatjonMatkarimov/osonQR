const fs = require('fs');

const seoUz = {
  wifi: {
    title: "Bepul WiFi QR Kod Generatori | Tezkor Ulanish",
    description: "Bepul WiFi QR kod generatori orqali tarmog'ingiz uchun QR kod yarating. Mehmonlar parol yozmasdan, shunchaki kodni skanerlash orqali internetga ulanishadi.",
    h1: "Bepul WiFi QR Kod Generatori",
    intro: "Uzoq va murakkab WiFi parollarini har safar aytib berishdan charchadingizmi? Ushbu bepul WiFi QR kod generatori yordamida tarmog'ingiz uchun maxsus QR kod yaratishingiz mumkin. Mehmonlaringiz telefon kamerasini yo'naltirish orqali internetga bir soniyada, parolsiz ulanish imkoniga ega bo'ladilar. Hech qanday ro'yxatdan o'tish yoki to'lov talab qilinmaydi.",
    h2_1: "WiFi QR Kod o'zi nima?",
    p_1: "WiFi QR kod — bu simsiz tarmoq ma'lumotlarini (tarmoq nomi, paroli va himoya turi) o'zida jamlagan maxsus tasvirdir. Zamonaviy smartfonlar bilan bu kodni skaner qilganda, tizim avtomatik ravishda parolni o'qib oladi va foydalanuvchini WiFi tarmog'iga ulaydi. Bu orqali xato parol terish yoki maxfiylikni yo'qotish kabi muammolar bartaraf etiladi.",
    h2_2: "WiFi QR Kod qanday yaratiladi (qadam-ba-qadam)",
    step_1: "Tarmoq nomini (SSID) kiriting: Routeringizda qanday nom yozilgan bo'lsa, xuddi shunday kiriting.",
    step_2: "Parolni yozing: WiFi tarmog'ingizning parolini xatosiz kiriting.",
    step_3: "Shifrlash (Encryption) turini tanlang: Standart xavfsizlik uchun WPA/WPA2/WPA3 tanlanadi. Agar tarmoq ochiq bo'lsa, \"Yo'q\" (None) tugmasini bosing.",
    step_4: "Moslashtirish va Yuklab olish: O'zingizga yoqqan darajaga kelguncha ranglarni o'zgartiring va tayyor kodni PNG yoxud SVG formatida yuklab oling.",
    h2_3: "WiFi QR Kodlardan foydalanishning afzalliklari",
    ben_1: "Soniya ichida ulanish: Xaridorlar yoki mehmonlar parolni qo'lda kiritib o'tirmaydilar.",
    ben_2: "Xavfsizlikni oshirish: Maxfiy parolingizni hammaga ovoz chiqarib aytishdan saqlanasiz.",
    ben_3: "Dasturlarsiz ishlaydi: iOS va Android telefonlarining asosiy kamerasi QR kodni to'g'ridan-to'g'ri o'qiy oladi.",
    h2_4: "WiFi QR Kodlar qayerlarda qo'llaniladi?",
    p_4: "Odamlar ko'p tashrif buyuradigan joylar, xususan: restoran, qahvaxona, mehmonxona, klinika va zamonaviy ofislar uchun eng yaxshi yechim hisoblanadi. Shuningdek, uyga mehmon kelganida ularga xizmat ko'rsatish sifatini oshirish uchun ham WiFi QR kod chop etib qo'yish juda qulaydir.",
    h2_5: "Ko'p beriladigan savollar (FAQ)",
    faq_q1: "Bu generator mutlaqo bepulmi?",
    faq_a1: "Ha, bizning vositamizdan foydalanish 100% bepul.",
    faq_q2: "Yaratilgan QR kod ishlashdan to'xtab qoladimi?",
    faq_a2: "Yo'q. Qachonki siz WiFi paroli yoki nomini o'zgartirsangizгина bu kod yaroqsiz bo'lib qoladi, boshqa vaqt bir umr ishlaydi.",
    faq_q3: "iPhone va Android qurilmalari buni qo'llab-quvvatlaydimi?",
    faq_a3: "Ha, barcha so'nggi rusumdagi smartfonlarda ulanish qo'llab-quvvatlanadi.",
    faq_q4: "Mening parolim saqlab qolinmaydimi?",
    faq_a4: "Aslo! Biz ma'lumotlarni serverlarimizga yubormaymiz, jarayon faqat sizning brauzeringizda amalga oshadi.",
    faq_q5: "Yashirin (Hidden) tarmoqlar uchun kod ishlatsa bo'ladimi?",
    faq_a5: "Ha, shakldagi \"Yashirin tarmoq\" tugmasini bosish orqali buni amalga oshirish mumkin."
  }
};

const seoRu = {
  wifi: {
    title: "Бесплатный Генератор QR-Кода WiFi | Вход Без Пароля",
    description: "Создайте бесплатный QR-код для вашей WiFi сети. Позвольте клиентам и гостям подключаться к интернету мгновенно без ручного ввода пароля. Безопасно и быстро!",
    h1: "Бесплатный Генератор QR-кода WiFi",
    intro: "Устали диктовать сложные пароли от Wi-Fi каждому гостю? С помощью нашего бесплатного генератора QR-кода Wi-Fi вы позволите вашим клиентам или друзьям наслаждаться мгновенным доступом в интернет. Достаточно один раз указать настройки сети, и клиенты смогут подключаться с помощью камеры своего телефона, забыв про долгий ввод букв и цифр.",
    h2_1: "Что такое QR-код для WiFi?",
    p_1: "QR-код для WiFi — это двумерный штрих-код, в котором надежно зашифрованы данные вашей беспроводной сети: еë название (SSID), пароль и метод шифрования. Любой современный смартфон способен прочитать данный код и автоматически передать данные системе телефона для бесшовного подключения.",
    h2_2: "Как сгенерировать QR-код для WiFi (шаг за шагом)",
    step_1: "SSID (Имя сети): Введите точное название вашей Wi-Fi сети.",
    step_2: "Пароль: Аккуратно введите ваш текущий пароль.",
    step_3: "Шифрование: По умолчанию выберите WPA/WPA2 (используется в 99% роутеров). Если пароля нет, выберите \"Нет\" (None).",
    step_4: "Дизайн и Скачивание: При желании измените цвета под свой бренд и нажмите \"Скачать\" в формате PNG или SVG.",
    h2_3: "Преимущества использования WiFi QR-кодов",
    ben_1: "Никаких опечаток: Избавляет пользователей от раздражающих ошибок при вводе пароля.",
    ben_2: "Приватность: Ограничьте голосовое разглашение вашего секретного пароля.",
    ben_3: "Скорость: Процесс подключения занимает меньше одной секунды.",
    h2_4: "Где чаще всего применяют WiFi QR-коды?",
    p_4: "Это незаменимый инструмент для сферы услуг: кофеен, баров, отелей, медицинских центров и офисов open-space. Вы можете распечатать сгенерированный код, поставить его на столики или разместить на стойке регистрации (reception), чтобы проявить современную заботу о клиентах.",
    h2_5: "Часто задаваемые вопросы (FAQ)",
    faq_q1: "Бесплатен ли этот инструмент?",
    faq_a1: "Да, создание QR-кодов на нашем сайте полностью бесплатно и без лимитов.",
    faq_q2: "Есть ли у моего QR-кода истечение срока действия?",
    faq_a2: "Нет, мы генерируем статические коды. Они будут работать до тех пор, пока вы сами не смените пароль на своем роутере.",
    faq_q3: "Сохраняете ли вы мой пароль на сервере?",
    faq_a3: "Категорически нет. Из соображений безопасности генерация происходит полностью в вашем браузере.",
    faq_q4: "Поддерживают ли все смартфоны эту функцию?",
    faq_a4: "Да, большинство устройств Android и iOS (Apple) поддерживают сканирование Wi-Fi кодов прямо из встроенной камеры.",
    faq_q5: "Можно ли создать код для скрытой сети?",
    faq_a5: "Да, просто поставьте галочку \"Скрытая Сеть\" при заполнении формы."
  }
};

const seoEn = {
  wifi: {
    title: "Free WiFi QR Code Generator | Auto Connect Tool",
    description: "Generate a free WiFi QR Code instantly. Let your guests and customers connect to your wireless network seamlessly by scanning without typing complex passwords.",
    h1: "Free WiFi QR Code Generator",
    intro: "Tired of spelling out your complex Wi-Fi password for every guest? With our free WiFi QR Code Generator, you can create a simple, scannable QR code for your home or business network. Provide an excellent user experience by letting your visitors connect to the internet in a single scan using their smartphone camera, skipping the manual typing altogether.",
    h2_1: "What is a WiFi QR Code?",
    p_1: "A WiFi QR code is a matrix barcode format that stores essential wireless network details—such as the Service Set Identifier (SSID), network password, and encryption protocol. When a smartphone camera reads this code, the smartphone's operating system natively processes the credentials and automatically joins the network.",
    h2_2: "How to Generate a WiFi QR Code (Step-by-Step)",
    step_1: "Network Name (SSID): Accurately type the name of your router's wireless network.",
    step_2: "Password: Enter the password used to access your internet.",
    step_3: "Encryption: Select your security protocol (WPA/WPA2/WPA3 is the most common). For open public networks, select \"None\".",
    step_4: "Style and Download: Use our customization options to tailor colors to your brand, then instantly download high-resolution PNG or SVG files.",
    h2_3: "Benefits of using WiFi QR Codes",
    ben_1: "Zero Errors: Eliminates typos and connection frustrations for guests.",
    ben_2: "Maintains Privacy: Avoid writing your sensitive Wi-Fi password on public chalkboards or papers.",
    ben_3: "High Compatibility: Works natively with iOS and Android camera apps, removing the need to download clunky third-party scanners.",
    h2_4: "Where WiFi QR Codes are Used",
    p_4: "This technology thrives in hospitality and commercial environments. Coffee shops, restaurants, hotel lobbies, medical waiting rooms, and co-working spaces utilize WiFi QR codes to streamline internet connectivity. It's equally perfect for home usage to welcome visiting friends gracefully.",
    h2_5: "FAQ",
    faq_q1: "Is this WiFi QR code generator free?",
    faq_a1: "Yes, generating a WiFi QR code on our platform is completely free and unrestricted.",
    faq_q2: "Does the generated QR code expire?",
    faq_a2: "No. Static QR codes do not expire. They will remain fully functional until you decide to change your router's actual name or password.",
    faq_q3: "Do you collect or save my Wi-Fi password?",
    faq_a3: "Absolutely not. For maximum security, code generation happens locally inside your browser. We never send or log your credentials on our servers.",
    faq_q4: "Do I need a special app to scan the code?",
    faq_a4: "No. Both modern Apple iOS and Android smartphones support direct WiFi QR code scanning through their default camera applications.",
    faq_q5: "Does it work for hidden networks?",
    faq_a5: "Yes, you just need to check the \"Hidden Network\" option in our form, and the generator will configure the barcode properly."
  }
};

let content = fs.readFileSync('src/i18n.js', 'utf8');

// Use regex to inject seo into en, uz, ru
content = content.replace(/forms:\s*\{[\s\S]*?\}/g, (match) => {
  return match + ',\n        seo: null';
});

content = content.replace('seo: null', 'seo: ' + JSON.stringify(seoEn, null, 8));
content = content.replace('seo: null', 'seo: ' + JSON.stringify(seoUz, null, 8));
content = content.replace('seo: null', 'seo: ' + JSON.stringify(seoRu, null, 8));

fs.writeFileSync('src/i18n.js', content, 'utf8');
