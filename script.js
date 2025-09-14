// Данные о достижениях
const achievementsData = {
    1: {
        title: "Первый релиз",
        description: "Успешно запустил первое мобильное приложение в App Store и Google Play. Приложение получило более 10,000 загрузок в первую неделю.",
        active: true
    },
    2: {
        title: "Архитектурный мастер",
        description: "Спроектировал и реализовал масштабируемую архитектуру приложения, которая выдержала нагрузку в 100,000+ пользователей одновременно.",
        active: true
    },
    3: {
        title: "Инноватор UX",
        description: "Создал революционный пользовательский интерфейс, который увеличил время сессии пользователей на 40% и получил награду 'Лучший UX дизайн'.",
        active: false
    },
    4: {
        title: "Оптимизатор производительности",
        description: "Оптимизировал производительность приложения, сократив время загрузки на 60% и потребление батареи на 30%.",
        active: true
    },
    5: {
        title: "Ментор команды",
        description: "Обучил 5 новых разработчиков и создал систему код-ревью, которая повысила качество кода на 50%.",
        active: false
    },
    6: {
        title: "Дизайн-система",
        description: "Создала комплексную дизайн-систему для мобильного приложения, которая ускорила разработку новых экранов в 3 раза.",
        active: true
    },
    7: {
        title: "Анимации и микроинтерракции",
        description: "Разработала уникальные анимации и микроинтерракции, которые сделали приложение более живым и привлекательным для пользователей.",
        active: false
    },
    8: {
        title: "Адаптивный дизайн",
        description: "Создала адаптивный дизайн, который идеально работает на всех размерах экранов от 4 до 7 дюймов.",
        active: true
    },
    9: {
        title: "Backend архитектор",
        description: "Спроектировал и реализовал высокопроизводительный backend, который обрабатывает 1M+ запросов в день с откликом менее 100ms.",
        active: true
    },
    10: {
        title: "Система аналитики",
        description: "Внедрил комплексную систему аналитики и A/B тестирования, которая помогла увеличить конверсию на 25%.",
        active: false
    },
    11: {
        title: "Безопасность данных",
        description: "Реализовал многоуровневую систему безопасности, включая шифрование данных и защиту от атак, получив сертификат ISO 27001.",
        active: true
    },
    12: {
        title: "Микросервисная архитектура",
        description: "Перевел монолитное приложение на микросервисную архитектуру, что повысило надежность и масштабируемость системы.",
        active: true
    },
    13: {
        title: "CI/CD пайплайн",
        description: "Настроил автоматизированный пайплайн развертывания, который сократил время релиза с 2 дней до 2 часов.",
        active: false
    },
    14: {
        title: "Мониторинг и алерты",
        description: "Внедрил систему мониторинга в реальном времени с умными алертами, что снизило время реакции на проблемы на 80%.",
        active: true
    },
    15: {
        title: "Тестирование качества",
        description: "Создала комплексную систему тестирования, которая повысила качество кода на 60% и снизила количество багов на 70%.",
        active: true
    },
    16: {
        title: "Автоматизация тестов",
        description: "Настроила автоматизированное тестирование, которое сократило время проверки релизов с 4 часов до 30 минут.",
        active: true
    },
    17: {
        title: "Пользовательские сценарии",
        description: "Разработала детальные пользовательские сценарии, которые помогли улучшить UX и увеличить конверсию на 35%.",
        active: false
    },
    18: {
        title: "Кроссбраузерная совместимость",
        description: "Обеспечила полную совместимость приложения со всеми популярными браузерами и устройствами.",
        active: true
    },
    19: {
        title: "Документация API",
        description: "Создала подробную документацию API, которая ускорила интеграцию с внешними сервисами в 3 раза.",
        active: true
    },
    20: {
        title: "DevOps инженер",
        description: "Настроил инфраструктуру для автоматического развертывания и мониторинга приложения в облаке.",
        active: false
    },
    21: {
        title: "Контейнеризация",
        description: "Внедрил Docker и Kubernetes для масштабируемого развертывания приложения.",
        active: true
    },
    22: {
        title: "Безопасность инфраструктуры",
        description: "Реализовал многоуровневую систему безопасности для защиты инфраструктуры от атак.",
        active: true
    },
    23: {
        title: "Продукт-менеджер",
        description: "Управляла разработкой продукта от идеи до релиза, увеличив пользовательскую базу на 200%.",
        active: false
    },
    24: {
        title: "Аналитика продуктов",
        description: "Внедрила систему аналитики, которая помогла принять ключевые решения по развитию продукта.",
        active: true
    },
    25: {
        title: "Пользовательские исследования",
        description: "Провела 50+ интервью с пользователями, что привело к кардинальному улучшению UX.",
        active: true
    },
    26: {
        title: "A/B тестирование",
        description: "Настроила систему A/B тестирования, которая помогла оптимизировать ключевые метрики продукта.",
        active: true
    },
    27: {
        title: "Конкурентный анализ",
        description: "Провела глубокий анализ конкурентов и выявила уникальные возможности для продукта.",
        active: false
    },
    28: {
        title: "Roadmap планирование",
        description: "Создала детальный roadmap развития продукта на 2 года вперед.",
        active: true
    },
    29: {
        title: "Команда разработки",
        description: "Сформировала и управляла командой из 8 разработчиков, обеспечив высокую производительность.",
        active: true
    },
    30: {
        title: "QA инженер",
        description: "Создал комплексную систему тестирования, которая выявила 95% багов до релиза.",
        active: false
    },
    31: {
        title: "Автоматизация тестирования",
        description: "Написал 200+ автоматических тестов, которые покрывают 80% функциональности приложения.",
        active: true
    },
    32: {
        title: "Тестирование производительности",
        description: "Провел нагрузочное тестирование, которое выявило узкие места и помогло оптимизировать производительность.",
        active: true
    },
    33: {
        title: "Мобильное тестирование",
        description: "Создал стратегию тестирования на 20+ различных устройствах и операционных системах.",
        active: false
    },
    34: {
        title: "UI/UX дизайнер",
        description: "Создала интуитивный и привлекательный дизайн, который получил награду 'Лучший мобильный дизайн'.",
        active: true
    },
    35: {
        title: "Дизайн-система",
        description: "Разработала комплексную дизайн-систему, которая обеспечила консистентность во всем приложении.",
        active: false
    },
    36: {
        title: "Прототипирование",
        description: "Создала интерактивные прототипы, которые ускорили процесс утверждения дизайна в 2 раза.",
        active: true
    },
    37: {
        title: "Лидерство в проекте",
        description: "Возглавил критический проект и успел к сроку без снижения качества.",
        active: true
    },
    38: {
        title: "Оптимизация затрат",
        description: "Сократил инфраструктурные расходы на 25% благодаря оптимизации ресурсов.",
        active: false
    },
    39: {
        title: "Повышение качества",
        description: "Внедрил дополнительные проверки качества, что снизило количество инцидентов на 40%.",
        active: true
    },
    40: {
        title: "Наставничество",
        description: "Организовал серию внутренних воркшопов и обучил коллег новым практикам.",
        active: false
    }
};

