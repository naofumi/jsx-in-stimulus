import {React} from './jsx-runtime.ts'
import JsxPage from "./components/pages/jsx_page.jsx"
import './style.css'
import {Application} from "@hotwired/stimulus"

import SwitcherController from "./controllers/switcher_controller.jsx"
import RadioController from "./controllers/radio_controller.js"
import {SwitcherButtons} from "./components/SwitcherButtons.jsx"

window.Stimulus = Application.start()
Stimulus.register("switcher", SwitcherController)
Stimulus.register("radio", RadioController)

const jsxElement = <>
  <div data-controller="switcher">
    <div className="top_controls">
      <SwitcherButtons/>
    </div>

    <div data-switcher-target="outlet">
      <JsxPage/>
    </div>
  </div>
</>

document.querySelector("#jsx-root").replaceChildren(jsxElement)
