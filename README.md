Разработано клиент-серверное решение с использованием node.js для хранения и управления базой данных автомобилей различных брендов. В серверном приложение использованы следующие технологии: 
1. Node.JS 
2. Express 
3. REST API 
4. Методы, которые позволяют добавлять автомобили, удалять, изменять существующие и получать список по брендам с сортировкой (классический CRUD). Опубликованы эти методы в REST API 
5. Аутентификация пользователя при подключении к отдельному методу REST API с помощью логина, пароля 
6. БД MongoDB для персистентного хранения информации об автомобилях. 
Клиентское приложение:
1. Node.JS 
2. Интерпретатор командной строки. В параметрах логин, пароль, действие и аргументы этого действия.
3. При запуске из командной строки с параметрами выполняется подключение к Серверу и выполнять REST API операции. 
4. Данные, полученные от Сервера выводятся в консоль. Структура "Автомобиль": - Бренд - Название - Год производства - Цена .
