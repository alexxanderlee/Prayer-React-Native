/* eslint-disable */
const validators = {
  required: (value: string) => (typeof value !== 'string') ? 'Required' : (value.trim() ? undefined : 'Required'),
};

export default validators;