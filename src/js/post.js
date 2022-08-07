// Fx para capturar el input y convertirlo en post
const postAction = () => {
  const postForm = document.getElementById("post-form");
  const postBtn = document.getElementById("post-btn");
  const postInput = document.getElementById("post-input-text");
  const feed = document.getElementById("feed");

  let username = "UserName";

  postBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let text = postInput.value;
    if (text) {
      const newPost = `
      <p>
        <b>${username}</b> ${text}
      </p>
    `;
      feed.innerHTML += newPost;
      postForm.reset();
    }
  });
};
export default postAction;
