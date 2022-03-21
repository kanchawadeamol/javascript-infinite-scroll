const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`
  );

  let posts = await response.json();
  console.log(posts);

  posts.map((post, index) => {
    const htmlPost = `<div class="posts">
      <p class="post-id">${postCount++}</p>
      <h2 class="title">${post.title}</h2>
      <p class="post-info">${post.body} </p>
    </div>`;

    container.insertAdjacentHTML("beforeend", htmlPost);
  });
};

getPost();

const showData = () => {
  setTimeout(() => {
    pageCount++;
    getPost();
  }, 300);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    showData();
  }
});
