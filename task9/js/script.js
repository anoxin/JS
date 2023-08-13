/* 
Задание 1: 
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

*/

const url = 'https://jsonplaceholder.typicode.com/users';

const ul = document.querySelector('.list');

const listUsers = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

try {
  const data = await listUsers(url);
  data.forEach((element) => {
    ul.insertAdjacentHTML(
      'beforeend',
      `
				<li id="${element.id}">
 					<p>Имя: ${element.name}</p>
          <p>Логин: ${element.username}</p>
          <p>Почта: ${element.email}</p>
					<button>Удалить</button>
				</li>

		`
    );
    localStorage[element.id] = JSON.stringify({ name: `${element.name}`, username: `${element.username}`, email: `${element.email}` });

  });
  const btns = document.querySelectorAll('button');;
  btns.forEach((btn) => {
    btn.addEventListener('click', (elem) => {
      btn.parentNode.remove(elem);
      localStorage.removeItem(btn.parentNode.id);
    });
  });
} catch (error) {
  console.error('Что-то пошло не так!');
}

// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.


const urlDog = 'https://dog.ceo/api/breeds/image/random';

const imgBlock = document.querySelector('.image-block');
const img = document.querySelector('.image-block > img');

const randomDog = async (urlDog) => {
  const res = await fetch(urlDog);
  const data = await res.json();
  imgBlock.insertAdjacentHTML(
    'beforeend',
    `
          <img src="${data.message}" alt="image: dog">

      `
  );

  return data;
}

try {

  await setInterval(() => {
    if (document.querySelector('.image-block > img')) {
      document.querySelector('.image-block > img').remove();
    }
    return randomDog(urlDog);
  }, 3000);
} catch (error) {
  console.error('Что-то пошло не так!');
}


