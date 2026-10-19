export const MAX_REQUEST_BYTES = 16_000;
// Accept one ordinary mailbox only; never recipient lists or header characters.
export function validEmail(value) {
 const parts = value.split("@");
 return value.length <= 254 && parts.length === 2 && parts[0].length <= 64 &&
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*$/.test(parts[0]) &&
  /^(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/.test(parts[1]);
}
