import { AbstractControl } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class PasswordValidator {

  public static strong(control: AbstractControl): ValidationResult | null {
    let hasNumber = /\d/.test(control.value);
    let hasUpper = /[A-Z]/.test(control.value);
    const valid = hasNumber && hasUpper;
    if (!valid) {
      // return what´s not valid
      return { strong: true };
    }
    return null;
  }
}
