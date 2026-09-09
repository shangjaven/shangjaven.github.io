(function () {
  var browser = document.getElementById('publication-browser');
  if (!browser) return;

  var selected = document.getElementById('papers-selected');
  browser.querySelectorAll('#papers-full .publication-group').forEach(function (group) {
    var papers = group.querySelectorAll('strong.first-author');
    if (!papers.length) return;
    selected.appendChild(group.querySelector('h3').cloneNode(true));
    var list = document.createElement('ul');
    papers.forEach(function (paper) {
      list.appendChild(paper.closest('li').cloneNode(true));
    });
    selected.appendChild(list);
  });
  selected.querySelectorAll('[id]').forEach(function (element) {
    element.removeAttribute('id');
  });

  var tabs = Array.from(browser.querySelectorAll('[role="tab"]'));
  function activate(tab) {
    tabs.forEach(function (item) {
      var active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { activate(tab); });
    tab.addEventListener('keydown', function (event) {
      var next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[next]);
      tabs[next].focus();
    });
  });
}());
