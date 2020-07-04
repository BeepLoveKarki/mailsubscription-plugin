import { MailSubscriptionService } from '../service/mailsubscription.service';
import { RequestContext } from '@vendure/core';
export declare class MailSubscriptionShopResolver {
    private mailsubscriptionService;
    constructor(mailsubscriptionService: MailSubscriptionService);
    addSubscriptionEmail(ctx: RequestContext, args: any): Promise<import("../entities/mailsubscription.entity").MailSubscriptionEntity[]>;
}
