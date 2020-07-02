import { Args, Parent, Query, Resolver } from '@nestjs/graphql';
import { MailSubscriptionService } from '../service/mailsubscription.service';
import { RequestContext, Ctx } from '@vendure/core';

@Resolver()
export class MailSubscriptionResolver {
    constructor(private mailsubscriptionService: MailSubscriptionService) {
    }

    @Query()
    examples(@Ctx() ctx: RequestContext, @Args() args: any) {
        return this.mailsubscriptionService.getAllItems();
    }
}
