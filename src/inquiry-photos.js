import { MAX_PHOTO_BYTES, MAX_ORIGINAL_PHOTO_BYTES } from "../shared/inquiry.js";
const types = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function preparePhoto(file) {
 if (!types.has(file.type)) throw new Error(`Fotku „${file.name}“ nahrajte jako JPG, PNG nebo WebP. HEIC nejprve převeďte na JPG.`);
 if (!file.size || file.size > MAX_ORIGINAL_PHOTO_BYTES) throw new Error(`Fotka „${file.name}“ musí mít nejvýše 15 MB.`);
 const url = URL.createObjectURL(file);
 const image = new Image();
 try {
  image.src = url;
  await image.decode();
  if (!image.naturalWidth || image.naturalWidth * image.naturalHeight > 60_000_000) throw new Error("Fotka má příliš velké rozlišení. Zkuste menší obrázek.");
  let edge = 1600;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Příprava fotky není v tomto prohlížeči dostupná.");
  for (let attempt = 0; attempt < 5; attempt++) {
   const scale = Math.min(1, edge / Math.max(image.naturalWidth, image.naturalHeight));
   canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
   canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
   context.fillStyle = "#fff";
   context.fillRect(0, 0, canvas.width, canvas.height);
   context.drawImage(image, 0, 0, canvas.width, canvas.height);
   // Re-encoding retains the visible photo, not the original EXIF/GPS metadata.
   const preview = canvas.toDataURL("image/jpeg", 0.8);
   const content = preview.split(",")[1];
   if (preview.startsWith("data:image/jpeg;base64,") && content.length * 3 / 4 <= MAX_PHOTO_BYTES) return { name: file.name, preview, content };
   edge = Math.floor(edge * 0.75);
  }
  throw new Error("Fotku se nepodařilo zmenšit. Zkuste menší obrázek.");
 } catch (error) {
  if (error.name === "EncodingError") throw new Error(`Fotku „${file.name}“ nelze přečíst. Zkuste jiný soubor JPG, PNG nebo WebP.`);
  throw error;
 } finally { URL.revokeObjectURL(url); }
}
