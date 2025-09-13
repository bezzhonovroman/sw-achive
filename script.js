// Данные о достижениях
const achievementsData = {
    1: {
        title: "Первый релиз",
        description: "Успешно запустил первое мобильное приложение в App Store и Google Play. Приложение получило более 10,000 загрузок в первую неделю."
    },
    2: {
        title: "Архитектурный мастер",
        description: "Спроектировал и реализовал масштабируемую архитектуру приложения, которая выдержала нагрузку в 100,000+ пользователей одновременно."
    },
    3: {
        title: "Инноватор UX",
        description: "Создал революционный пользовательский интерфейс, который увеличил время сессии пользователей на 40% и получил награду 'Лучший UX дизайн'."
    },
    4: {
        title: "Оптимизатор производительности",
        description: "Оптимизировал производительность приложения, сократив время загрузки на 60% и потребление батареи на 30%."
    },
    5: {
        title: "Ментор команды",
        description: "Обучил 5 новых разработчиков и создал систему код-ревью, которая повысила качество кода на 50%."
    },
    6: {
        title: "Дизайн-система",
        description: "Создала комплексную дизайн-систему для мобильного приложения, которая ускорила разработку новых экранов в 3 раза."
    },
    7: {
        title: "Анимации и микроинтерракции",
        description: "Разработала уникальные анимации и микроинтерракции, которые сделали приложение более живым и привлекательным для пользователей."
    },
    8: {
        title: "Адаптивный дизайн",
        description: "Создала адаптивный дизайн, который идеально работает на всех размерах экранов от 4 до 7 дюймов."
    },
    9: {
        title: "Backend архитектор",
        description: "Спроектировал и реализовал высокопроизводительный backend, который обрабатывает 1M+ запросов в день с откликом менее 100ms."
    },
    10: {
        title: "Система аналитики",
        description: "Внедрил комплексную систему аналитики и A/B тестирования, которая помогла увеличить конверсию на 25%."
    },
    11: {
        title: "Безопасность данных",
        description: "Реализовал многоуровневую систему безопасности, включая шифрование данных и защиту от атак, получив сертификат ISO 27001."
    },
    12: {
        title: "Микросервисная архитектура",
        description: "Перевел монолитное приложение на микросервисную архитектуру, что повысило надежность и масштабируемость системы."
    },
    13: {
        title: "CI/CD пайплайн",
        description: "Настроил автоматизированный пайплайн развертывания, который сократил время релиза с 2 дней до 2 часов."
    },
    14: {
        title: "Мониторинг и алерты",
        description: "Внедрил систему мониторинга в реальном времени с умными алертами, что снизило время реакции на проблемы на 80%."
    },
    15: {
        title: "Тестирование качества",
        description: "Создала комплексную систему тестирования, которая повысила качество кода на 60% и снизила количество багов на 70%."
    },
    16: {
        title: "Автоматизация тестов",
        description: "Настроила автоматизированное тестирование, которое сократило время проверки релизов с 4 часов до 30 минут."
    },
    17: {
        title: "Пользовательские сценарии",
        description: "Разработала детальные пользовательские сценарии, которые помогли улучшить UX и увеличить конверсию на 35%."
    },
    18: {
        title: "Кроссбраузерная совместимость",
        description: "Обеспечила полную совместимость приложения со всеми популярными браузерами и устройствами."
    },
    19: {
        title: "Документация API",
        description: "Создала подробную документацию API, которая ускорила интеграцию с внешними сервисами в 3 раза."
    },
    20: {
        title: "DevOps инженер",
        description: "Настроил инфраструктуру для автоматического развертывания и мониторинга приложения в облаке."
    },
    21: {
        title: "Контейнеризация",
        description: "Внедрил Docker и Kubernetes для масштабируемого развертывания приложения."
    },
    22: {
        title: "Безопасность инфраструктуры",
        description: "Реализовал многоуровневую систему безопасности для защиты инфраструктуры от атак."
    },
    23: {
        title: "Продукт-менеджер",
        description: "Управляла разработкой продукта от идеи до релиза, увеличив пользовательскую базу на 200%."
    },
    24: {
        title: "Аналитика продуктов",
        description: "Внедрила систему аналитики, которая помогла принять ключевые решения по развитию продукта."
    },
    25: {
        title: "Пользовательские исследования",
        description: "Провела 50+ интервью с пользователями, что привело к кардинальному улучшению UX."
    },
    26: {
        title: "A/B тестирование",
        description: "Настроила систему A/B тестирования, которая помогла оптимизировать ключевые метрики продукта."
    },
    27: {
        title: "Конкурентный анализ",
        description: "Провела глубокий анализ конкурентов и выявила уникальные возможности для продукта."
    },
    28: {
        title: "Roadmap планирование",
        description: "Создала детальный roadmap развития продукта на 2 года вперед."
    },
    29: {
        title: "Команда разработки",
        description: "Сформировала и управляла командой из 8 разработчиков, обеспечив высокую производительность."
    },
    30: {
        title: "QA инженер",
        description: "Создал комплексную систему тестирования, которая выявила 95% багов до релиза."
    },
    31: {
        title: "Автоматизация тестирования",
        description: "Написал 200+ автоматических тестов, которые покрывают 80% функциональности приложения."
    },
    32: {
        title: "Тестирование производительности",
        description: "Провел нагрузочное тестирование, которое выявило узкие места и помогло оптимизировать производительность."
    },
    33: {
        title: "Мобильное тестирование",
        description: "Создал стратегию тестирования на 20+ различных устройствах и операционных системах."
    },
    34: {
        title: "UI/UX дизайнер",
        description: "Создала интуитивный и привлекательный дизайн, который получил награду 'Лучший мобильный дизайн'."
    },
    35: {
        title: "Дизайн-система",
        description: "Разработала комплексную дизайн-систему, которая обеспечила консистентность во всем приложении."
    },
    36: {
        title: "Прототипирование",
        description: "Создала интерактивные прототипы, которые ускорили процесс утверждения дизайна в 2 раза."
    }
};

