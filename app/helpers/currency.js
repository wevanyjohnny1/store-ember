import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(positional, named = {}) {
    const [number] = positional;
    const { sign = 'R$' } = named;
    const money = Math.floor(number);
    let cents = Math.floor((number * 100) % 100);

    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }

    return `${sign} ${money},${cents}`;
  }
}
