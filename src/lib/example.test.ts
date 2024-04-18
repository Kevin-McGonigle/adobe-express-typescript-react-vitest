import { getExtensionForFormat } from '@/lib/example';
import { RenditionFormat } from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js';
import { describe, expect, it } from 'vitest';

describe('getExtensionForFormat', () => {
  describe('when the format is png', () => {
    it('returns png', () => {
      expect(getExtensionForFormat(RenditionFormat.png)).toEqual('png');
    });
  });
});
