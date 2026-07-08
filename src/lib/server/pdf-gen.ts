// Placeholder-PDF and heatmap-PDF generation with pdf-lib. The placeholder
// product PDFs exist so the whole purchase-and-download flow works before
// real content is uploaded (Phase 3 admin replaces them).
import { PDFDocument, PDFFont, PDFPage, rgb, StandardFonts } from "pdf-lib";
import type { ProductKey } from "../catalogue";
import { PRODUCTS } from "../catalogue";
import type { TopicForecast } from "../topics";

const A4: [number, number] = [595.28, 841.89];
const INK = rgb(0.063, 0.122, 0.2);
const TRUST = rgb(0.071, 0.2, 0.369);
const BODY = rgb(0.24, 0.31, 0.39);
const SIGNAL = rgb(0.957, 0.333, 0.169);

function heatColor(probability: number) {
  if (probability >= 80) return rgb(0.957, 0.333, 0.169);
  if (probability >= 65) return rgb(1, 0.588, 0.275);
  if (probability >= 50) return rgb(1, 0.82, 0.4);
  if (probability >= 35) return rgb(0.616, 0.769, 0.937);
  return rgb(0.894, 0.929, 0.973);
}

function brandHeader(page: PDFPage, bold: PDFFont, regular: PDFFont) {
  const { height } = page.getSize();
  page.drawText("StudyLah", { x: 48, y: height - 56, size: 16, font: bold, color: TRUST });
  page.drawText("studylah.education", {
    x: 48,
    y: height - 72,
    size: 8,
    font: regular,
    color: BODY,
  });
  const tiles = [rgb(0.894, 0.929, 0.973), rgb(0.616, 0.769, 0.937), rgb(1, 0.82, 0.4), rgb(1, 0.588, 0.275), SIGNAL];
  tiles.forEach((color, i) => {
    page.drawRectangle({ x: 48 + i * 14, y: height - 88, width: 11, height: 5, color });
  });
}

function disclaimerFooter(page: PDFPage, regular: PDFFont) {
  page.drawText(
    "Data-driven probabilistic forecast - not actual exam content. Not affiliated with SEAB, MOE, or Cambridge (UCLES).",
    { x: 48, y: 40, size: 7, font: regular, color: BODY }
  );
}

const PRODUCT_BODY: Record<ProductKey, string[]> = {
  forecast: [
    "This placeholder stands in for the full Exam Forecast: a topic-by-topic",
    "probability analysis of your upcoming paper, with revision priorities",
    "for your final 14 days.",
  ],
  companion: [
    "This placeholder stands in for this subject's companion prediction: a",
    "dedicated forecast for the paper or skill strand that decides the most",
    "marks, built from the same ten-year, question-level model.",
  ],
  vault: [
    "This placeholder stands in for the Sure Questions Vault: original",
    "exam-style questions with full worked answers, weighted toward the",
    "forecast's highest-probability topics.",
  ],
  rehearsal: [
    "This placeholder stands in for the Final Rehearsal: a full-length,",
    "timed Paper 1 and Paper 2 with a complete mark scheme.",
  ],
};

