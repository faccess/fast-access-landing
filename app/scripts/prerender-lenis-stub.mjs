/** No-op Lenis stand-in for build-time prerendering (jsdom has no real scrolling). */
export default class LenisStub {
  constructor() {}
  on() {}
  off() {}
  raf() {}
  scrollTo() {}
  resize() {}
  start() {}
  stop() {}
  destroy() {}
}
