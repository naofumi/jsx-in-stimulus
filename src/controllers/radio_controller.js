// src/controllers/radio_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkable"]

  select(event) {
    this.checkableTargets.forEach(target => target.ariaChecked = "false")
    event.currentTarget.ariaChecked = "true"
  }
}