// Карта соответствия участника и его достижений
const memberAchievements = {
    1: [1, 2, 3, 4, 5],
    2: [6, 7, 8, 9, 10],
    3: [11, 12, 13, 14, 15],
    4: [16, 17, 18, 19, 20],
    5: [21, 22, 23, 24, 25],
    6: [26, 27, 28, 29, 30],
    7: [31, 32, 33, 34, 35],
    8: [36, 37, 38, 39, 40]
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

// Рендер страницы участника (member.html)
function renderMemberPage() {
    const params = new URLSearchParams(window.location.search);
    const memberId = params.get('id');
    if (!memberId) return;

    const info = membersInfo[memberId];
    const ids = memberAchievements[memberId] || [];

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
        ids.forEach((aid) => {
            const a = achievementsData[aid];
            if (!a) return;
            const item = document.createElement('div');
            item.className = a.active ? 'achievement-card achievement-card--active' : 'achievement-card achievement-card--inactive';
            item.setAttribute('data-achievement', String(aid));
            // Используем квадратные плейсхолдеры изображений; параметр sig меняем по id для разнообразия
            const imgUrl = `https://images.unsplash.com/photo-1551434678-e076c223a692?w=128&h=128&fit=crop&sig=${aid}`;
            item.innerHTML = `
                <div class="achievement-card__image">
                    <img src="${imgUrl}" alt="${a.title}">
                </div>
                <div class="achievement-card__content">
                    <h3>${a.title}</h3>
                    <p>${a.description}</p>
                </div>
            `;
            // Клик по карточке — открыть модалку (только для активных)
            if (a.active) {
                item.addEventListener('click', () => openMemberAchievementModal(aid, imgUrl));
            }
            listEl.appendChild(item);
        });
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
    modalTitle.textContent = a.title;
    modalDesc.textContent = a.description;

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

// Анимация появления карточек при загрузке (главная страница)
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px)';
        setTimeout(() => {
            member.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            member.style.opacity = '1';
            member.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
