declare global {
  interface Window {
    appApi?: {
      getVersion: () => string;
      getPlatformList: () => string[];
      getConfig: () => Record<string, unknown>;
      saveConfig: (config: Record<string, unknown>) => unknown;
      openExternal: (url: string) => void;
      notify: (title: string, body: string) => void;
      db: {
        getTasks: () => Promise<unknown[]>;
        createTask: (payload: Record<string, unknown>) => Promise<unknown>;
        getKeywords: () => Promise<unknown[]>;
        createKeyword: (payload: Record<string, unknown>) => Promise<unknown>;
        getComments: () => Promise<unknown[]>;
        createComment: (payload: Record<string, unknown>) => Promise<unknown>;
        getSettings: () => Promise<unknown[]>;
        setSetting: (key: string, value: unknown) => Promise<unknown>;
      };
    };
  }
}

export {};
