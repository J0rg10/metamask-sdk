import React from 'react';
import { RequestArguments } from './NativePackageMethods';
export interface EventHandlerProps {
    setConnecting: React.Dispatch<React.SetStateAction<boolean>>;
    setConnected: React.Dispatch<React.SetStateAction<boolean>>;
    setChainId: React.Dispatch<React.SetStateAction<string | undefined>>;
    setAccount: React.Dispatch<React.SetStateAction<string | undefined>>;
    debug?: boolean;
    synced?: boolean;
    chainId?: string;
}
export interface SDKState {
    ready: boolean;
    connected: boolean;
    connecting: boolean;
    channelId?: string;
    chainId?: string;
    account?: string;
    sdk?: {
        connect: () => Promise<string | undefined>;
        connectAndSign: ({ msg }: {
            msg: string;
        }) => Promise<string | undefined>;
        connectWith: (req: RequestArguments) => Promise<string | undefined>;
        terminate: () => Promise<void>;
    };
    provider?: {
        request: (req: RequestArguments) => Promise<unknown>;
        batchRequest: (requests: RequestArguments[]) => Promise<unknown[]>;
        getChainId: () => Promise<string | undefined>;
        getSelectedAddress: () => Promise<string | undefined>;
    };
}
export interface MetaMaskSDKOptions {
    dappMetadata: {
        name: string;
        url: string;
        iconUrl: string;
        scheme: string;
    };
    infuraAPIKey?: string;
}
export declare const SDKContext: React.Context<SDKState>;
export declare const MetaMaskProvider: ({ children, sdkOptions, }: {
    children: React.ReactNode;
    sdkOptions: MetaMaskSDKOptions;
}) => React.JSX.Element;
export default MetaMaskProvider;
//# sourceMappingURL=MetaMaskProvider.d.ts.map