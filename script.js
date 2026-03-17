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
    "Bezpieczeństwo": `Zwiększę liczbę patroli w kluczowych rejonach miasta oraz wprowadzę skuteczne działania prewencyjne. 
Postawię na lepsze wyszkolenie funkcjonariuszy, współpracę z mieszkańcami oraz programy zapobiegające przestępczości wśród młodzieży i seniorów. 
Moim celem jest jedno: realne bezpieczeństwo w całym Los Santos.`,

    "Zaufanie i współpraca z mieszkańcami": `Chcę zbudować realne zaufanie między LSSD a mieszkańcami poprzez otwartą komunikację, obecność funkcjonariuszy w terenie oraz szybkie reagowanie na zgłoszenia. Funkcjonariusz ma być widoczny, dostępny i skuteczny – bo tylko współpraca z ludźmi pozwala naprawdę ograniczyć przestępczość.`,

    "Nowoczesna Policja": `Zainwestuję w nowoczesne technologie: systemy monitoringu, usprawnioną komunikację, centrum dowodzenia i cyfrowe raportowanie. 
Funkcjonariusze będą lepiej wyposażeni i przygotowani, co przełoży się na szybsze reakcje i większą skuteczność działań.`,

    "Sprawne dowodzenie i jasne zasady": `Wprowadzę przejrzyste procedury działania w każdej sytuacji – od patroli po akcje wysokiego ryzyka. 
Każdy funkcjonariusz będzie wiedział, jakie ma zadanie, a dowodzenie będzie szybkie, konkretne i skuteczne. 
To klucz do bezpieczeństwa i profesjonalizmu.`,

    "Siła jednostki": `Postawię na rozwój funkcjonariuszy poprzez regularne szkolenia, zdobywanie specjalizacji oraz wsparcie zarówno dla nowych, jak i doświadczonych członków jednostki.

Każdy funkcjonariusz będzie miał możliwość wybrania własnej ścieżki rozwoju – czy to w działaniach operacyjnych, szkoleniowych czy patrolowych. 
Dzięki temu LSSD będzie jednostką, w której ludzie mogą rozwijać swoje umiejętności i realnie wzmacniać cały zespół.`
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