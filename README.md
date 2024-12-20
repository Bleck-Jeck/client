# **Документация по установке и настройке клиентского приложения**

## **Требования**

Перед началом убедитесь, что на вашем компьютере установлены следующие инструменты:

1. **Node.js** (рекомендуемая версия: LTS) и **npm** (устанавливается вместе с Node.js).
2. **Git** (для клонирования репозитория).
3. Доступ к серверу API, так как клиент использует его для выполнения запросов.

---

## **Установка проекта**

1. **Клонирование репозитория** Склонируйте проект на локальную машину:
   
   ```bash
   git clone <URL_репозитория_клиента>
   cd <имя_папки_клиента>
   ```

2. **Установка зависимостей** Установите все необходимые зависимости:
   
   ```bash
   npm install
   ```

3. **Настройка переменных окружения** Создайте файл `.env.local` в корне проекта. Пример содержимого:
   
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:4000/graphql
   ```
   
   - `NEXT_PUBLIC_API_URL` — URL вашего сервера API.

---

## **Режим разработки**

### Запуск клиента в режиме разработки:

```bash
npm run dev
```

После запуска клиент будет доступен по адресу: [http://localhost:3000](http://localhost:3000).

---

## **Сборка и запуск в режиме релиза**

### 1. **Сборка проекта**

Выполните сборку приложения:

```bash
npm run build
```

### 2. **Запуск приложения**

Запустите собранное приложение:

```bash
npm run start
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000).

---

## **Дополнительные команды**

- **Проверка кода с помощью ESLint:**
  
  ```bash
  npm run lint
  ```

- **Генерация GraphQL-типов:** Убедитесь, что ваш сервер API запущен, а URL для GraphQL указан в `codegen.ts`. Затем выполните:
  
  ```bash
  npm run generate-graphql
  ```

---

## **Работа с Tailwind CSS**

Проект использует Tailwind CSS для стилизации. Конфигурационный файл `tailwind.config.js` находится в корне проекта.

- Чтобы изменить стили или настройки, отредактируйте этот файл.
- Документация Tailwind CSS доступна [здесь](https://tailwindcss.com/).

---

## **Обновление зависимостей**

Периодически проверяйте и обновляйте зависимости для обеспечения безопасности и использования новых возможностей:

```bash
npm outdated
npm update
```

---

## **Часто возникающие проблемы**

1. **Ошибка при подключении к серверу API:**
   
   - Проверьте значение `NEXT_PUBLIC_API_URL` в `.env.local`.
   - Убедитесь, что сервер API запущен.

2. **Tailwind CSS не работает:**
   
   - Убедитесь, что в `globals.css` подключены стили Tailwind:
     
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

3. **GraphQL-генерация не работает:**
   
   - Убедитесь, что сервер API доступен.
   - Проверьте настройки в `src/codegen.ts`.

---

Эта документация охватывает основные аспекты настройки и использования клиентского приложения. Если нужно добавить дополнительные разделы, такие как описание структуры папок или специфические моменты работы с библиотекой **urql**, дайте знать! 😊
