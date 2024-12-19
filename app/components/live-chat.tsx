'use client'

import { useEffect } from 'react'

interface LiveChatWindow extends Window {
  __lc: {
    license: number;
    integration_name?: string;
    product_name?: string;
    asyncInit?: boolean;
  };
  LiveChatWidget?: {
    init: () => void;
    on: (...args: unknown[]) => void;
    once: (...args: unknown[]) => void;
    off: (...args: unknown[]) => void;
    get: (...args: unknown[]) => unknown;
    call: (...args: unknown[]) => void;
  };
}

declare const window: LiveChatWindow;

export function LiveChat() {
  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 17516280;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";

    const initLiveChat = () => {
      const lc = {
        _q: [] as unknown[][],
        _h: null as null | ((...args: unknown[]) => void),
        _v: "2.0",
        on: function(...args: unknown[]) {
          lc._q.push(["on", ...args]);
        },
        once: function(...args: unknown[]) {
          lc._q.push(["once", ...args]);
        },
        off: function(...args: unknown[]) {
          lc._q.push(["off", ...args]);
        },
        get: function(...args: unknown[]) {
          if (!lc._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
          return lc._q.push(["get", ...args]);
        },
        call: function(...args: unknown[]) {
          lc._q.push(["call", ...args]);
        },
        init: function() {
          const script = document.createElement('script');
          script.async = true;
          script.type = 'text/javascript';
          script.src = 'https://cdn.livechatinc.com/tracking.js';
          document.head.appendChild(script);
        }
      };

      if (!window.__lc.asyncInit) {
        lc.init();
      }
      window.LiveChatWidget = window.LiveChatWidget || lc as LiveChatWindow['LiveChatWidget'];
    };

    initLiveChat();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <noscript>
      <a href="https://www.livechat.com/chat-with/17516280/" rel="nofollow">
        Chat with us
      </a>
      , powered by{' '}
      <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">
        LiveChat
      </a>
    </noscript>
  );
}

