# Hyfi
Hyfi is a utility for building and manipulating HTML documents from JavaScript.\
less boilerplate, zero dependency, built on top of standard HTML references.

```javascript
import { html } from "hyfi";

const Count = () => {

    let count = 0, addCount = () => count++;
    
    return () => html`
        <div>
            <p>You clicked ${count} times</p>
            <button onclick=${addCount}>
                Click me
            </button>
        </div>
    `;
}

// create HTML Element

document.body.append(html.createElement(Count));

// or define as Web Components, without class literals

customElements.define("something-reactive", html.createClass(Count));
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/js-qfh42g?file=index.js)

### installation (npm)
```
npm i hyfi
```

### build from source
```
git clone https://github.com/ihasq/hyfi
npm run build
```

### usage
#### Data bindings from child to parent
```javascript
import { html, css } from "hyfi";

const Counter = () => {

    let count = 0,
        addCount = () => count++;

    return () => html`
        <button onclick=${addCount} count=${count}> <!-- go public as top-level attributes -->
            I got clicked ${count} times!
        </button>
    `;
}

document.body = html.createElement($ => () => html`
    <body>
        <p>👇 She got clicked ${$(Counter).count} times</p>
        <${Counter}/>
        <button onclick=${$(Counter).onclick}> <!-- call addCount() in Counter -->
            Bring some more
        </button>
    </body>
`);
```
#### Array.prototype.map()
```javascript
/**
 *  $ {
 *      element: raw element reference includes querySelector or getAttribute
 *      onclick, onmousedown... setter of events, not like standard on-action event listener
 *  }
 **/
const TodoList = $ => {

    let todo = [],
        addTodo = () => todo.push($`input[type="text"]`.value);
    // ☝ same as todo.push(Number($.element.querySelector('input[type=text]').getAttribute('value'))) 🥵🥵🥵

    return () => html`
        <div>
            <ul>${todo.map(el => html`
                <li>${el}</li>
            `)}</ul>
            <input type=text/>
            <input type=button onclick=${addTodo}/>
        </div>
    `;
}
```
#### reserve document
```javascript
const Canvas2dDrawer = $ => {

    const canvas = $`canvas`.element;
    // runs document.createElement('canvas') when before rendering
    const c2d = canvas.getContext("2d");
    // ...

    return () => html`
        <div>
            <canvas></canvas> <!-- will appended -->
        </div>
    `;
}
```