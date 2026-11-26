// Decode the primary photo off the UI thread. The viewer terminates this worker after each file.
// The decoder runs the display callback asynchronously and can reject on corrupt image data.
self.onunhandledrejection = event => {
  event.preventDefault();
  self.postMessage({ error: true });
};

self.onmessage = async ({ data: bytes }) => {
  try {
    importScripts('./libheif-bundle.js');
    const reader = await libheif();
    const pictures = new reader.HeifDecoder().decode(new Uint8Array(bytes));
    const photo = pictures.find(picture => picture.is_primary()) || pictures[0];
    if (!photo) throw new Error('Missing image');
    const width = photo.get_width();
    const height = photo.get_height();
    if (width <= 0 || height <= 0 || width * height > 64_000_000) throw new Error('Unsupported dimensions');
    const pixels = new Uint8ClampedArray(width * height * 4);
    photo.display({ data: pixels, width, height }, result => {
      if (result) self.postMessage({ width, height, pixels }, [pixels.buffer]);
      else self.postMessage({ error: true });
    });
  } catch {
    self.postMessage({ error: true });
  }
};
