(function(){
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var icon = document.getElementById('themeIcon');
  var label = document.getElementById('themeLabel');

  function render(theme){
    if(theme === 'dark'){
      icon.textContent = '☀️';
      label.textContent = 'Light';
    } else {
      icon.textContent = '🌙';
      label.textContent = 'Dark';
    }
  }

  render(root.getAttribute('data-theme'));

  btn.addEventListener('click', function(){
    var current = root.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    render(next);
  });
})();