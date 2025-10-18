import {React} from "../jsx-runtime.ts"

export function SwitcherButtons() {
  return <ul className="buttons_row" data-controller="radio">
    <li>
      <div className="button button--primary-outline"
           data-action="click->switcher#switch click->radio#select"
           data-radio-target="checkable"
           data-switcher-toId-param="jsx-page"
           aria-checked="true">JSX Page
      </div>
    </li>
    <li>
      <div className="button button--primary-outline"
           data-action="click->switcher#switch click->radio#select"
           data-radio-target="checkable"
           data-switcher-toId-param="tsx-page">TSX Page
      </div>
    </li>
  </ul>
}
