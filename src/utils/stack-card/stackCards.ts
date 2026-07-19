import { Util } from './domUtils';

export class StackCards {
  element: HTMLElement;
  items: HTMLCollectionOf<Element>;
  scrollingFn: (() => void) | false = false;
  scrolling = false;
  marginY: number = 0;
  elementHeight = 0;
  cardTop = 0;
  cardHeight = 0;
  windowHeight = 0;

  constructor(element: HTMLElement) {
    this.element = element;
    this.items = this.element.getElementsByClassName('js-stack-cards__item');
    this.initStackCardsEffect();
    this.initStackCardsResize();
  }

  private initStackCardsEffect(): void {
    this.setStackCards();
    const observer = new IntersectionObserver(this.stackCardsCallback.bind(this), { threshold: [0, 1] });
    observer.observe(this.element);
  }

  private initStackCardsResize(): void {
    this.element.addEventListener('resize-stack-cards', () => {
      this.setStackCards();
      this.animateStackCards();
    });
  }

  private stackCardsCallback = (entries: IntersectionObserverEntry[]): void => {
    if (entries[0].isIntersecting) {
      if (this.scrollingFn) {
        return;
      } // listener for scroll event already added
      this.stackCardsInitEvent();
    } else {
      if (!this.scrollingFn) {
        return;
      } // listener for scroll event already removed
      window.removeEventListener('scroll', this.scrollingFn);
      this.scrollingFn = false;
    }
  };

  private stackCardsInitEvent(): void {
    this.scrollingFn = this.stackCardsScrolling.bind(this);
    window.addEventListener('scroll', this.scrollingFn);
  }

  private stackCardsScrolling(): void {
    if (this.scrolling) {
      return;
    }
    this.scrolling = true;
    window.requestAnimationFrame(this.animateStackCards.bind(this));
  }

  private setStackCards(): void {
    // store wrapper properties
    const computedStyle = getComputedStyle(this.element);
    this.marginY = this.getIntegerFromProperty(computedStyle.getPropertyValue('--stack-cards-gap'));
    this.elementHeight = this.element.offsetHeight;

    // store card properties
    const cardStyle = getComputedStyle(this.items[0]);
    const topOffset = cardStyle.getPropertyValue('top');

    // Handle different top offset units (vh, px, etc.)
    if (topOffset.includes('vh')) {
      this.cardTop = Math.floor((parseFloat(topOffset) / 100) * window.innerHeight);
    } else {
      this.cardTop = Math.floor(parseFloat(topOffset));
    }

    // Get actual card height from rendered element
    const firstItem = this.items[0] as HTMLElement;
    this.cardHeight = firstItem.offsetHeight || 300;

    // store window property
    this.windowHeight = window.innerHeight;

    // Set up initial positioning for sticky cards
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i] as HTMLElement;
      if (isNaN(this.marginY)) {
        item.style.transform = 'none';
      } else {
        // Set initial transform for stacking
        item.style.transform = 'translateY(' + this.marginY * i + 'px)';
      }
    }
  }

  private getIntegerFromProperty(property: string): number {
    const node = document.createElement('div');
    node.setAttribute('style', 'opacity:0; visibility: hidden; position: absolute; height:' + property);
    this.element.appendChild(node);
    const height = parseInt(getComputedStyle(node).getPropertyValue('height'));
    this.element.removeChild(node);
    return height;
  }

  private animateStackCards(): void {
    if (isNaN(this.marginY)) {
      // --stack-cards-gap not defined - do not trigger the effect
      this.scrolling = false;
      return;
    }

    const top = this.element.getBoundingClientRect().top;

    if (
      this.cardTop -
        top +
        this.windowHeight -
        this.elementHeight -
        this.cardHeight +
        this.marginY +
        this.marginY * this.items.length >
      0
    ) {
      this.scrolling = false;
      return;
    }

    for (let i = 0; i < this.items.length; i++) {
      // use only scale
      const scrolling = this.cardTop - top - i * (this.cardHeight + this.marginY);
      if (scrolling > 0) {
        const scaling = i === this.items.length - 1 ? 1 : (this.cardHeight - scrolling * 0.05) / this.cardHeight;
        (this.items[i] as HTMLElement).style.transform =
          'translateY(' + this.marginY * i + 'px) scale(' + scaling + ')';
      } else {
        (this.items[i] as HTMLElement).style.transform = 'translateY(' + this.marginY * i + 'px)';
      }
    }

    this.scrolling = false;
  }
}

// Initialize StackCards
export function initStackCards(): void {
  const stackCards = document.getElementsByClassName('js-stack-cards');
  const intersectionObserverSupported =
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype;
  const reducedMotion = Util.osHasReducedMotion();

  if (stackCards.length > 0 && intersectionObserverSupported && !reducedMotion) {
    const stackCardsArray: StackCards[] = [];
    for (let i = 0; i < stackCards.length; i++) {
      stackCardsArray.push(new StackCards(stackCards[i] as HTMLElement));
    }

    let resizingId: NodeJS.Timeout | false = false;
    const customEvent = new CustomEvent('resize-stack-cards');

    window.addEventListener('resize', () => {
      if (resizingId) {
        clearTimeout(resizingId);
      }
      resizingId = setTimeout(() => {
        for (let i = 0; i < stackCardsArray.length; i++) {
          stackCardsArray[i].element.dispatchEvent(customEvent);
        }
      }, 500);
    });
  }
}