export async function generateProductPdf(options: {
  levelName: string;
  subjectName: string;
  productKey: ProductKey;
  topics: TopicForecast[];
  /** Distinguishes the parts of a multi-file product (e.g. "Paper 2"). */
  fileLabel?: string;
}): Promise<Uint8Array> {
  const { levelName, subjectName, productKey, topics, fileLabel } = options;
  const product = PRODUCTS[productKey];
  const doc = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const regular = await doc.embedFont(StandardFonts.Helvetica);

  const cover = doc.addPage(A4);
  const { height, width } = cover.getSize();
  brandHeader(cover, bold, regular);
  cover.drawText(product.name, { x: 48, y: height - 180, size: 32, font: bold, color: INK });
  cover.drawText(product.tagline, { x: 48, y: height - 208, size: 13, font: regular, color: SIGNAL });
  if (fileLabel && fileLabel !== product.name) {
    cover.drawText(fileLabel, { x: 48, y: height - 226, size: 12, font: bold, color: BODY });
  }
  cover.drawText(`${subjectName} - ${levelName}`, { x: 48, y: height - 248, size: 14, font: bold, color: TRUST });
  cover.drawText("2026 sitting", { x: 48, y: height - 266, size: 10, font: regular, color: BODY });
  cover.drawRectangle({
    x: 48,
    y: height - 340,
    width: width - 96,
    height: 44,
    borderColor: SIGNAL,
    borderWidth: 1,
  });
  cover.drawText("PLACEHOLDER FILE - replace with real content before launch", {
    x: 60,
    y: height - 322,
    size: 11,
    font: bold,
    color: SIGNAL,
  });
  disclaimerFooter(cover, regular);

  const body = doc.addPage(A4);
  brandHeader(body, bold, regular);
  let y = body.getSize().height - 140;
  body.drawText(`Inside the real ${product.name}`, { x: 48, y, size: 16, font: bold, color: INK });
  y -= 28;
  for (const line of PRODUCT_BODY[productKey]) {
    body.drawText(line, { x: 48, y, size: 11, font: regular, color: BODY });
    y -= 16;
  }
  if (productKey === "forecast") {
    y -= 20;
    body.drawText("Sample topic probabilities", { x: 48, y, size: 12, font: bold, color: TRUST });
    y -= 22;
    for (const row of topics) {
      body.drawText(row.topic, { x: 48, y, size: 10, font: regular, color: INK });
      body.drawRectangle({ x: 280, y: y - 1, width: 180, height: 8, color: rgb(0.894, 0.929, 0.973) });
      body.drawRectangle({
        x: 280,
        y: y - 1,
        width: Math.max(6, (row.probability / 100) * 180),
        height: 8,
        color: heatColor(row.probability),
      });
      body.drawText(`${row.probability}%`, { x: 470, y, size: 10, font: bold, color: TRUST });
      y -= 20;
    }
  }
  disclaimerFooter(body, regular);

  return doc.save();
}

export async function generateHeatmapPdf(options: {
  levelName: string;
  subjectName: string;
  topics: TopicForecast[];
}): Promise<Uint8Array> {
  const { levelName, subjectName, topics } = options;
  const doc = await PDFDocument.create();
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const page = doc.addPage(A4);
  const { height } = page.getSize();

  brandHeader(page, bold, regular);
  page.drawText("Your free Top 5 heatmap", { x: 48, y: height - 150, size: 24, font: bold, color: INK });
  page.drawText(`${subjectName} - ${levelName} - 2026 sitting`, {
    x: 48,
    y: height - 174,
    size: 12,
    font: regular,
    color: TRUST,
  });
  page.drawText("The five topics our model rates most likely for your paper:", {
    x: 48,
    y: height - 210,
    size: 11,
    font: regular,
    color: BODY,
  });

  let y = height - 250;
  topics.forEach((row, i) => {
    page.drawText(`${i + 1}. ${row.topic}`, { x: 48, y, size: 11, font: bold, color: INK });
    page.drawRectangle({ x: 300, y: y - 2, width: 200, height: 10, color: rgb(0.894, 0.929, 0.973) });
    page.drawRectangle({
      x: 300,
      y: y - 2,
      width: Math.max(8, (row.probability / 100) * 200),
      height: 10,
      color: heatColor(row.probability),
    });
    page.drawText(`${row.probability}%`, { x: 510, y, size: 11, font: bold, color: TRUST });
    y -= 30;
  });

  page.drawText("Want the full picture? The Exam Forecast covers every topic in your syllabus.", {
    x: 48,
    y: y - 20,
    size: 10,
    font: regular,
    color: BODY,
  });
  disclaimerFooter(page, regular);

  return doc.save();
}
