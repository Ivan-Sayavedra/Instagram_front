const likeAction = () => {
  let likebtn = document.getElementById("likebtn");
  function toggle() {
    likebtn.classList.toggle("like");
  }
  likebtn.addEventListener("click", toggle);
};
export default likeAction;
