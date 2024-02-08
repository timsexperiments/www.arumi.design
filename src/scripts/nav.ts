function createNavIdSelector(id?: string) {
  if (!id) {
    return '[data-nav-id]';
  }
  return `[data-nav-id=${id}]`;
}

function getNavigators(): HTMLElement[] {
  return Array.from(document.querySelectorAll(createNavIdSelector()));
}

function getNavigatorSection(navigator: HTMLElement) {
  const sectionId = navigator.dataset.navId;
  return document.querySelector(`#${sectionId}`)!;
}

function getNavigatorLink(navigator: HTMLElement) {
  const navigatorId = navigator.dataset.navSetActive;
  if (!navigatorId) {
    return navigator;
  }
  return document.querySelector(`#${navigatorId}`)!;
}

function getNavigatorScrollToElement(navigator: HTMLElement) {
  let sectionId = navigator.dataset.navScrollTo;
  if (!sectionId) {
    sectionId = navigator.dataset.navId;
  }
  return document.querySelector(`#${sectionId}`)!;
}

function setUpNavigator(navigator: HTMLElement) {
  const section = getNavigatorScrollToElement(navigator);
  navigator.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' });
  });
  return navigator;
}

function sectionNavigator(section: Element) {
  const id = section.id;
  const navigatorSelector = createNavIdSelector(id);
  return document.querySelector<HTMLElement>(navigatorSelector)!;
}

const observer = new IntersectionObserver(
  (entries, _) => {
    let anyIntersecting = false;
    entries.forEach((entry) => {
      const navigator = sectionNavigator(entry.target);
      if (entry.isIntersecting && !anyIntersecting) {
        anyIntersecting = true;
        getNavigatorLink(navigator).classList.add('active');
      } else {
        getNavigatorLink(navigator).classList.remove('active');
      }
    });
  },
  { rootMargin: '-40% 0% -40% 0%', threshold: 0 },
);

getNavigators()
  .map(setUpNavigator)
  .map(getNavigatorSection)
  .forEach((element) => observer.observe(element));

export {};
