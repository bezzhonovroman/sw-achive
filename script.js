// Данные о достижениях с категориями и редкостью
const achievementsData = {
    // Технические достижения
    1: {
        title: "Кодовой дождь",
        description: "Сделал больше 1000 строк добавлений за спринт.",
        category: "technical",
        rarity: "rare"
    },
    2: {
        title: "Чистильщик",
        description: "Удалил больше кода, чем добавил.",
        category: "technical",
        rarity: "epic"
    },
    3: {
        title: "Фабрика PR",
        description: "≥10 PR за спринт.",
        category: "technical",
        rarity: "legendary"
    },
    4: {
        title: "Феникс",
        description: "Удалил хотя бы один свой PR.",
        category: "technical",
        rarity: "common"
    },
    5: {
        title: "Глаз орла",
        description: "≥10 ревью за спринт.",
        category: "technical",
        rarity: "epic"
    },
    6: {
        title: "Наставник",
        description: "PR меньше, чем завел дискуссий.",
        category: "technical",
        rarity: "rare"
    },
    7: {
        title: "Балансир",
        description: "≥5 PR и ≥5 ревью.",
        category: "technical",
        rarity: "rare"
    },
    8: {
        title: "Неприкасаемый",
        description: "Прошел ревью технического моделирования с первого раза.",
        category: "technical",
        rarity: "legendary"
    },
    9: {
        title: "Победитель по жизни",
        description: "Попал в топ от Павла Аннина по итогам спринта 5 раз.",
        category: "technical",
        rarity: "legendary"
    },
    10: {
        title: "Баг-киллер",
        description: "Исправил ≥3 багов за спринт.",
        category: "technical",
        rarity: "epic"
    },
    11: {
        title: "100% краш",
        description: "Описал сценарий, при котором приложение стабильно падает, позволяя команде быстро воспроизвести и устранить проблему.",
        category: "technical",
        rarity: "rare"
    },
    12: {
        title: "Двойной агент",
        description: "Обнаружил баг или проблему в функционале, за который отвечает другая команда, и помог с её решением.",
        category: "technical",
        rarity: "rare"
    },
    13: {
        title: "Документационный спринтер",
        description: "Зафиксировал более 90% тестовых сценариев для фичи в DoQA в течение суток после завершения тестирования.",
        category: "technical",
        rarity: "legendary"
    },
    14: {
        title: "Страйк",
        description: "В одном тестовом прогоне выявил более 10 багов.",
        category: "technical",
        rarity: "rare"
    },
    15: {
        title: "Шерлок",
        description: "Воспроизвёл > 3 задач, определив точную причину каждого бага.",
        category: "technical",
        rarity: "rare"
    },
    16: {
        title: "Автономный тестер",
        description: "Самостоятельно провёл полный цикл ручного тестирования релиз-кандидата, не прибегая к помощи коллег.",
        category: "technical",
        rarity: "common"
    },
    17: {
        title: "Международный тестировщик",
        description: "Нашёл баг, связанный с локализацией или языковыми настройками приложения.",
        category: "technical",
        rarity: "rare"
    },
    18: {
        title: "Опрятный кандидат",
        description: "Выявил все баги в тестируемой фиче до выхода релиз-кандидата, обеспечив отсутствие ошибок в финальной сборке.",
        category: "technical",
        rarity: "common"
    },
    19: {
        title: "Помощник большого брата",
        description: "Проанализировал сбой в автотестах, предложил решение команде автотестеров в общем канале и добился его внедрения.",
        category: "technical",
        rarity: "epic"
    },
    20: {
        title: "Баг-локатор",
        description: "Обнаружил и локализовал ошибку, проявляющуюся только при специфических условиях, например, на определённой версии ОС или с нестандартными настройками устройства.",
        category: "technical",
        rarity: "epic"
    },
    21: {
        title: "Ретроспектива Фичи",
        description: "Организовал и провёл ретроспективу по конкретной фиче, помогая команде подвести итоги и выделить области для роста.",
        category: "process",
        rarity: "common"
    },
    22: {
        title: "Голос Команды",
        description: "Поднял на ретро важную проблему, с которой столкнулись многие, и помог найти эффективное решение.",
        category: "process",
        rarity: "rare"
    },
    23: {
        title: "Инициатор Церемоний",
        description: "Предложил улучшение для одной из командных церемоний, и команда успешно применила это на практике.",
        category: "process",
        rarity: "rare"
    },
    24: {
        title: "Страж ДоР",
        description: "На груминге заметил, что задача не соответствует критериям готовности, и вернул её на доработку.",
        category: "process",
        rarity: "common"
    },
    25: {
        title: "Агент Перемен",
        description: "Самостоятельно инициировал и внедрил изменение в процессы команды, улучшив их эффективность.",
        category: "process",
        rarity: "epic"
    },
    26: {
        title: "Гайдмастер",
        description: "Поделился с командой полезной документацией, гайдом или лайфхаком, который стал использоваться на практике.",
        category: "process",
        rarity: "rare"
    },
    27: {
        title: "Автоматизатор Рутины",
        description: "Нашёл и автоматизировал рутинную задачу, что позволило всей команде экономить время.",
        category: "process",
        rarity: "legendary"
    },
    28: {
        title: "Мировой дипломат",
        description: "Обнаружил вопрос или проблему, связанную с другой командой, и поднял её для обсуждения, способствуя решению.",
        category: "process",
        rarity: "common"
    },
    29: {
        title: "Проводник Ретроспективы",
        description: "Провёл ретроспективу, результатом которой стало выявление и устранение ключевой проблемы команды.",
        category: "process",
        rarity: "rare"
    },
    30: {
        title: "Без паники",
        description: "За спринт не было ни одной panic в коде.",
        category: "technical",
        rarity: "common"
    },
    31: {
        title: "Один выстрел. Одно попадание",
        description: "Пройти защиту технического моделирования с первого раза",
        category: "technical",
        rarity: "legendary"
    },
    32: {
        title: "На грани фантастики",
        description: "Ни один автотест не упал за спринт.",
        category: "technical",
        rarity: "rare"
    },
    33: {
        title: "Консильери",
        description: "Договориться со смежной командой и вывести на них задачу.",
        category: "process",
        rarity: "rare"
    },
    34: {
        title: "Герой хотфиксов",
        description: "Пофиксить баг на проде быстрее, чем его заметили.",
        category: "technical",
        rarity: "epic"
    },
    35: {
        title: "Повелитель Swagger'а",
        description: "Документация полностью совпадает с реальностью.",
        category: "technical",
        rarity: "rare"
    },
    36: {
        title: "Монах рефакторинга",
        description: "Переписать сервис так, что он стал быстрее (подтверждено замерами).",
        category: "technical",
        rarity: "epic"
    },
    37: {
        title: "Страйк!",
        description: "Ни одной ошибки в пяти релизах подряд.",
        category: "technical",
        rarity: "legendary"
    },
    38: {
        title: "Часовой",
        description: "Исправить ошибку с форматом времени, не поломав старые версии.",
        category: "technical",
        rarity: "rare"
    },
    39: {
        title: "Баг-киллер",
        description: "Исправить ≥3 багов за спринт.",
        category: "technical",
        rarity: "epic"
    }
};

