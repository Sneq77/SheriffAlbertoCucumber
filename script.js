const modal = document.getElementById('modal');
const modalTitle = modal.querySelector('h2');
const modalText = modal.querySelector('p');
const closeBtn = modal.querySelector('.close');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Pobieramy dane z klikniętego kafelka
        modalTitle.textContent = card.querySelector('h3').textContent;
        modalText.textContent = card.querySelector('p').textContent;
        modal.style.display = 'flex';
    });
});

// Zamknięcie po kliknięciu X
closeBtn.addEventListener('click', () => modal.style.display = 'none');

// Zamknięcie po kliknięciu poza modal-content
window.addEventListener('click', e => {
    if(e.target === modal) modal.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = modal.querySelector('h2');
    const modalText = modal.querySelector('p');
    const closeBtn = modal.querySelector('.close');

    // Dodatkowe pełne opisy dla każdego kafelka
    const fullTexts = {
        "Bezpieczeństwo": "Bezpieczeństwo:\n\nZwiększenie patroli w newralgicznych dzielnicach, wprowadzenie nowoczesnych systemów monitoringu, szkolenia dla funkcjonariuszy, współpraca z mieszkańcami, programy prewencyjne dla młodzieży i seniorów. Celem jest stworzenie bezpiecznego Los Santos dla wszystkich obywateli.",
        "Wsparcie dla społeczności": "Wsparcie dla społeczności:\n\nProgramy dla rodzin, młodzieży i seniorów, organizacja wydarzeń społecznych, wsparcie dla lokalnych inicjatyw, szkolenia dla młodych liderów, budowanie bezpiecznej i zintegrowanej społeczności.",
        "Nowoczesna Policja": "Nowoczesna Policja:\n\nInwestycje w technologie: monitoring, szybka komunikacja, centrum dowodzenia, cyfrowe raportowanie, wyposażenie patrolowe, szkolenia z nowych systemów, aby policja działała sprawniej i skuteczniej.",
        "Kolejny1": "Tekst1.",
        "Kolejny2": "Tekst2"
    };

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            modalTitle.textContent = title;
            modalText.textContent = fullTexts[title]; // tutaj wstawiamy pełny tekst
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    window.addEventListener('click', e => {
        if(e.target === modal) modal.style.display = 'none';
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500; // czas scrollu w ms (tutaj 1000ms = 1s)
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * percent);
      if (progress < duration) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  });
});