"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MailSubscriptionPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailSubscriptionPlugin = void 0;
const core_1 = require("@vendure/core");
const constants_1 = require("./constants");
const mailsubscription_entity_1 = require("./entities/mailsubscription.entity");
const mailsubscription_service_1 = require("./service/mailsubscription.service");
const api_extensions_1 = require("./api/api-extensions");
const mailsubscription_shop_resolver_1 = require("./api/mailsubscription-shop.resolver");
const mailsubscription_admin_resolver_1 = require("./api/mailsubscription-admin.resolver");
const path_1 = __importDefault(require("path"));
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
let MailSubscriptionPlugin = MailSubscriptionPlugin_1 = class MailSubscriptionPlugin {
    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options) {
        this.options = options;
        return MailSubscriptionPlugin_1;
    }
};
MailSubscriptionPlugin.uiExtensions = {
    extensionPath: path_1.default.join(__dirname, 'ui-extensions'),
    ngModules: [
        {
            type: 'lazy',
            route: 'subscribedmails',
            ngModuleFileName: 'mailsubscription-ui-lazy.module.ts',
            ngModuleName: 'MailSubscriptionUIModule',
        },
        {
            type: 'shared',
            ngModuleFileName: 'mailsubscription-ui-extension.module.ts',
            ngModuleName: 'MailSubscriptionExtensionModule',
        }
    ],
    translations: {
        en: path_1.default.join(__dirname, 'i18n/en.json')
    }
};
MailSubscriptionPlugin = MailSubscriptionPlugin_1 = __decorate([
    core_1.VendurePlugin({
        // Importing the PluginCommonModule gives all of our plugin's injectables (services, resolvers)
        // access to the Vendure core providers. See https://www.vendure.io/docs/typescript-api/plugin/plugin-common-module/
        imports: [core_1.PluginCommonModule],
        entities: [mailsubscription_entity_1.MailSubscriptionEntity],
        shopApiExtensions: {
            schema: api_extensions_1.shopApiExtensions,
            resolvers: [mailsubscription_shop_resolver_1.MailSubscriptionShopResolver],
        },
        adminApiExtensions: {
            schema: api_extensions_1.adminApiExtensions,
            resolvers: [mailsubscription_admin_resolver_1.MailSubscriptionAdminResolver],
        },
        providers: [
            mailsubscription_service_1.MailSubscriptionService,
            // By definiting the `PLUGIN_INIT_OPTIONS` symbol as a provider, we can then inject the
            // user-defined options into other classes, such as the {@link ExampleService}.
            { provide: constants_1.PLUGIN_INIT_OPTIONS, useFactory: () => MailSubscriptionPlugin_1.options },
        ]
    })
], MailSubscriptionPlugin);
exports.MailSubscriptionPlugin = MailSubscriptionPlugin;
//# sourceMappingURL=plugin.js.map