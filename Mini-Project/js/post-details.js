// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт
//     - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let postId = url.searchParams.get('postId');

let divWrap = document.createElement('div');
divWrap.className = 'wrap';
document.body.appendChild(divWrap);

let divWrapPost = document.createElement('div');
divWrapPost.className = 'head_post';

let divWrapComments = document.createElement('div');
divWrapComments.className = 'head_comments';

divWrap.append(divWrapPost, divWrapComments);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => posts.forEach(posts=>
        {
            if (postId === (posts.id+"")) {
                // let postDiv = document.createElement('div');
                // postDiv.className = 'post';

                let postH3 = document.createElement('h2');
                postH3.className = 'post-title';

                let postP2 = document.createElement('p');
                postP2.className = 'post-body';

                postH3.innerText = `${posts.id}     ${posts.title}`;
                postP2.innerText = `${posts.body}`;

                divWrapPost.append(postH3, postP2);
                // document.body.append(postDiv);
                // divWrapPost.append(postDiv);
            }

        }

    ))

    .then(resp=>
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => comments.forEach(comments=>
            {
                let divComments = document.createElement('div');
                divComments.className = 'comments';

                let h3CommentName = document.createElement('h3');
                h3CommentName.className = 'comment-name';
                h3CommentName.innerText = `${comments.name}`;

                let h4CommentEmail = document.createElement('h4');
                h4CommentEmail.className = 'comment-email';
                h4CommentEmail.innerText = `${comments.email}`;


                let pComment2 = document.createElement('p');
                pComment2.className = 'body-comment';
                pComment2.innerText = `${comments.body}`;

                divComments.append(h3CommentName,h4CommentEmail,pComment2);
                divWrapComments.append(divComments);

            })))