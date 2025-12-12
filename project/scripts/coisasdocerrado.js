const teamMembers = [
  {
    id: 'gm',
    name: 'Gustavo',
    title: 'CEO',
    image: 'images/contact/ind_01.webp',
  },
  {
    id: 'ph',
    name: 'Philipe',
    title: 'Designer',
    image: 'images/contact/ind_02.webp',
  },
  {
    id: 'ad',
    name: 'Adriana',
    title: 'Marketing',
    image: 'images/contact/ind_03.webp',
  },
];

function displayTeam(members) {
  const teamContainer = document.getElementById('team-profiles');

  const htmlOutput = members
    .map(member => {
      return `
            <figure>
                <img src="images/contact/${member.image}" 
                     alt="Profile image of ${member.name}, ${member.title}" 
                     loading="lazy">
                <figcaption>${member.name}</figcaption>
            </figure>
        `;
    })
    .join('');

  if (teamContainer) {
    teamContainer.innerHTML = htmlOutput;
  }
}

function calculateWindChill(tempC, speed) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * tempC * Math.pow(speed, 0.16)
  );
}

function updateFooterDates() {
  const currentYearElement = document.getElementById('currentYear');
  const currentYear = new Date().getFullYear();

  if (currentYearElement) {
    currentYearElement.textContent = `©${currentYear}`;
  }

  const lastModifiedElement = document.getElementById('lastModified');
  const lastModifiedDate = document.lastModified;

  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateFooterDates();

  let tempC = 23;
  let speed = 8.5;

  if (tempC <= 10 && speed > 4.8) {
    const wcf = calculateWindChill(tempC, speed);
    document.getElementById('wcf').innerHTML = `${wcf.toFixed(1)} °C`;
  } else {
    document.getElementById('wcf').innerHTML = 'N/A';
  }

  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');

      const isExpanded =
        menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
  }

  if (document.getElementById('team-profiles')) {
    displayTeam(teamMembers);
  }
});
