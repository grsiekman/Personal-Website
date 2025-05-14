document.addEventListener('DOMContentLoaded', () => {
  let photo = document.getElementById('id_photo');
  const bizPhotoSrc = 'img/IMG_6571.png';
  const bizPhotoAlt = 'Picture of Greg Siekman smiling, wearing a white dress shirt and blue blazer';
  const socialPhotoSrc = 'img/socialpic.png';
  const socialPhotoAlt = 'Picture of Greg Siekman on the other side of a screen, looking into the distance holding his brown tabby cat Chauncey who is doing the same.';

  var path = window.location.pathname;
  var page = path.split("/").pop();

  if(page == "links.html") {
    photo = document.getElementById('id_photo_links');
    photo.src = socialPhotoSrc;
    photo.alt = socialPhotoAlt;
  } else {
    photo.src = bizPhotoSrc;
    photo.alt = bizPhotoAlt;
  }
});