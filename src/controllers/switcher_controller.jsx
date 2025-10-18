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
