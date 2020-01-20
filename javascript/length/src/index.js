import { CONSTANTS } from './CONSTANTS'

export class Length {
  value
  unit

  constructor(value, unit) {
    this.value = value
    this.unit = unit
  }

  getValue() {
    return this.value
  }

  getUnit() {
    return this.unit
  }

  parseTo(unit) {
    let result = this
    if (this.unit === CONSTANTS.YARD) {
      if (unit === CONSTANTS.FOOT) {
        result = new Length(this.value * CONSTANTS.yard_to_foot, unit)
      } else if (unit === CONSTANTS.INCH) {
        result = new Length(this.value * CONSTANTS.yard_to_inch, unit)
      }
    }

    if (this.unit === CONSTANTS.INCH) {
      if (unit === CONSTANTS.YARD) {
        result = new Length(this.value / CONSTANTS.yard_to_inch, unit)
      } else if (unit === CONSTANTS.FOOT) {
        result = new Length(this.value / CONSTANTS.foot_to_inch, unit)
      }
    }

    if (this.unit === CONSTANTS.FOOT) {
      if (unit === CONSTANTS.YARD) {
        result = new Length(this.value / CONSTANTS.yard_to_foot, unit)
      } else if (unit === CONSTANTS.INCH) {
        result = new Length(this.value * CONSTANTS.foot_to_inch, unit)
      }
    }

    return result
  }
}
