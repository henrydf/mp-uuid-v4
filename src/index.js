import {v4} from 'uuid';
import {encode} from 'base64-arraybuffer';

async function getRandomValues() {
  const ret = await wx.getRandomValues({length: 16});
  if (ret.randomValues) return randomValues;
  throw new Error(ret.errMsg);
}

export async function uuid() {
  const buff = new Uint8Array(16);
  const random = await getRandomValues();
  v4({random}, buff);
  return encode(buff);
}