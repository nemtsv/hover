# `@rehooks/hover`

> React hook for hover

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/hover
```

## Usage

```js
import { useRef } from 'react';
import useHover from '@rehooks/hover';

function MyComponent() {
  let ref = useRef(null);
  let value = useHover(ref);
  
  return <div ref={ref}>
    {value ? 'Is hovered' : 'Is not hovered'}
  </div>;
}
```
