import { MetaMaskSDKOptions } from './MetaMaskProvider';
export interface RequestArguments {
    /** The RPC method to request. */
    method: string;
    /** The params of the RPC method, if any. */
    params?: unknown[] | Record<string, unknown>;
}
/**
 * Connects to MetaMask.
 *
 * @returns A Promise that resolves when the connection is successful.
 */
export declare const connect: () => Promise<string>;
/**
 * Connects to MetaMask and signs a message.
 *
 * @param message - The message to sign.
 * @returns A Promise that resolves with the signed message.
 */
export declare const connectAndSign: (message: string) => Promise<string>;
/**
 * Connects to MetaMask with specific request arguments.
 *
 * @param req - The request arguments.
 * @returns A Promise that resolves when the connection is successful.
 */
export declare const connectWith: (req: RequestArguments) => Promise<string>;
/**
 * Sends a request to MetaMask.
 *
 * @param req - The request arguments.
 * @returns A Promise that resolves with the result of the RPC method,
 * or rejects if an error is encountered.
 */
export declare const request: (req: RequestArguments) => Promise<unknown>;
/**
 * Sends multiple requests to MetaMask in a batch.
 *
 * @param requests - An array of request arguments.
 * @returns A Promise that resolves with an array of results from the RPC methods,
 * or rejects if an error is encountered.
 */
export declare const batchRequest: (requests: RequestArguments[]) => Promise<unknown[]>;
/**
 * Disconnects from MetaMask.
 *
 * @returns A Promise that resolves when the disconnection is successful.
 */
export declare const disconnect: () => Promise<void>;
/**
 * Gets the current chain ID from MetaMask.
 *
 * @returns A Promise that resolves with the current chain ID.
 */
export declare const getChainId: () => Promise<string>;
/**
 * Gets the selected address from MetaMask.
 *
 * @returns A Promise that resolves with the selected address.
 */
export declare const getSelectedAddress: () => Promise<string>;
/**
 * Terminates the current session with MetaMask.
 *
 * @returns A Promise that resolves when the session is cleared.
 */
export declare const terminate: () => Promise<void>;
/**
 * Sets up deep link handling for MetaMask.
 * Listens for URL events and passes them to the MetaMask SDK.
 */
export declare function setupDeeplinkHandling(): void;
/**
 * Initializes the MetaMask SDK with the provided options and sets up deep link handling.
 *
 * @param sdkOptions - The options for initializing the SDK.
 */
export declare function initializeSDK(sdkOptions: MetaMaskSDKOptions): void;
//# sourceMappingURL=NativePackageMethods.d.ts.map