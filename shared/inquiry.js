export const MAX_PHOTOS = 3;
export const MAX_PHOTO_BYTES = 700_000;
export const MAX_REQUEST_BYTES = 3_000_000;
export const MAX_ORIGINAL_PHOTO_BYTES = 15_000_000;
// Accept one ordinary mailbox only; never recipient lists or header characters.
export function validEmail(value) {
 const parts = value.split("@");
 return value.length <= 254 && parts.length === 2 && parts[0].length <= 64 &&
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*$/.test(parts[0]) &&
  /^(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/.test(parts[1]);
}
