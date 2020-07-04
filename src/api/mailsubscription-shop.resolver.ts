import { Args, Parent, Query, Resolver, Mutation } from '@nestjs/graphql';
import { MailSubscriptionService } from '../service/mailsubscription.service';
import { RequestContext, Ctx } from '@vendure/core';

@Resolver()
export class MailSubscriptionShopResolver {
    constructor(private mailsubscriptionService: MailSubscriptionService) {
    }

	@Mutation()
	addSubscriptionEmail(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.mailsubscriptionService.addMail(ctx,input);
	}
	
}
