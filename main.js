function createElement(HTML) {
  const el = document.createElement("div");
  el.insertAdjacentHTML("beforeend", HTML);
  return el.firstElementChild;
}

class Counter {
  constructor() {
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
  }

  _getTemplate() {
    return `<div class="counter">
        <span class="counter__title">0</span>
        <div class="counter__buttons"></div>
				</div>`;
  }

  get element() {
    return this._element;
  }
}
