const animateInElements =
  document.querySelectorAll<HTMLElement>('[data-animate-in]');

const ANIMATION_CLASS = 'animate';

const animationTargets = [];
for (const element of animateInElements.values()) {
  if (!element.dataset.animateInElement) {
    animationTargets.push(element);
  }

  const animateInElementId = element.dataset.animateInElement;
  if (!animateInElementId) continue;
  const animateInElement = document.querySelector(`#${animateInElementId}`);
  if (animateInElement) {
    animationTargets.push(animateInElement);
  }
}

const animationObserver = new IntersectionObserver((entries, _observer) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .filter((entry) => !(entry.target as HTMLElement).dataset.animateInElement)
    .forEach((entry) => {
      startAnimation(entry.target as HTMLElement);
      const entryId = entry.target.id;
      if (entryId) {
        findAnimationElements(entryId).forEach((element) =>
          startAnimation(element),
        );
      }
    });

  entries.filter(
    (entry) =>
      !entry.isIntersecting &&
      entry.target.classList.contains(
        (entry.target as HTMLElement).dataset.animateIn!,
      ),
  );
});

function startAnimation(element: HTMLElement) {
  element.classList.add(ANIMATION_CLASS);
}

function findAnimationElements(targetId: string) {
  return document.querySelectorAll<HTMLElement>(
    `[data-animate-in-element=${targetId}]`,
  );
}

animationTargets.forEach((element) => animationObserver.observe(element));
