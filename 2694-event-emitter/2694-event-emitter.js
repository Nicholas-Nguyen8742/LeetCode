class EventEmitter {
    map = new Map();
  subscribe(event, cb) {
      if (!this.map.has(event)) {
          this.map.set(event, [cb]);
      } else {
          this.map.set(event, [...this.map.get(event), cb]);
      }
    return {
        unsubscribe: () => {
            const value = this.map.get(event);
            const position = value.findIndex(cb);
            value.splice(position, 1);
            this.map.set(event, value);
        }
    };
  }

  emit(event, args = []) {
      let value = this.map.get(event);
      if (value == null) {
          value = [];
      }
      return value.map((fn) => fn(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */