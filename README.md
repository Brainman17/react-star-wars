# 🪐 Star Wars Application

## 🐧 Links
- `Ссылка на GitHub Pages` https://brainman17.github.io/react-star-wars/
- `Репозиторий` https://github.com/Brainman17/react-star-wars

## 🐶 Scripts and Commands

```bash
# General
npm run start            # run app in the development mode
npm run storybook        # run storybook
npm run deploy           # deploy app on Github Pages
```

```bash
# Deploy (part of "deploy" script)
npm run build            # builds the app for production
npm run build-gh-pages   # deploy on Github Pages
```

### 🦄 API
- https://swapi.dev

### 🐼 Технологии
- Состояние компонента (хук `useState`)
- Жизненный цикл компонента (хук `useEffect`): в основном для получения данных с сервера, но также для обновления стейта в Редаксе и смены лого 
- Context API (хук `useContext`): для смены темы
- Создание собственного хука `useQueryParams`, который добавляет номер страницы для перехода по ним 
- Паттерн `Higher-Order Component`: для отображения error message в случае ошибки сервера
- Обработка событий
- `css-modules`, библиотека `classnames` для 2+ классов
- Списки и ключи
- Отложенная загрузка компонентов `React.lazy()` в связке с `React.Suspense`
- Библиотека `prop-types` для валидации props

### React Router
- Базовый роутинг
- URL Parameters
- Query Parameters
- Обработка страницы 404 (Not Found)
- Хуки `useLocation` и `useNavigate`

### Redux
- Базовая структура react-redux-приложения: action, reducers
- Немного о хуках `useDispatch`, `useSelector`

### Общее
- Использовал Alias (библиотека `react-app-rewire-alias`) для относительных путей
- Немного поигрался со `@storybook`
- Пользовался библиотекой `lodash`, ее функцией omit для удаления пользователя по id, не мутируя начальный объект
- `Local Storage` для сохранения понравившихся героев





