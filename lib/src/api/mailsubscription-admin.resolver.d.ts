import { MailSubscriptionService } from '../service/mailsubscription.service';
import { RequestContext } from '@vendure/core';
export declare class MailSubscriptionAdminResolver {
    private mailsubscriptionService;
    constructor(mailsubscriptionService: MailSubscriptionService);
    SubscriptionEmails(ctx: RequestContext, args: any): Promise<{
        items: import("../entities/mailsubscription.entity").MailSubscriptionEntity[];
        totalItems: number;
    }>;
    SubscriptionEmail(ctx: RequestContext, args: any): Promise<import("../entities/mailsubscription.entity").MailSubscriptionEntity>;
    addSubscriptionEmail(ctx: RequestContext, args: any): Promise<import("../entities/mailsubscription.entity").MailSubscriptionEntity[]>;
    updateSubscriptionEmail(ctx: RequestContext, args: any): Promise<import("../entities/mailsubscription.entity").MailSubscriptionEntity[]>;
    deleteSubscriptionEmail(ctx: RequestContext, args: any): Promise<import("../entities/mailsubscription.entity").MailSubscriptionEntity[]>;
    deleteAllSubscriptionEmails(ctx: RequestContext): boolean;
}
