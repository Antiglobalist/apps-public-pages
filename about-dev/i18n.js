(() => {
'use strict';
const ru = {
  "Skip to content": "Перейти к содержимому",
  "Product developer": "Разработка продуктов",
  "Expertise": "Компетенции",
  "Selected work": "Проекты",
  "Approach": "Подход",
  "From idea": "От идеи",
  " to production.": "до запуска.",
  "to production.": "до запуска.",
  "Full-cycle product development — from backend architecture to mobile apps, integrations, and launch.": "Разработка продуктов с нуля: серверная архитектура, мобильные приложения, интеграции и запуск.",
  "Let’s talk": "Обсудим проект",
  "Explore the work": "Смотреть проекты",
  "10+ years of engineering experience": "Более 10 лет в разработке",
  "One partner for the whole product.": "Один разработчик — весь продукт.",
  "The whole product.": "Продукт целиком.",
  "Every layer considered.": "Продумана каждая деталь.",
  "I connect the engineering behind a product with the experience people use every day.": "Объединяю надёжную техническую основу с удобным интерфейсом, которым люди пользуются каждый день.",
  "Mobile & client apps": "Мобильные приложения",
  "Native experiences that feel at home on every screen, from the phone to the wrist.": "Нативные приложения для любого экрана — от смартфона до умных часов.",
  "Backend & integrations": "Сервер и интеграции",
  "The foundation that keeps your clients, data, and business logic working together.": "Надёжная основа, которая связывает приложения, данные и бизнес-логику.",
  "Backend services": "Серверные сервисы",
  "APIs": "API",
  "Telegram integrations": "Интеграции с Telegram",
  "Launch & monetization": "Запуск и монетизация",
  "Everything around the release, so a working app becomes a complete product.": "Всё необходимое для релиза, чтобы работающее приложение стало полноценным продуктом.",
  "App Store & Google Play listings": "Оформление App Store и Google Play",
  "Analytics setup & integration": "Настройка и интеграция аналитики",
  "In-app purchases & payments": "Встроенные покупки и платежи",
  "Engineering & quality": "Разработка и качество",
  "Architecture you can build on. Code you can maintain. A clear path forward for legacy systems.": "Архитектура с запасом на рост. Понятный код. Продуманное обновление существующих систем.",
  "Architecture": "Архитектура",
  "Automated testing": "Автотесты",
  "Modernization": "Модернизация",
  "Performance": "Производительность",
  "Selected projects": "Избранные проекты",
  "Public transport for Batumi, Kutaisi, and Zugdidi. See buses on the map in real time, check upcoming arrivals, and plan a trip.": "Общественный транспорт Батуми, Кутаиси и Зугдиди. Автобусы на карте в реальном времени, время прибытия на остановку и планирование поездок.",
  "Platforms": "Платформы",
  "Android, iOS & web": "Android, iOS и веб",
  "Visit the Geo Transit website": "Открыть сайт Geo Transit",
  "AI-assisted engineering": "Разработка с ИИ",
  "AI makes it faster.": "ИИ ускоряет работу.",
  "Engineering makes it": "Инженерный подход даёт",
  "reliable.": "надёжность.",
  "A practical workflow that combines the speed of AI agents with hands-on engineering, architecture, and quality control.": "Практический подход, который объединяет скорость ИИ-агентов с инженерным опытом, архитектурой и контролем качества.",
  "Faster delivery": "Быстрее к релизу",
  "Higher quality": "Выше качество",
  "Production-ready": "Готовность к запуску",
  "Requirements": "Требования",
  "Define the problem, constraints, and a clear target.": "Определяю задачу, ограничения и ожидаемый результат.",
  "AI agents": "ИИ-агенты",
  "Execute tasks with the right context, tools, and project rules.": "Агенты решают задачи с нужным контекстом, инструментами и правилами проекта.",
  "Engineering review": "Инженерная проверка",
  "Question the output. Review design, architecture, and code. Test the behavior.": "Проверяю результат, дизайн, архитектуру и код. Тестирую поведение.",
  "Production": "Запуск",
  "Integrate, validate, and release with care.": "Интегрирую, проверяю и выпускаю продукт.",
  "Engineer-led process": "Под контролем разработчика",
  "Practical expertise": "Практический опыт",
  "Context engineering": "Подготовка контекста",
  "AI agent workflows": "Работа с ИИ-агентами",
  "MCP integrations": "Интеграции MCP",
  "Prompt & project rules": "Промпты и правила проекта",
  "Output evaluation": "Оценка результатов",
  "Team adoption": "Внедрение в команде",
  "Tools in my workflow": "Инструменты в моей работе",
  "Experience": "Опыт",
  "A builder’s mindset.": "Мышление создателя.",
  "An engineer’s judgment.": "Точность инженера.",
  "From outsourcing to corporate products, across B2B, B2C, and internal applications. Experience as both a developer and a tech lead.": "От аутсорсинга до корпоративных продуктов: B2B, B2C и внутренние приложения. Опыт работы разработчиком и техническим руководителем.",
  "Full-cycle": "Полный цикл",
  "development": "разработки",
  "Games & real-time": "Игры и интерактивные",
  "3D experiences": "3D-проекты",
  "years in software": "лет в сфере",
  "years of remote": "лет удалённой",
  "collaboration": "работы",
  "Product architecture & UI foundations": "Архитектура продукта и основы интерфейса",
  "Refactoring & legacy modernization": "Рефакторинг и обновление старых систем",
  "Team hiring & technical collaboration": "Найм и техническое взаимодействие в команде",
  "Let’s build what’s next": "Создадим ваш следующий продукт",
  "Have a product": "Есть идея",
  "in mind?": "продукта?",
  "Let’s turn it into something real.": "Давайте воплотим её в жизнь.",
  "@anikapps on Telegram": "@anikapps в Telegram",
  "Backend": "Сервер",
  "Independent engineering. Complete products.": "Независимая разработка. Цельные продукты.",
  "Menu": "Меню",
  "Close": "Закрыть",
  "Open navigation": "Открыть меню",
  "Close navigation": "Закрыть меню",
  "Main navigation": "Основная навигация",
  "Antik Apps home": "Antik Apps — главная",
  "Reduce motion": "Уменьшить анимацию",
  "Reduced motion": "Анимация уменьшена",
  "Toggle page animations": "Переключить анимации страницы",
  "Reduced motion follows your system preference": "Анимация отключена в настройках системы",
  "One connected product: mobile apps, Wear OS, backend, analytics and payments": "Единый продукт: приложения, Wear OS, сервер, аналитика и платежи",
  "Pixel-style phone and round smartwatch on a glass podium, surrounded by product and backend panels": "Смартфон Pixel и круглые часы на стеклянном подиуме, окружённые карточками продукта и сервера",
  "Live map of buses and stops in Batumi on Android": "Карта Батуми с автобусами и остановками в приложении для Android",
  "Bus trip options in the journey planner on iPhone": "Варианты поездки на автобусе в планировщике маршрутов на iPhone",
  "AI-assisted development process": "Процесс разработки с ИИ"
};
const root = document.documentElement;
const translations = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
 const node = walker.currentNode;
 if (node.parentElement.closest('script,style,.menu-label,.motion-toggle,.language-switch')) continue;
 const key = node.nodeValue.trim();
 if (Object.hasOwn(ru, key)) translations.push({node, original:node.nodeValue, translated:node.nodeValue.replace(key,ru[key])});
}
const attributes=[];
for(const el of document.querySelectorAll('[aria-label],[alt],[title]')) {
 if(el.matches('.menu-toggle,.motion-toggle')) continue;
 for(const name of ['aria-label','alt','title']) {
 const value=el.getAttribute(name);
 if(Object.hasOwn(ru,value)) attributes.push({el,name,value});
 }
}
const description=document.querySelector('meta[name="description"]');
const englishDescription=description.content;
window.anikTranslate = (text) => root.lang === 'ru' ? (ru[text] || text) : text;
function setLanguage(language, persist=false) {
 root.lang=language === 'ru' ? 'ru' : 'en';
 const russian=root.lang==='ru';
 for(const item of translations) item.node.nodeValue=russian?item.translated:item.original;
 for(const item of attributes) item.el.setAttribute(item.name,russian?ru[item.value]:item.value);
 document.title=russian?'Antik Apps — От идеи до запуска':'Antik Apps — From idea to production';
 description.content=russian?'Antik Apps — разработка продуктов с нуля. Более 10 лет опыта: сервер, Android, iOS, Telegram, Wear OS, аналитика, платежи и запуск.':englishDescription;
 for(const button of document.querySelectorAll('[data-language]')) button.setAttribute('aria-pressed',String(button.dataset.language===root.lang));
 document.querySelector('.language-switch').setAttribute('aria-label',russian?'Язык сайта':'Website language');
 if(persist) {try {localStorage.setItem('anik-language',root.lang);} catch { /* Storage can be unavailable in private mode. */ }}
 document.dispatchEvent(new Event('anik-language-change'));
}
let language='en';
try {language=localStorage.getItem('anik-language')||'en';} catch {}
for(const button of document.querySelectorAll('[data-language]')) button.addEventListener('click',()=>setLanguage(button.dataset.language,true));
setLanguage(language);
})();
