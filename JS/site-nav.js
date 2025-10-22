document.addEventListener('DOMContentLoaded', ()=>{
  const toggle = document.querySelectorAll('.nav-toggle');
  toggle.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const links = btn.parentElement.querySelector('#site-links');
      if(links) links.classList.toggle('show');
    });
  });
});
