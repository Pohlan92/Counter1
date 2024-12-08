function createElement(HTML) {
  const el = document.createElement("div");
  el.insertAdjacentHTML("beforeend", HTML);
  return el.firstElementChild;
}

class Counter {
  constructor(Button) {
    this._Button = Button;
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

class Button {
  constructor({ text, type, disabled, handler }) {
    this._text = text;
    this._type = type;
    this._disabled = disabled;
    this._handler = handler;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._addListeners();
  }

  _addListeners() {
    this._element.addEventListener("click", () => {
      this._handler();
    });
  }

  _getTemplate() {
    return `<button class="btn btn--${this._type}" ${this._disabled ? "disabled" : ""}>${this._text}</button>`;
  }

  get element() {
    return this._element;
  }
}

const root = document.querySelector(".root");
root.insertAdjacentElement("beforeend", new Counter(Button).element);
