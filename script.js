// Данные о достижениях с категориями и редкостью
const achievementsData = {
    // Технические достижения
    1: {
        title: "Первый релиз",
        description: "Успешно запустил первое мобильное приложение в App Store и Google Play. Приложение получило более 10,000 загрузок в первую неделю.",
        category: "technical",
        rarity: "epic"
    },
    2: {
        title: "Архитектурный мастер",
        description: "Спроектировал и реализовал масштабируемую архитектуру приложения, которая выдержала нагрузку в 100,000+ пользователей одновременно.",
        category: "technical",
        rarity: "legendary"
    },
    3: {
        title: "Инноватор UX",
        description: "Создал революционный пользовательский интерфейс, который увеличил время сессии пользователей на 40% и получил награду 'Лучший UX дизайн'.",
        category: "technical",
        rarity: "epic"
    },
    4: {
        title: "Оптимизатор производительности",
        description: "Оптимизировал производительность приложения, сократив время загрузки на 60% и потребление батареи на 30%.",
        category: "technical",
        rarity: "rare"
    },
    6: {
        title: "Дизайн-система",
        description: "Создала комплексную дизайн-систему для мобильного приложения, которая ускорила разработку новых экранов в 3 раза.",
        category: "technical",
        rarity: "rare"
    },
    7: {
        title: "Анимации и микроинтерракции",
        description: "Разработала уникальные анимации и микроинтерракции, которые сделали приложение более живым и привлекательным для пользователей.",
        category: "technical",
        rarity: "rare"
    },
    8: {
        title: "Адаптивный дизайн",
        description: "Создала адаптивный дизайн, который идеально работает на всех размерах экранов от 4 до 7 дюймов.",
        category: "technical",
        rarity: "rare"
    },
    9: {
        title: "Backend архитектор",
        description: "Спроектировал и реализовал высокопроизводительный backend, который обрабатывает 1M+ запросов в день с откликом менее 100ms.",
        category: "technical",
        rarity: "rare"
    },
    10: {
        title: "Система аналитики",
        description: "Внедрил комплексную систему аналитики и A/B тестирования, которая помогла увеличить конверсию на 25%.",
        category: "technical",
        rarity: "rare"
    },
    11: {
        title: "Безопасность данных",
        description: "Реализовал многоуровневую систему безопасности, включая шифрование данных и защиту от атак, получив сертификат ISO 27001.",
        category: "technical",
        rarity: "rare"
    },
    12: {
        title: "Микросервисная архитектура",
        description: "Перевел монолитное приложение на микросервисную архитектуру, что повысило надежность и масштабируемость системы.",
        category: "technical",
        rarity: "rare"
    },
    13: {
        title: "CI/CD пайплайн",
        description: "Настроил автоматизированный пайплайн развертывания, который сократил время релиза с 2 дней до 2 часов.",
        category: "technical",
        rarity: "rare"
    },
    14: {
        title: "Мониторинг и алерты",
        description: "Внедрил систему мониторинга в реальном времени с умными алертами, что снизило время реакции на проблемы на 80%.",
        category: "technical",
        rarity: "rare"
    },
    15: {
        title: "Тестирование качества",
        description: "Создала комплексную систему тестирования, которая повысила качество кода на 60% и снизила количество багов на 70%.",
        category: "technical",
        rarity: "rare"
    },
    16: {
        title: "Автоматизация тестов",
        description: "Настроила автоматизированное тестирование, которое сократило время проверки релизов с 4 часов до 30 минут.",
        category: "technical",
        rarity: "rare"
    },
    17: {
        title: "Пользовательские сценарии",
        description: "Разработала детальные пользовательские сценарии, которые помогли улучшить UX и увеличить конверсию на 35%.",
        category: "technical",
        rarity: "rare"
    },
    18: {
        title: "Кроссбраузерная совместимость",
        description: "Обеспечила полную совместимость приложения со всеми популярными браузерами и устройствами.",
        category: "technical",
        rarity: "rare"
    },
    19: {
        title: "Документация API",
        description: "Создала подробную документацию API, которая ускорила интеграцию с внешними сервисами в 3 раза.",
        category: "technical",
        rarity: "rare"
    },
    20: {
        title: "DevOps инженер",
        description: "Настроил инфраструктуру для автоматического развертывания и мониторинга приложения в облаке.",
        category: "technical",
        rarity: "rare"
    },
    21: {
        title: "Контейнеризация",
        description: "Внедрил Docker и Kubernetes для масштабируемого развертывания приложения.",
        category: "process",
        rarity: "rare"
    },
    22: {
        title: "Безопасность инфраструктуры",
        description: "Реализовал многоуровневую систему безопасности для защиты инфраструктуры от атак.",
        category: "technical",
        rarity: "rare"
    },
    23: {
        title: "Продукт-менеджер",
        description: "Управляла разработкой продукта от идеи до релиза, увеличив пользовательскую базу на 200%.",
        category: "technical",
        rarity: "rare"
    },
    24: {
        title: "Аналитика продуктов",
        description: "Внедрила систему аналитики, которая помогла принять ключевые решения по развитию продукта.",
        category: "technical",
        rarity: "rare"
    },
    25: {
        title: "Пользовательские исследования",
        description: "Провела 50+ интервью с пользователями, что привело к кардинальному улучшению UX.",
        category: "technical",
        rarity: "rare"
    },
    26: {
        title: "A/B тестирование",
        description: "Настроила систему A/B тестирования, которая помогла оптимизировать ключевые метрики продукта.",
        category: "technical",
        rarity: "rare"
    },
    27: {
        title: "Конкурентный анализ",
        description: "Провела глубокий анализ конкурентов и выявила уникальные возможности для продукта.",
        category: "technical",
        rarity: "rare"
    },
    28: {
        title: "Roadmap планирование",
        description: "Создала детальный roadmap развития продукта на 2 года вперед.",
        category: "technical",
        rarity: "rare"
    },
    29: {
        title: "Команда разработки",
        description: "Сформировала и управляла командой из 8 разработчиков, обеспечив высокую производительность.",
        category: "technical",
        rarity: "rare"
    },
    30: {
        title: "QA инженер",
        description: "Создал комплексную систему тестирования, которая выявила 95% багов до релиза.",
        category: "technical",
        rarity: "rare"
    },
    31: {
        title: "Автоматизация тестирования",
        description: "Написал 200+ автоматических тестов, которые покрывают 80% функциональности приложения.",
        category: "technical",
        rarity: "rare"
    },
    32: {
        title: "Тестирование производительности",
        description: "Провел нагрузочное тестирование, которое выявило узкие места и помогло оптимизировать производительность.",
        category: "technical",
        rarity: "rare"
    },
    33: {
        title: "Мобильное тестирование",
        description: "Создал стратегию тестирования на 20+ различных устройствах и операционных системах.",
        category: "technical",
        rarity: "rare"
    },
    34: {
        title: "UI/UX дизайнер",
        description: "Создала интуитивный и привлекательный дизайн, который получил награду 'Лучший мобильный дизайн'.",
        category: "technical",
        rarity: "rare"
    },
    35: {
        title: "Дизайн-система",
        description: "Разработала комплексную дизайн-систему, которая обеспечила консистентность во всем приложении.",
        category: "technical",
        rarity: "rare"
    },
    36: {
        title: "Прототипирование",
        description: "Создала интерактивные прототипы, которые ускорили процесс утверждения дизайна в 2 раза.",
        category: "technical",
        rarity: "rare"
    },
    37: {
        title: "Лидерство в проекте",
        description: "Возглавил критический проект и успел к сроку без снижения качества.",
        category: "technical",
        rarity: "rare"
    },
    38: {
        title: "Оптимизация затрат",
        description: "Сократил инфраструктурные расходы на 25% благодаря оптимизации ресурсов.",
        category: "technical",
        rarity: "rare"
    },
    39: {
        title: "Повышение качества",
        description: "Внедрил дополнительные проверки качества, что снизило количество инцидентов на 40%.",
        category: "technical",
        rarity: "rare"
    },
    40: {
        title: "Наставничество",
        description: "Организовал серию внутренних воркшопов и обучил коллег новым практикам.",
        category: "technical",
        rarity: "rare"
    }
};

