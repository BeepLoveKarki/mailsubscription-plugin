import { PluginInitOptions } from './types';
/**
 * An example Vendure plugin.
 *
 * @example
 * ```TypeScript
 * export const config: VendureConfig = {
 *   //...
 *   plugins: [
 *     ExamplePlugin.init({
 *       // options
 *     }),
 *   ]
 * }
 * ```
 */
export declare class MailSubscriptionPlugin {
    static options: PluginInitOptions;
    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options: PluginInitOptions): typeof MailSubscriptionPlugin;
}
