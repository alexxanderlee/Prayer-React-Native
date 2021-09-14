/* eslint-disable */
import { FieldValidator } from 'final-form';
import { FieldRenderProps } from 'react-final-form';

const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const validators = {
  required: (value: string) => (typeof value !== 'string') ? 'Required' : (value.trim() ? undefined : 'Required'),
  validateEmail: (value: string) => value.match(emailPattern) ? undefined : 'Please use a valid email address',
};

export const composeValidators = (...validators: FieldValidator<any>[]) => (value: any) => 
  validators.reduce((error, validator) => error || validator(value, {}), undefined);

export default validators;