// Индивидуальные достижения пользователей с их статусами
const userAchievements = {
    1: { // Марина Селезнева
        1: { active: true },     // Первый релиз - активно
        2: { active: true },     // Архитектурный мастер - активно
        3: { active: false },    // Инноватор UX - неактивно
        4: { active: true },     // Оптимизатор производительности - активно
        5: { active: false },    // Ментор команды - неактивно
        34: { active: true },    // UI/UX дизайнер - активно
        36: { active: true }     // Прототипирование - активно
    },
    2: { // Павел Кривцов
        1: { active: true },     // Первый релиз - активно
        2: { active: true },     // Архитектурный мастер - активно
        4: { active: true },     // Оптимизатор производительности - активно
        16: { active: true },    // Автоматизация тестов - активно
        18: { active: true }     // Кроссбраузерная совместимость - активно
    },
    3: { // Тимур Медов
        6: { active: true },     // Дизайн-система - активно
        7: { active: false },    // Анимации и микроинтерракции - неактивно
        8: { active: true },     // Адаптивный дизайн - активно
        33: { active: false },   // Мобильное тестирование - неактивно
        34: { active: true }     // UI/UX дизайнер - активно
    },
    4: { // Никита Сахно
        6: { active: true },     // Дизайн-система - активно
        8: { active: true },     // Адаптивный дизайн - активно
        33: { active: false },   // Мобильное тестирование - неактивно
        34: { active: true },    // UI/UX дизайнер - активно
        36: { active: true }     // Прототипирование - активно
    },
    5: { // Никита Юрлов
        9: { active: true },     // Backend архитектор - активно
        11: { active: true },    // Безопасность данных - активно
        12: { active: true },    // Микросервисная архитектура - активно
        13: { active: false },   // CI/CD пайплайн - неактивно
        14: { active: true },    // Мониторинг и алерты - активно
        20: { active: false },   // DevOps инженер - неактивно
        21: { active: true }     // Контейнеризация - активно
    },
    6: { // Никита Михайлюк
        9: { active: true },     // Backend архитектор - активно
        11: { active: true },    // Безопасность данных - активно
        12: { active: true },    // Микросервисная архитектура - активно
        14: { active: true },    // Мониторинг и алерты - активно
        21: { active: true },    // Контейнеризация - активно
        22: { active: true }     // Безопасность инфраструктуры - активно
    },
    7: { // Екатерина Антипова
        15: { active: true },    // Тестирование качества - активно
        16: { active: true },    // Автоматизация тестов - активно
        30: { active: false },   // QA инженер - неактивно
        31: { active: true },    // Автоматизация тестирования - активно
        32: { active: true },    // Тестирование производительности - активно
        25: { active: true },    // Пользовательские исследования - активно
        26: { active: true }     // A/B тестирование - активно
    },
    8: { // Роман Безжонов
        15: { active: true },    // Тестирование качества - активно
        16: { active: true },    // Автоматизация тестов - активно
        30: { active: false },   // QA инженер - неактивно
        31: { active: true },    // Автоматизация тестирования - активно
        32: { active: true },    // Тестирование производительности - активно
        39: { active: true },    // Повышение качества - активно
        40: { active: false }    // Наставничество - неактивно
    }
};

