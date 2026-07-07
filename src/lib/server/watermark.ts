// Anti-piracy watermarking: every delivered PDF gets the buyer's email and
// order reference stamped on the footer of every page, at download time.
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function watermarkPdf(
  bytes: Uint8Array,
  options: { email: string; orderRef: string }
): Promise<Uint8Array> {
  const doc = await PDFDocument.load(bytes);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const text = `Licensed to ${options.email} - Order ${options.orderRef} - studylah.education - do not share`;
  const size = 7.5;

  for (const page of doc.getPages()) {
    const { width } = page.getSize();
    const textWidth = font.widthOfTextAtSize(text, size);
    page.drawText(text, {
      x: Math.max(24, (width - textWidth) / 2),
      y: 16,
      size,
      font,
      color: rgb(0.45, 0.5, 0.58),
    });
  }

  return doc.save();
}
