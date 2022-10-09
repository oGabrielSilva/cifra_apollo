const encrypt = (text: string, cipher: number, decrypt?: boolean) => {
  return text
    .split('')
    .map((t) => t.charCodeAt(0))
    .map((code) => String.fromCharCode(decrypt ? code - cipher : code + cipher))
    .join('');
};

export default encrypt;