// Вспомогательные данные по участникам (имя, роль, аватар)
const membersInfo = {
    1: { name: 'Марина Селезнева', role: 'iOS Developer', avatar: 'source/selezneva.jpg' },
    2: { name: 'Павел Кривцов', role: 'iOS Developer', avatar: 'source/krivcov.jpg' },
    3: { name: 'Тимур Медов', role: 'Android Developer', avatar: 'source/medov.jpg' },
    4: { name: 'Никита Сахно', role: 'Android Developer', avatar: 'source/sahno.jpg' },
    5: { name: 'Никита Юрлов', role: 'Backend Developer', avatar: 'source/yurlov.jpg' },
    6: { name: 'Никита Михайлюк', role: 'Backend Developer', avatar: 'source/mikhaylyuk.jpg' },
    7: { name: 'Екатерина Антипова', role: 'QA Engineer', avatar: 'source/antipova.jpeg' },
    8: { name: 'Роман Безжонов', role: 'QA Engineer', avatar: 'source/bezzhonov.jpg' }
};

// Функция для получения URL изображения достижения
function getAchievementImageUrl(achievementId) {
    // Константа для переключения между заглушкой и реальными изображениями
    const USE_PLACEHOLDER = true; // Поставьте false, когда загрузите реальные изображения
    
    if (USE_PLACEHOLDER) {
        return 'source/achievements/placeholder.svg';
    }
    
    // Когда загрузите реальные изображения:
    // 1. Поставьте USE_PLACEHOLDER = false
    // 2. Название файлов должно быть: achievement_1.png, achievement_2.jpg, и т.д.
    // 3. Выберите нужное расширение файла ниже:
    
    return `source/achievements/achievement_${achievementId}.png`; // Или .jpg, .jpeg, .svg
}

