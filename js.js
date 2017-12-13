var title = document.querySelectorAll('img[title]'); 
var allTitle = title.length;
for (i=0; i<allTitle; i++){
    title[i].removeAttribute('title');
}
