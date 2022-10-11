import map from '../../../utils/map';

const cipher = (text: string, cipherValue: number, decrypt?: boolean) => {
  const split = text.split('');
  const arr: string[] = [];
  if (!decrypt) {
    split.forEach((t) => {
      const find = map.find((v) => v.value === t);
      if (!!find) {
        const code = find.code + cipherValue;
        const nFind = map.find((i) => i.code === code);
        if (!!nFind) return arr.push(nFind.value);
      }
      arr.push(t);
    });
  } else {
    split.forEach((t) => {
      const find = map.find((v) => v.value === t && v.code - cipherValue >= 0);
      if (!!find) {
        const code = find.code - cipherValue;
        const nFind = map.find((i) => i.code === code);
        if (!!nFind) return arr.push(nFind.value);
      }
      arr.push(t);
    });
  }
  return arr.join('');
};

export default cipher;
