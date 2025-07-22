import { registerPopupHandlers } from '@/entrypoints/background/handlers/messageHandler';
import { registerStorageHandlers } from '@/entrypoints/background/handlers/storageHandler';

export default defineBackground(() => {
  console.info('Hello background!');
  console.info('VARIABLE:', import.meta.env.WXT_VARIABLE);
  registerPopupHandlers();
  registerStorageHandlers();
});
