import sharp from "sharp";
import { MAX_PHOTOS, MAX_PHOTO_BYTES } from "../shared/inquiry.js";

export async function emailAttachments(photos = []) {
 if (!Array.isArray(photos) || photos.length > MAX_PHOTOS) throw new Error("Přiložte nejvýše 3 fotky.");
 const attachments = [];
 for (const [index, photo] of photos.entries()) {
  const content = photo?.content;
  if (typeof content !== "string" || !content.length || content.length > Math.ceil(MAX_PHOTO_BYTES / 3) * 4 || (content.length % 4 !== 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(content))) throw new Error("Neplatná nebo příliš velká fotka. Odeberte ji a nahrajte znovu.");
  const buffer = Buffer.from(content, "base64");
  if (buffer.length > MAX_PHOTO_BYTES || buffer.toString("base64") !== content || buffer[0] !== 0xff || buffer[1] !== 0xd8 || buffer[2] !== 0xff) throw new Error("Fotku nelze přečíst. Odeberte ji a nahrajte znovu.");
  try {
   // Decode and re-encode: do not trust the browser's MIME, filename or metadata.
   const image = sharp(buffer, { limitInputPixels: 4_000_000, failOn: "warning" });
   const metadata = await image.metadata();
   if (metadata.format !== "jpeg" || !metadata.width || !metadata.height || metadata.width > 2000 || metadata.height > 2000) throw new Error("Invalid photo dimensions");
   const clean = await image.rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 80 }).toBuffer();
   attachments.push({ filename: `fotka-${index + 1}.jpg`, content: clean.toString("base64") });
  } catch { throw new Error("Fotku nelze přečíst nebo má příliš velké rozlišení. Odeberte ji a nahrajte znovu."); }
 }
 return attachments;
}
