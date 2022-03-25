export default function createDisplayLikeBox() {
  const likeBox = document.createElement('div');
  const iconElem = document.createElement('i');
  const boxNameElem = document.createElement('span');

  iconElem.classList.add(...["fas", "fa-heart"]);
  likeBox.classList.add('like-box');
  boxNameElem.classList.add('screen-reader-text');
  
  boxNameElem.textContent = "좋아요";

  likeBox.appendChild(iconElem);
  likeBox.appendChild(boxNameElem);
  return likeBox;
}