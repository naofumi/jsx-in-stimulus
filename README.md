## JSX-in-Stimulus

This is a PoC project to show how JSX can be used in Stimulus.

The page shown below uses Stimulus to handle the button clicks and renders JSX from the Stimulus controller to switch the page contents.

![image](./public/a9h2rq.gif)

## Setup

This is a Vite project. 

### Running the project

```sh
npm run dev
```

See package.json for other scripts.

## Notes

### No React

JSX is parsed to a set of `React.createElement` and `React.Fragment` function calls by the esbuild/Vite bundler.
We then use `src/jsx-runtime.ts`
to replace the `React` function calls with `document.createElement()` and `element.appendChild()` calls.
The resulting HTMLElement or DocumentFragment is inserted into the DOM with `element.replaceChildren()`.

`src/jsx-runtime.ts` is a small and straightforward module and only handles DOM creation.   

### How the Stimulus controller looks.

Below is the Stimulus controller where we render JSX-generated DOM elements.
Here we use [params passed in from Stimulus actions](https://stimulus.hotwired.dev/reference/actions#action-parameters)
to tell the controller which JSX component to render.

Rendering is done by inserting the generated-DOM elements using `element.replaceChildren()`.

```js
// src/controllers/switcher_controller.js
import {React} from '../jsx-runtime.ts'
import {Controller} from "@hotwired/stimulus"
import TsxPage from "../components/pages/tsx_page.tsx"
import JsxPage from "../components/pages/jsx_page.jsx"

export default class extends Controller {
  static targets = ["outlet"]

  switch(event) {
    const toId = event.params.toId

    this.outletTarget.replaceChildren(<>{
      toId === 'jsx-page'
      ? <JsxPage/>
      : toId === 'tsx-page'
        ? <TsxPage/>
        : null
    }</>)
  }
}
```
