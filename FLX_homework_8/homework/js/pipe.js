function addOne(x) {
    return x + 1;
  }

  function pipe() {
    let value = arguments[0];
    let i = 1;
    for (; i < arguments.length; i++) {
        value = arguments[i](value);
    }
    return value;
}

pipe(1, addOne, addOne);