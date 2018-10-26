'use strict';
let test = require('ava');
let { createElement: h, useRef } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useHover = require('./');

test(t => {
  function Component() {
    let ref = useRef(null);
    let value = useHover(ref);
    return h('div', { ref }, [
      value ? 'hovered' : 'not hovered'
    ]);
  }

  let input = ReactTestRenderer.create(h(Component));

  let div = input.root.find(node => node.type === 'div')

  t.deepEqual(div.children, [ 'not hovered' ]);
});