// Функция для переключения видимости достижений
function toggleAchievements(memberId) {
    const member = document.querySelector(`[data-member="${memberId}"]`);
    const hiddenAchievements = member.querySelectorAll('.achievement-item.hidden');
    const expandBtn = member.querySelector('.expand-btn');
    const achievementsGrid = member.querySelector('.achievements-grid');
    
    if (hiddenAchievements.length === 0) {
        return; // Если нет скрытых достижений, ничего не делаем
    }
    
    const isExpanded = achievementsGrid.classList.contains('expanded');
    
    if (isExpanded) {
        // Скрываем дополнительные достижения
        achievementsGrid.classList.remove('expanded');
        hiddenAchievements.forEach(achievement => {
            achievement.classList.remove('show');
            setTimeout(() => {
                achievement.style.display = 'none';
            }, 300);
        });
        expandBtn.textContent = 'Показать все достижения';
    } else {
        // Показываем дополнительные достижения
        achievementsGrid.classList.add('expanded');
        hiddenAchievements.forEach(achievement => {
            achievement.style.display = 'block';
            setTimeout(() => {
                achievement.classList.add('show');
            }, 10);
        });
        expandBtn.textContent = 'Скрыть дополнительные';
    }
}

// Функция для открытия модального окна с достижением
function openAchievementModal(achievementId) {
    const achievement = achievementsData[achievementId];
    if (!achievement) return;
    
    const modal = document.getElementById('achievementModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    // Находим исходное изображение для получения его src
    const originalImg = document.querySelector(`[data-achievement="${achievementId}"] img`);
    if (originalImg) {
        modalImage.src = originalImg.src;
        modalImage.alt = originalImg.alt;
    }
    
    modalTitle.textContent = achievement.title;
    modalDescription.textContent = achievement.description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку фона
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('achievementModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
}

// Функция для скрытия кнопки раскрытия, если достижений 3 или меньше
function hideExpandButtonIfNeeded() {
    document.querySelectorAll('.team-member').forEach(member => {
        const allAchievements = member.querySelectorAll('.achievement-item');
        const expandBtn = member.querySelector('.expand-btn');
        
        if (allAchievements.length <= 3 && expandBtn) {
            expandBtn.style.display = 'none';
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчики клика на достижения
    document.querySelectorAll('.achievement-item').forEach(item => {
        item.addEventListener('click', function() {
            const achievementId = this.getAttribute('data-achievement');
            openAchievementModal(achievementId);
        });
    });
    
    // Скрываем кнопки раскрытия для членов команды с 3 или менее достижениями
    hideExpandButtonIfNeeded();
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('achievementModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Закрытие модального окна по клавише Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

// Анимация появления карточек при загрузке
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