// Индивидуальные достижения пользователей с их статусами
const userAchievements = {
    1: { // Марина Селезнева
        1: { active: true },     // Кодовой дождь
        2: { active: true },     // Чистильщик
        3: { active: true },    // Фабрика PR
        4: { active: true },     // Феникс
        5: { active: true },     // Глаз орла
        6: { active: true },    // Наставник
        7: { active: true },     // Балансир
        8: { active: true },    // Неприкасаемый
        9: { active: false },     // Победитель по жизни
        10: { active: false },    // Баг-киллер
        21: { active: true },    // Ретроспектива Фичи
        22: { active: true },   // Голос Команды
        23: { active: false },    // Инициатор Церемоний
        24: { active: false },    // Страж ДоР
        25: { active: false },   // Агент Перемен
        26: { active: false },    // Гайдмастер
        27: { active: false },    // Автоматизатор Рутины
        28: { active: false },   // Мировой дипломат
        29: { active: false }     // Проводник Ретроспективы
    },
    2: { // Павел Кривцов
        1: { active: true },     // Кодовой дождь
        2: { active: false },    // Чистильщик
        3: { active: true },     // Фабрика PR
        4: { active: true },     // Феникс
        5: { active: true },     // Глаз орла
        6: { active: false },     // Наставник
        7: { active: true },     // Балансир
        8: { active: false },     // Неприкасаемый
        9: { active: false },    // Победитель по жизни
        10: { active: false },    // Баг-киллер
        21: { active: true },   // Ретроспектива Фичи
        22: { active: false },    // Голос Команды
        23: { active: false },    // Инициатор Церемоний
        24: { active: false },    // Страж ДоР
        25: { active: false },    // Агент Перемен
        26: { active: false },   // Гайдмастер
        27: { active: false },    // Автоматизатор Рутины
        28: { active: false },    // Мировой дипломат
        29: { active: false }    // Проводник Ретроспективы
    },
    3: { // Тимур Медов
        1: { active: true },    // Кодовой дождь
        2: { active: false },     // Чистильщик
        3: { active: false },    // Фабрика PR
        4: { active: false },     // Феникс
        5: { active: false },     // Глаз орла
        6: { active: true },    // Наставник
        7: { active: true },     // Балансир
        8: { active: true },    // Неприкасаемый
        9: { active: false },     // Победитель по жизни
        10: { active: false },   // Баг-киллер
        21: { active: true },    // Ретроспектива Фичи
        22: { active: false },    // Голос Команды
        23: { active: false },   // Инициатор Церемоний
        24: { active: false },    // Страж ДоР
        25: { active: false },   // Агент Перемен
        26: { active: false },    // Гайдмастер
        27: { active: false },   // Автоматизатор Рутины
        28: { active: true },    // Мировой дипломат
        29: { active: false }     // Проводник Ретроспективы
    },
    4: { // Никита Сахно
        1: { active: true },     // Кодовой дождь
        2: { active: true },    // Чистильщик
        3: { active: true },    // Фабрика PR
        4: { active: true },     // Феникс
        5: { active: true },    // Глаз орла
        6: { active: true },     // Наставник
        7: { active: true },     // Балансир
        8: { active: false },    // Неприкасаемый
        9: { active: false },     // Победитель по жизни
        10: { active: false },    // Баг-киллер
        21: { active: true },   // Ретроспектива Фичи
        22: { active: false },   // Голос Команды
        23: { active: false },    // Инициатор Церемоний
        24: { active: false },    // Страж ДоР
        25: { active: false },   // Агент Перемен
        26: { active: false },    // Гайдмастер
        27: { active: false },   // Автоматизатор Рутины
        28: { active: false },    // Мировой дипломат
        29: { active: false }     // Проводник Ретроспективы
    },
    5: { // Никита Юрлов
        21: { active: false },   // Ретроспектива Фичи
        22: { active: false },   // Голос Команды
        23: { active: false },    // Инициатор Церемоний
        24: { active: false },    // Страж ДоР
        25: { active: false },   // Агент Перемен
        26: { active: false },    // Гайдмастер
        27: { active: false },   // Автоматизатор Рутины
        28: { active: false },    // Мировой дипломат
        29: { active: false },    // Проводник Ретроспективы
        30: { active: true },    // Без паники
        31: { active: false },    // Победитель по жизни
        32: { active: false },    // На грани фантастики
        33: { active: false },    // Консильери
        34: { active: true },    // Герой хотфиксов
        35: { active: false },    // Повелитель Swagger'а
        36: { active: true },    // Монах рефакторинга
        37: { active: true },    // Страйк!
        38: { active: false },    // Часовой
        39: { active: true }     // Баг-киллер
    },
    6: { // Никита Михайлюк
        21: { active: false },   // Ретроспектива Фичи
        22: { active: false },   // Голос Команды
        23: { active: false },    // Инициатор Церемоний
        24: { active: false },    // Страж ДоР
        25: { active: false },   // Агент Перемен
        26: { active: false },    // Гайдмастер
        27: { active: false },   // Автоматизатор Рутины
        28: { active: true },    // Мировой дипломат
        29: { active: false },    // Проводник Ретроспективы
        30: { active: true },    // Без паники
        31: { active: true },    // Победитель по жизни
        32: { active: false },    // На грани фантастики
        33: { active: true },    // Консильери
        34: { active: true },    // Герой хотфиксов
        35: { active: false },    // Повелитель Swagger'а
        36: { active: true },    // Монах рефакторинга
        37: { active: true },    // Страйк!
        38: { active: false },    // Часовой
        39: { active: true }     // Баг-киллер
    },
    7: { // Екатерина Антипова
        11: { active: false },    // 100% краш
        12: { active: false },   // Двойной агент
        13: { active: false },    // Документационный спринтер
        14: { active: false },    // Страйк
        15: { active: false },    // Шерлок
        16: { active: true },   // Автономный тестер
        17: { active: false },    // Международный тестировщик
        18: { active: false },    // Опрятный кандидат
        19: { active: false },   // Помощник большого брата
        20: { active: false },    // Баг-локатор
        21: { active: false },    // Ретроспектива Фичи
        22: { active: false },    // Голос Команды
        23: { active: false },   // Инициатор Церемоний
        24: { active: false },    // Страж ДоР
        25: { active: false },    // Агент Перемен
        26: { active: false },   // Гайдмастер
        27: { active: false },   // Автоматизатор Рутины
        28: { active: false },    // Мировой дипломат
        29: { active: false }     // Проводник Ретроспективы
    },
    8: { // Роман Безжонов
        11: { active: false },   // 100% краш
        12: { active: true },    // Двойной агент
        13: { active: false },   // Документационный спринтер
        14: { active: false },    // Страйк
        15: { active: false },    // Шерлок
        16: { active: true },    // Автономный тестер
        17: { active: false },   // Международный тестировщик
        18: { active: false },   // Опрятный кандидат
        19: { active: false },    // Помощник большого брата
        20: { active: false },    // Баг-локатор
        21: { active: false },   // Ретроспектива Фичи
        22: { active: true },   // Голос Команды
        23: { active: false },   // Инициатор Церемоний
        24: { active: false },    // Страж ДоР
        25: { active: true },   // Агент Перемен
        26: { active: false },    // Гайдмастер
        27: { active: true },    // Автоматизатор Рутины
        28: { active: true },   // Мировой дипломат
        29: { active: false }    // Проводник Ретроспективы
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

// Определение типов медалей
const badgeTypes = {
    'gold': {
        name: 'Золотая медаль',
        color: '#FFD700',
        icon: '🥇'
    },
    'silver': {
        name: 'Серебряная медаль',
        color: '#C0C0C0',
        icon: '🥈'
    },
    'bronze': {
        name: 'Бронзовая медаль',
        color: '#CD7F32',
        icon: '🥉'
    },
    'wood': {
        name: 'Деревянная медаль',
        color: '#8B4513',
        icon: '🪵'
    },
    'active': {
        name: 'Самый активный',
        color: '#FF6B35',
        icon: '🚀'
    },
    'contribution': {
        name: 'Наибольший вклад',
        color: '#9333EA',
        icon: '💪'
    },
    'pioneer': {
        name: 'Первооткрыватель',
        color: '#FFD700',
        icon: '🏆'
    }
};

// Кастомные медали для каждого участника
const memberBadges = {
    1: [ // Марина Селезнева
        { type: 'gold', description: 'Золотая медаль' }
    ],
    2: [ // Павел Кривцов
        { type: 'bronze', description: 'Бронзовая медаль' }
    ],
    3: [ // Тимур Медов
        { type: 'bronze', description: 'Бронзовая медаль' }
    ],
    4: [ // Никита Сахно
        { type: 'silver', description: 'Серебряная медаль' }
    ],
    5: [ // Никита Юрлов
        { type: 'wood', description: 'Деревянная медаль' }
    ],
    6: [ // Никита Михайлюк
        { type: 'silver', description: 'Серебряная медаль' },
        { type: 'active', description: 'Самый активный' },
        { type: 'contribution', description: 'Наибольший вклад' },
        { type: 'pioneer', description: 'Первооткрыватель' }
    ],
    7: [ // Екатерина Антипова
        { type: 'wood', description: 'Деревянная медаль' }
    ],
    8: [ // Роман Безжонов
        { type: 'bronze', description: 'Бронзовая медаль' }
    ]
};

// Функция для получения URL изображения достижения по редкости
function getAchievementImageUrl(achievementId) {
    const achievement = achievementsData[achievementId];
    if (!achievement) {
        return 'source/achievements/achievement_4.png'; // Обычное достижение как fallback
    }
    
    // Сопоставляем редкость с номером изображения:
    // achievement_1.png - Легендарные достижения (legendary)
    // achievement_2.png - Особые достижения (epic) 
    // achievement_3.png - Редкие достижения (rare)
    // achievement_4.png - Обычные достижения (common)
    
    const rarityToImageMap = {
        'legendary': 'achievement_1.png',
        'epic': 'achievement_2.png', 
        'rare': 'achievement_3.png',
        'common': 'achievement_4.png'
    };
    
    const imageName = rarityToImageMap[achievement.rarity] || 'achievement_4.png';
    return `source/achievements/${imageName}`;
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

// Функция для определения статуса по проценту
function getStatusByProgress(progress) {
    if (progress >= 100) {
        return {
            text: "100% — Оракул",
            gradient: "linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.15))",
            border: "rgba(251, 191, 36, 0.4)",
            textColor: "#FBBF24"
        };
    } else if (progress >= 76) {
        return {
            text: "76–99% — Просветленный",
            gradient: "linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(126, 34, 206, 0.15))",
            border: "rgba(147, 51, 234, 0.3)",
            textColor: "#9333EA"
        };
    } else if (progress >= 51) {
        return {
            text: "51–75% — Гуру",
            gradient: "linear-gradient(135deg, rgba(225, 25, 49, 0.15), rgba(240, 68, 85, 0.15))",
            border: "rgba(225, 25, 49, 0.3)",
            textColor: "#E11931"
        };
    } else if (progress >= 26) {
        return {
            text: "26–50% — Мастер",
            gradient: "linear-gradient(135deg, rgba(0, 179, 200, 0.15), rgba(6, 182, 212, 0.15))",
            border: "rgba(0, 179, 200, 0.3)",
            textColor: "#00B3C8"
        };
    } else if (progress >= 11) {
        return {
            text: "11–25% — Знаток",
            gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(22, 163, 74, 0.15))",
            border: "rgba(34, 197, 94, 0.3)",
            textColor: "#22C55E"
        };
    } else {
        return {
            text: "0–10% — Новичок",
            gradient: "linear-gradient(135deg, rgba(120, 119, 116, 0.15), rgba(163, 163, 163, 0.15))",
            border: "rgba(120, 119, 116, 0.3)",
            textColor: "#787774"
        };
    }
}

// Функция для рендеринга кастомных медалек
function renderBadges(memberId) {
    const badgesContainer = document.querySelector(`.badges-container[data-member-id="${memberId}"]`);
    if (!badgesContainer) return;
    
    const badges = memberBadges[memberId] || [];
    badgesContainer.innerHTML = '';
    
    badges.forEach((badgeData, index) => {
        const badgeType = badgeTypes[badgeData.type];
        if (!badgeType) return;
        
        const badge = document.createElement('div');
        badge.className = `badge-item badge-${badgeData.type}`;
        badge.setAttribute('data-badge-type', badgeData.type);
        
        badge.innerHTML = `
            <div class="badge-emoji">${badgeType.icon}</div>
            <div class="badge-tooltip">${badgeData.description}</div>
        `;
        
        // Устанавливаем цвет рамки
        badge.style.borderColor = badgeType.color;
        
        badgesContainer.appendChild(badge);
    });
    
    // Показываем контейнер с задержкой для анимации
    setTimeout(() => {
        badgesContainer.classList.add('visible');
    }, 400 + (memberId * 100));
}

// Функция для обновления прогресс-баров и статусов на главной странице
function updateProgressBars() {
    for (let memberId = 1; memberId <= 8; memberId++) {
        const progress = calculateMemberProgress(memberId);
        const progressFill = document.querySelector(`[data-member-id="${memberId}"].progress-fill`);
        const progressText = document.querySelector(`[data-member-id="${memberId}"].progress-text`);
        const statusContainer = document.querySelector(`.status-container[data-member-id="${memberId}"]`);
        const statusSkeleton = document.querySelector(`.status-skeleton[data-member-id="${memberId}"]`);
        
        if (progressFill && progressText) {
            // Отложим анимацию для плавного эффекта
            setTimeout(() => {
                progressFill.style.width = `${progress}%`;
                progressText.textContent = `${progress}%`;
                
                // Обновляем статус
                if (statusContainer) {
                    const status = getStatusByProgress(progress);
                    const statusText = statusContainer.querySelector('.status-text');
                    
                    if (statusText) {
                        statusText.textContent = status.text;
                        statusText.style.color = status.textColor;
                        
                        // Обновляем стили контейнера
                        statusContainer.style.background = status.gradient;
                        statusContainer.style.borderColor = status.border;
                        
                        // Скрываем skeleton и показываем статус
                        setTimeout(() => {
                            if (statusSkeleton) {
                                statusSkeleton.style.display = 'none';
                            }
                            statusContainer.classList.add('visible');
                        }, 300 + (memberId * 50)); // Последовательное появление
                    }
                }
                
                // Рендерим медальки для этого участника
                renderBadges(memberId);
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
