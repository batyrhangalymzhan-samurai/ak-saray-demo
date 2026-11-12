// Все тексты — на русском. Только проверенные факты: никаких выдуманных цен,
// вместимости, отзывов, наград и истории.

export const BUSINESS = {
  name: 'Ак-Сарай',
  location: 'Бесагаш, Казахстан',
  address: '824X+277, Бесагаш',
  phone: '+7 777 225 8626',
  phoneHref: 'tel:+77772258626',
  whatsappHref: 'https://wa.me/77772258626',
  hours: 'Круглосуточно',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=824X%2B277+Бесагаш',
}

export const NAV_ITEMS = [
  { id: 'about', label: 'О ресторане' },
  { id: 'banquets', label: 'Банкеты' },
  { id: 'advantages', label: 'Преимущества' },
  { id: 'menu', label: 'Меню' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'contacts', label: 'Контакты' },
]

export const ADVANTAGES = [
  { title: 'Круглосуточная работа', text: 'Открыты в любое время суток.', icon: 'Clock' },
  { title: 'Возможность бронирования', text: 'Заранее согласуйте свой визит.', icon: 'CalendarCheck' },
  { title: 'Халяльные блюда', text: 'Блюда, соответствующие халяль.', icon: 'Leaf' },
  { title: 'Бесплатная парковка', text: 'Удобно подъехать и оставить автомобиль.', icon: 'ParkingCircle' },
  { title: 'Простор для больших компаний', text: 'Пространство для групп и торжеств.', icon: 'Users' },
  { title: 'Доступная среда', text: 'Доступный вход и места для всех гостей.', icon: 'Accessibility' },
]

export const BANQUETS = [
  {
    title: 'Семейные торжества',
    text: 'Дни рождения, юбилеи и тёплые семейные встречи в спокойной атмосфере.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Праздничные ужины',
    text: 'Вечера, которые хочется растянуть надолго — с вниманием к каждой детали.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=70',
  },
  {
    title: 'Встречи больших компаний',
    text: 'Просторные залы для корпоративных событий и дружеских собраний.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=70',
  },
]

export const MENU_CATEGORIES = [
  { title: 'Основные блюда', text: 'Горячие блюда для главного застолья.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=70' },
  { title: 'Закуски', text: 'Лёгкое начало трапезы.', image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=1200&q=70' },
  { title: 'Десерты', text: 'Сладкое завершение вечера.', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=70' },
  { title: 'Чай и кофе', text: 'Ароматные напитки для неспешной беседы.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=70' },
  { title: 'Напитки', text: 'Прохладительные и другие напитки.', image: 'https://images.unsplash.com/photo-1514361892635-cebb3b0a8ad1?auto=format&fit=crop&w=1200&q=70' },
]

export const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=70', alt: 'Интерьер ресторана (иллюстрация)', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=70', alt: 'Сервировка стола (иллюстрация)', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=70', alt: 'Атмосфера вечера (иллюстрация)', span: 'square' },
  { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=70', alt: 'Вечерний зал (иллюстрация)', span: 'square' },
  { src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=70', alt: 'Интерьер зала (иллюстрация)', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=70', alt: 'Детали сервировки (иллюстрация)', span: 'tall' },
]
