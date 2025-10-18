import {React} from './jsx-runtime.js'

function FooComponent() {
  return <div>Foo</div>
}

const jsx = <><h1 className="foobar" aria-busy="bar">
    Hello Vite! JSX
    <div style="font-size: 16px">Bar</div>
    <FooComponent />
  </h1></>
document.querySelector("#jsx").replaceChildren(jsx)
