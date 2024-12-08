function createElement(HTML) {
  const el = document.createElement("div");
  el.insertAdjacentHTML("beforeend", HTML);
  return el.firstElementChild;
}

class Counter {
  _state = {
    count: 0,
  };

  constructor(Button) {
    this._Button = Button;
    this._init();
  }

  _init() {
    this._element = createElement(this._getTemplate());
    this._render();
  }

  _getTemplate() {
    return `<div class="counter">
        <span class="counter__title">0</span>
        <div class="counter__buttons"></div>
				</div>`;
  }

  _handlerMinus() {
    this._setStateCount(this._state.count - 1);
    this._render();
  }

  _handlerReset() {
    this._setStateCount(0);
    this._render();
  }

  _handlerPlus() {
    this._setStateCount(this._state.count + 1);
    this._render();
  }

  _generateButtons() {
    const buttons = [
      new this._Button({ text: "minus", type: "minus", disabled: false, handler: this._handlerMinus.bind(this) }).element,
      new this._Button({ text: "reset", type: "reset", disabled: false, handler: this._handlerReset.bind(this) }).element,
      new this._Button({ text: "plus", type: "plus", disabled: false, handler: this._handlerPlus.bind(this) }).element,
    ];

    return buttons;
  }

  _render() {
    this._element.querySelector(".counter__buttons").textContent = '';
    this._element.querySelector(".counter__buttons").append(...this._generateButtons());
    this._element.querySelector(".counter__title").textContent = this._state.count;
  }

  _setStateCount(value) {
    this._state.count = value;
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
