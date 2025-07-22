import { onMessage } from "webext-bridge/background";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  onMessage("popup-message", ({ data }) => {
    console.log("Received message from popup:", data);
    return { success: true, message: "Message received and logged!" };
  });

  onMessage("popup-action", ({ data }) => {
    console.log("Received action from popup:", data);
    if (data && typeof data === "object" && "action" in data) {
      return { success: true, action: data.action, timestamp: Date.now() };
    }
    return { success: false, error: "Invalid action data" };
  });
});
