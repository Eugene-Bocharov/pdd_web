const importImages = (
  prefix: string,
  count: number,
  extensions: string[] = ['jpg', 'jpeg', 'png', 'webp']
) => {
  const images = [];

  for (let i = 1; i <= count; i++) {
    for (const ext of extensions) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        images.push(require(`./${prefix}_${i}.${ext}`));
        break; // If the file is found, stop checking other extensions
      } catch (error) {
        // Ignore errors if the file doesn't exist
      }
    }
  }

  return images;
};

// Adjust counts based on the highest-numbered image you have
export const photos = {
  extr: importImages('extr', 50), // Adjust number based on how many images exist
  intr: importImages('intr', 50),
  hae: importImages('hae', 50),
  nc: importImages('nc', 50),
  partner: importImages('partner', 50),
  rof: importImages('rof', 50, ['jpg', 'jpeg', 'png', 'webp']), // Includes webp
  main: [require('./main_1.png')],
  logoh: [require('./logoh2.png')],
  logod: [require('./logod3.png')],
  welc: [require('./welcImg3.jpg')],
};

// Example usage:
console.log(photos.extr[1]); // Access extr_2.jpg
console.log(photos.intr[5]); // Access intr_6.jpg
