var likeBtn = document.querySelector('.ico');

likeBtn.addEventListener('click', function() {
     likeBtn.classList.toggle('liked');
});

document.addEventListener('keydown', function(key){
   if(key.key === 'l' || key.key === 'L') {
      likeBtn.classList.toggle('liked');
   }
});