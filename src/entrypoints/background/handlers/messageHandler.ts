import { onMessage } from 'webext-bridge/background';
import { BridgeMessage } from '@/lib/enums/bridge';

export function registerPopupHandlers() {
  onMessage(BridgeMessage.PopupMessage, ({ data }) => {
    console.log('Received message from popup:', data);
    return { success: true, message: 'Message received and logged!' };
  });

  onMessage(BridgeMessage.PopupAction, ({ data }) => {
    console.log('Received action from popup:', data);
    if (data && typeof data === 'object' && 'action' in data) {
      return { success: true, action: data.action, timestamp: Date.now() };
    }
    return { success: false, error: 'Invalid action data' };
  });
}
