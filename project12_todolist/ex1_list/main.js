const li = Array.from(document.querySelectorAll('li button'));

const removeItem = (e) => {
/*    //e.target.parentNode.remove();
    e.target.parentNode.style.textDecoration = "line-through";
    e.target.remove();
*/
    const index = e.target.dataset.key;
    const item = document.querySelector(`li[data-key = "${index}"]`);
    item.remove();
}
li.forEach(item => item.addEventListener('click', removeItem));

