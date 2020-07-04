import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { PluginInitOptions } from './types';
import { PLUGIN_INIT_OPTIONS } from './constants';
import { MailSubscriptionEntity } from './entities/mailsubscription.entity';
import { MailSubscriptionService } from './service/mailsubscription.service';
import { adminApiExtensions,shopApiExtensions } from './api/api-extensions';
import { MailSubscriptionShopResolver } from './api/mailsubscription-shop.resolver';
import { MailSubscriptionAdminResolver } from './api/mailsubscription-admin.resolver';

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
@VendurePlugin({
    // Importing the PluginCommonModule gives all of our plugin's injectables (services, resolvers)
    // access to the Vendure core providers. See https://www.vendure.io/docs/typescript-api/plugin/plugin-common-module/
    imports: [PluginCommonModule],
    entities: [MailSubscriptionEntity],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [MailSubscriptionShopResolver],
    },
	adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [MailSubscriptionAdminResolver],
    },
    providers: [
        MailSubscriptionService,
        // By definiting the `PLUGIN_INIT_OPTIONS` symbol as a provider, we can then inject the
        // user-defined options into other classes, such as the {@link ExampleService}.
        { provide: PLUGIN_INIT_OPTIONS, useFactory: () => MailSubscriptionPlugin.options },
    ]
})
export class MailSubscriptionPlugin {

    static options: PluginInitOptions;

    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options: PluginInitOptions) {
        this.options = options;
        return MailSubscriptionPlugin;
    }
}
