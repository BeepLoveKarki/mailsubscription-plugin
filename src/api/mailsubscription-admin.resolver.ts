import { Args, Parent, Query, Resolver, Mutation } from '@nestjs/graphql';
import { MailSubscriptionService } from '../service/mailsubscription.service';
import { RequestContext, Ctx } from '@vendure/core';

@Resolver()
export class MailSubscriptionAdminResolver {
    constructor(private mailsubscriptionService: MailSubscriptionService) {
    }

    @Query()
    SubscriptionEmails(@Ctx() ctx: RequestContext, @Args() args: any) {
        return this.mailsubscriptionService.getAllMails();
    }
	
	@Mutation()
	addSubscriptionEmail(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.mailsubscriptionService.addMail(ctx,input);
	}
	
	@Mutation()
	updateSubscriptionEmail(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.mailsubscriptionService.updateMail(ctx,input);
	}
	
	@Mutation()
	deleteSubscriptionEmail(@Ctx() ctx: RequestContext, @Args() args: any){
	   return this.mailsubscriptionService.deleteMail(ctx,args.id);
	}
	
	@Mutation()
	deleteAllSubscriptionEmails(@Ctx() ctx: RequestContext){
	   return this.mailsubscriptionService.deleteAllMails(ctx);
	}
	
}
