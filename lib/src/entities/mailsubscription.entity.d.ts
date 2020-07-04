import { VendureEntity, DeepPartial } from '@vendure/core';
/**
 * Here we define a new database entity. Passing this in to the plugin's `entities` array
 * will instruct TypeORM to create the new database table and make the entity available
 * to query in your plugin code.
 */
export declare class MailSubscriptionEntity extends VendureEntity {
    constructor(input?: DeepPartial<MailSubscriptionEntity>);
    email: string;
}
