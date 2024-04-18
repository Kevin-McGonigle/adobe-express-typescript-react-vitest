import { RenditionFormat } from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js';

export function getExtensionForFormat(format: RenditionFormat): string {
  return {
    [RenditionFormat.jpg]: 'jpeg',
    [RenditionFormat.mp4]: 'mp4',
    [RenditionFormat.pdf]: 'pdf',
    [RenditionFormat.png]: 'png',
  }[format];
}