// Функция создания карточки достижения с индивидуальным статусом
function createAchievementCard(achievementId, achievement, userStatus) {
    const item = document.createElement('div');
    const isActive = userStatus && userStatus.active;
    const rarityClass = `rarity-${achievement.rarity}`;
    
    item.className = `achievement-card ${isActive ? 'achievement-card--active' : 'achievement-card--inactive'} ${rarityClass}`;
    item.setAttribute('data-achievement', String(achievementId));
    item.setAttribute('data-rarity', achievement.rarity);
    
    const imgUrl = getAchievementImageUrl(achievementId);
    
    item.innerHTML = `
        <div class="achievement-card__image">
            <img src="${imgUrl}" alt="${achievement.title}">
        </div>
        <div class="achievement-card__content">
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        </div>
    `;
    
    // Клик по карточке — открыть модалку (только для активных)
    if (isActive) {
        item.addEventListener('click', () => openMemberAchievementModal(achievementId, imgUrl));
    }
    
    return item;
}

// Рендер страницы участника (member.html)
function renderMemberPage() {
    const params = new URLSearchParams(window.location.search);
    const memberId = params.get('id');
    if (!memberId) return;

    const info = membersInfo[memberId];
    const userAchievementsList = userAchievements[memberId] || {};

    const headerEl = document.getElementById('memberHeader');
    const listEl = document.getElementById('memberAchievements');

    if (headerEl && info) {
        headerEl.innerHTML = `
            <div class="member-header">
                <div class="avatar"><img src="${info.avatar}" alt="${info.name}"></div>
                <div class="member-info">
                    <h2>${info.name}</h2>
                    <p class="role">${info.role}</p>
                </div>
            </div>
        `;
    }

    if (listEl) {
        listEl.innerHTML = '';
        
        // Разделяем достижения по категориям
        const technicalAchievements = [];
        const processAchievements = [];
        
        // Проходим по всем достижениям пользователя
        Object.keys(userAchievementsList).forEach((aid) => {
            const achievementId = parseInt(aid);
            const achievement = achievementsData[achievementId];
            if (!achievement) return;
            
            if (achievement.category === 'technical') {
                technicalAchievements.push(achievementId);
            } else if (achievement.category === 'process') {
                processAchievements.push(achievementId);
            }
        });
        
        // Технические достижения
        if (technicalAchievements.length > 0) {
            const techSection = document.createElement('div');
            techSection.className = 'achievement-category';
            techSection.innerHTML = '<h2 class="category-title">Технические достижения</h2>';
            
            technicalAchievements.forEach((aid) => {
                const achievement = achievementsData[aid];
                const userStatus = userAchievementsList[aid];
                const item = createAchievementCard(aid, achievement, userStatus);
                techSection.appendChild(item);
            });
            
            listEl.appendChild(techSection);
        }
        
        // Процессовые достижения
        if (processAchievements.length > 0) {
            const processSection = document.createElement('div');
            processSection.className = 'achievement-category';
            processSection.innerHTML = '<h2 class="category-title">Процессовые достижения</h2>';
            
            processAchievements.forEach((aid) => {
                const achievement = achievementsData[aid];
                const userStatus = userAchievementsList[aid];
                const item = createAchievementCard(aid, achievement, userStatus);
                processSection.appendChild(item);
            });
            
            listEl.appendChild(processSection);
        }
    }
}

