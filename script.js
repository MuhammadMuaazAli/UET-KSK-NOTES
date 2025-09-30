const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
    const content = document.getElementById('content');
    const links = document.querySelectorAll('.sidebar a');

    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      content.classList.toggle('shifted');
    });

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const semesterId = link.getAttribute('data-semester');
        document.querySelectorAll('.semester-section').forEach(section => {
          section.classList.remove('active');
        });
        document.getElementById(semesterId).classList.add('active');
        if (window.innerWidth < 768) {
          sidebar.classList.remove('active');
          content.classList.remove('shifted');
        }
      });
    });