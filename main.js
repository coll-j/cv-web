var slideIndex = 0, pageIndex = 0, lastScrollTop = 0;
showSlides();
showPageNumb(0);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("profile_pic_cont");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function showPage() {
  var i;
  var pages = document.getElementsByClassName("page");
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";  
  }
  if (pageIndex >= pages.length) {pageIndex = pages.length - 1}
  if (pageIndex < 0) {pageIndex = 0}    
  pages[pageIndex].style.display = "block";  
}

function showPageNumb(index) {
  pageIndex = index;
  showPage();
}

function arrowDownClicked()
{
  pageIndex++;
  showPage();
  console.log("down clicked");
}

function arrowUpClicked()
{
  pageIndex--;
  showPage();
  console.log("down clicked");
}

var modal = document.getElementById("myModal");
var modal_content = document.getElementById("modal-paragraph");

function copySpan(id)
{
  var copyText = document.getElementById(id);
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  var text = (id == "email")? "E-mail" : "Phone number";
  text += " coppied."
  modal_content.innerHTML = text;
  modal.style.display = "block";
  setTimeout(() => {modal.style.display = "none"}, 2000)
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onwheel = function(event) {
  var currentScrollPos = window.pageYOffset;
  if (event.deltaY < 0) { //scroll up
    this.pageIndex--;
    this.showPage();
  } else { // scroll down
    this.pageIndex++;
    this.showPage();
  }
  this.lastScrollTop = currentScrollPos;
}

var githubText = document.getElementById("github-text");
var gitlabText = document.getElementById("gitlab-text");

function hover(element) {
  if(element.id == "github" || element.id == "github-text") 
  {
    element.setAttribute('src', 'assets/github-logo-white.png');
    githubText.style.color = 'white';
  }
  else 
  {
    element.setAttribute('src', 'assets/gitlab-logo-white.png');
    gitlabText.style.color = 'white';
  }
}

function unhover(element) {
  if(element.id == "github" || element.id == "github-text") 
  {
    element.setAttribute('src', 'assets/github-logo-black.png');
    githubText.style.color = 'black';
  }
  else 
  {
    element.setAttribute('src', 'assets/gitlab-logo-black.png');
    gitlabText.style.color = 'black';
  }

}