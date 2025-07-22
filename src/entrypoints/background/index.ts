import { registerPopupHandlers } from '@/entrypoints/background/handlers/messageHandler';
import { registerStorageHandlers } from '@/entrypoints/background/handlers/storageHandler';

export default defineBackground(() => {
  console.info('Hello background!');
  registerPopupHandlers();
  registerStorageHandlers();
});
