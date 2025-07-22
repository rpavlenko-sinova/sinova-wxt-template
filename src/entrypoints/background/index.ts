import { registerPopupHandlers } from './handlers/messageHandler';

export default defineBackground(() => {
  console.log('Hello background!');
  registerPopupHandlers();
});
