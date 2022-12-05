var myFullpage = new fullpage('#fullpage', {
  licenseKey: '',
  // Навигация

  menu: '#menu',
  lockAnchors: false,
  anchors: ['page1', 'page2', 'page3', 'page4'],
  navigation: false,

  navigationPosition: 'right',
  navigationTooltips: ['firstSlide', 'secondSlide'],
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',

  // Скроллинг
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: true,
  scrollHorizontally: true,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: true,
  scrollOverflowMacStyle: false,
  scrollOverflowReset: false,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  // Доступ
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  // Дизайн
  controlArrows: true,
  controlArrowsHTML: ['<div class=""></div>', '<div class=""></div>'],
  verticalCentered: true,
  sectionsColor: ['#ccc', 'red', 'green'],
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
  dropEffect: false,
  dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999 },
  waterEffect: false,
  waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
  cards: false,
  cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

  // Настроить селекторы
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,
  observer: true,
  credits: { enabled: true, label: 'Made with fullPage.js', position: 'right' },

  // Cобытия
  beforeLeave: function (origin, destination, direction, trigger) {},
  onLeave: function (origin, destination, direction, trigger) {},
  afterLoad: function (origin, destination, direction, trigger) {},
  afterRender: function () {},
  afterResize: function (width, height) {},
  afterReBuild: function () {},
  afterResponsive: function (isResponsive) {},
  afterSlideLoad: function (
    section,
    origin,
    destination,
    direction,
    trigger
  ) {},
  onSlideLeave: function (section, origin, destination, direction, trigger) {},
  onScrollOverflow: function (section, slide, position, direction) {},
});
