// Crash-safe client image downscaler for the native shells. Uses an <img> +
// object URL rather than createImageBitmap: WebKit (iOS WKWebView) can DISPLAY
// HEIC via <img> but createImageBitmap cannot decode it and can crash the web
// view on large camera photos. Downscales hard and re-encodes to JPEG so the
// upload is small and the decode never OOMs.
export async function compressImage(
  file: File,
  maxEdge = 1280,
  quality = 0.72
): Promise<{ base64: string; media: "image/jpeg" }> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("Could not read that image. Try another photo."));
      el.src = url;
    });
    const scale = Math.min(1, maxEdge / Math.max(img.width || 1, img.height || 1));
    const w = Math.max(1, Math.round((img.width || maxEdge) * scale));
    const h = Math.max(1, Math.round((img.height || maxEdge) * scale));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Could not process that image.");
    ctx.drawImage(img, 0, 0, w, h);
    const dataUrl = canvas.toDataURL("image/jpeg", quality);
    return { base64: dataUrl.split(",")[1], media: "image/jpeg" };
  } finally {
    URL.revokeObjectURL(url);
  }
}
