const getButton = document.getElementById("get");
const postButton = document.getElementById("post");

getButton.addEventListener("click", () => {
  fetch("http://localhost:8080/feed/post")
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});

postButton.addEventListener("click", () => {
  fetch("http://localhost:8080/feed/post", {
    method: "POST",
    body: JSON.stringify({
      title: "A codepen Post",
      content: "Body of codepen post"
    }),
    headers: {
        'Content-Type' : 'application/json'
        }
  })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});
