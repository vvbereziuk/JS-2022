// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let id = url.searchParams.get('id');

let userInfo = document.createElement('div');
userInfo.className = 'user-info';


let divTitle = document.createElement('div');
divTitle.className = 'title-info';

let header = document.createElement('h2');
header.className = 'header';
header.innerText = 'User information';
userInfo.append(header);

let divWrap = document.createElement('div');
divWrap.className = 'wrap';
divWrap.append(userInfo,divTitle)
document.body.append(divWrap);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(obj =
        function arrayUsers(array) {
            for (const key in array) {
                if (typeof array[key] !== 'object') {
                    let divElement = document.createElement('div');
                    divElement.className = 'titles';
                    divElement.innerText = `${key} - ${array[key]}`;
                    userInfo.append(divElement);
                } else {
                    arrayUsers(array[key]);
                }
            }
        }
    )

    .then(resp =>
    {let userPostsTitleButton = document.createElement('button');
        userPostsTitleButton.className = 'posts-title';
        userPostsTitleButton.innerText = 'Post of current users';
        userInfo.append(userPostsTitleButton);
        userPostsTitleButton.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(titlePosts => {
                        for (const titlePost of titlePosts) {
                            let titlePostDiv = document.createElement('div');
                            titlePostDiv.className = 'div-post';

                            let pTitlePost = document.createElement('p');
                            pTitlePost.className = 'p-post';
                            pTitlePost.innerText = titlePost.title;

                            let titlePostBtn = document.createElement('button');
                            titlePostBtn.innerText = 'Post';
                            titlePostBtn.className = 'post';

                            titlePostBtn.onclick = function () {
                                document.location.href = `post-details.html?postId=${titlePost.id}`;
                            }
                            titlePostDiv.append(pTitlePost,titlePostBtn);
                            divTitle.append(titlePostDiv);
                            userPostsTitleButton.disabled = true;
                        }
                    }
                )
        }})


