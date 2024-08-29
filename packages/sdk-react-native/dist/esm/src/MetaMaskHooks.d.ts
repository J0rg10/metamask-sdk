export declare const useSDK: () => import("./MetaMaskProvider").SDKState;
export declare const useSDKConfig: () => {
    setAppContext: (_: Partial<import("./SDKConfigProvider").SDKConfigContextProps>) => void;
    reset: () => void;
    dappMetadata: {
        name: string;
        url: string;
        iconUrl: string;
        scheme: string;
    };
    infuraAPIKey?: string | undefined;
};
//# sourceMappingURL=MetaMaskHooks.d.ts.map