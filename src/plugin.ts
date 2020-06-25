import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { PluginInitOptions } from './types';
import { PLUGIN_INIT_OPTIONS } from './constants';
import { SalesTrackerEntity } from './entities/salestracker.entity';
import { SalesTrackerService } from './service/salestracker.service';
import { shopApiExtensions } from './api/api-extensions';
import { SalesTrackerResolver } from './api/salestracker.resolver';

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
    entities: [SalesTrackerEntity],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [SalesTrackerResolver],
    },
    providers: [
        SalesTrackerService,
        // By definiting the `PLUGIN_INIT_OPTIONS` symbol as a provider, we can then inject the
        // user-defined options into other classes, such as the {@link ExampleService}.
        { provide: PLUGIN_INIT_OPTIONS, useFactory: () => ExamplePlugin.options },
    ],
	
	configuration:config =>{
	  config.customFields.ProductVariant.push({
	    type: 'string',
		name: 'Unit',
		defaultValue: 'piece'
	  },{
	    type: 'int',
		name: 'Sales',
		min: 0,
	    defaultValue: 0
	  });
	  return config;
	}
	
})
export class SalesTrackerPlugin {

    static options: PluginInitOptions;

    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options: PluginInitOptions) {
        this.options = options;
        return SalesTrackerPlugin;
    }
}