function openMemberAchievementModal(achievementId, imgUrl) {
    const a = achievementsData[achievementId];
    if (!a) return;
    const modal = document.getElementById('memberAchievementModal');
    const modalImg = document.getElementById('memberModalImage');
    const modalTitle = document.getElementById('memberModalTitle');
    const modalDesc = document.getElementById('memberModalDescription');
    if (!modal || !modalImg || !modalTitle || !modalDesc) return;

    modalImg.src = imgUrl;
    modalImg.alt = a.title;
    
    // Получаем текст редкости и категории на русском
    const rarityText = {
        'common': 'Обычная',
        'rare': 'Редкая',
        'epic': 'Особая',
        'legendary': 'Легендарная'
    }[a.rarity] || 'Обычная';
    
    const categoryText = {
        'technical': 'Техническое',
        'process': 'Процессовое'
    }[a.category] || 'Техническое';
    
    // Обновляем заголовок с индикаторами под ним
    modalTitle.innerHTML = `
        <div class="modal-title-text">${a.title}</div>
        <div class="modal-rarity-indicator rarity-${a.rarity}">${rarityText}</div>
        <div class="modal-category-indicator">${categoryText} достижение</div>
    `;
    
    modalDesc.textContent = a.description;
    
    // Добавляем класс редкости к модальному окну для стилизации
    modal.className = `modal rarity-${a.rarity}`;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeMemberModal() {
    const modal = document.getElementById('memberAchievementModal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Если это index.html — ничего особого не делаем, ссылки уже в разметке
    // Если это member.html — отрисовать достижения
if (document.getElementById('memberPage')) {
        renderMemberPage();
        // Закрытие по клику вне контента
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('memberAchievementModal');
            if (event.target === modal) {
                closeMemberModal();
            }
        });
        // Закрытие по Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeMemberModal();
            }
        });
    }
});

// Функция для вычисления процента активных достижений
function calculateMemberProgress(memberId) {
    const userAchievementsList = userAchievements[memberId] || {};
    const achievementIds = Object.keys(userAchievementsList);
    if (achievementIds.length === 0) return 0;
    
    const activeCount = achievementIds.filter(id => {
        const userStatus = userAchievementsList[id];
        return userStatus && userStatus.active;
    }).length;
    
    return Math.round((activeCount / achievementIds.length) * 100);
}

// Функция для обновления прогресс-баров на главной странице
function updateProgressBars() {
    for (let memberId = 1; memberId <= 8; memberId++) {
        const progress = calculateMemberProgress(memberId);
        const progressFill = document.querySelector(`[data-member-id="${memberId}"].progress-fill`);
        const progressText = document.querySelector(`[data-member-id="${memberId}"].progress-text`);
        
        if (progressFill && progressText) {
            // Отложим анимацию для плавного эффекта
            setTimeout(() => {
                progressFill.style.width = `${progress}%`;
                progressText.textContent = `${progress}%`;
            }, memberId * 100); // Последовательная анимация
        }
    }
}

// Анимация появления карточек при загрузке (главная страница)
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    if (teamMembers.length > 0) {
        teamMembers.forEach((member, index) => {
            member.style.opacity = '0';
            member.style.transform = 'translateY(30px)';
            setTimeout(() => {
                member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                member.style.opacity = '1';
                member.style.transform = 'translateY(0)';
            }, index * 200);
        });
        
        // Обновляем прогресс-бары после загрузки карточек
        setTimeout(updateProgressBars, 800);
    }
});
