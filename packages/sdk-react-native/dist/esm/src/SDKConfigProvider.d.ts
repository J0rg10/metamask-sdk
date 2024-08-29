import React from 'react';
export interface SDKConfigContextProps {
    dappMetadata: {
        name: string;
        url: string;
        iconUrl: string;
        scheme: string;
    };
    infuraAPIKey?: string;
}
export declare const SDKConfigContext: React.Context<{
    setAppContext: (_: Partial<SDKConfigContextProps>) => void;
    reset: () => void;
    dappMetadata: {
        name: string;
        url: string;
        iconUrl: string;
        scheme: string;
    };
    infuraAPIKey?: string | undefined;
}>;
export interface SDKConfigProviderProps {
    initialInfuraKey?: string;
    children: React.ReactNode;
}
export declare const SDKConfigProvider: ({ initialInfuraKey, children, }: SDKConfigProviderProps) => React.JSX.Element;
//# sourceMappingURL=SDKConfigProvider.d.ts.map