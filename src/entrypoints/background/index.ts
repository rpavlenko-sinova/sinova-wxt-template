import { registerPopupHandlers } from '@/entrypoints/background/handlers/messageHandler';

export default defineBackground(() => {
  console.info('Hello background!');
  registerPopupHandlers();
});
