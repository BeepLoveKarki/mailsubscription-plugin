import { Args, Parent, Query, Resolver, Mutation } from '@nestjs/graphql';
import { MailSubscriptionService } from '../service/mailsubscription.service';
import { RequestContext, Ctx, Allow, Permission } from '@vendure/core';

@Resolver()
export class MailSubscriptionAdminResolver {
    constructor(private mailsubscriptionService: MailSubscriptionService) {
    }

    @Query()
	@Allow(Permission.ReadSettings)
    SubscriptionEmails(@Ctx() ctx: RequestContext, @Args() args: any) {
		const {input} = args;
        return this.mailsubscriptionService.getAllMails(ctx,input || undefined);
    }
	
	@Query()
	@Allow(Permission.ReadSettings)
    SubscriptionEmail(@Ctx() ctx: RequestContext, @Args() args: any) {
		const {input} = args;
        return this.mailsubscriptionService.getMailById(ctx,input);
    }
	
	@Mutation()
	@Allow(Permission.CreateSettings)
	addSubscriptionEmail(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.mailsubscriptionService.addMail(ctx,input);
	}
	
	
	@Mutation()
	@Allow(Permission.UpdateSettings)
	updateSubscriptionEmail(@Ctx() ctx: RequestContext, @Args() args: any){
	   const {input} = args;
	   return this.mailsubscriptionService.updateMail(ctx,input);
	}
	
	@Mutation()
	@Allow(Permission.DeleteSettings)
	deleteSubscriptionEmail(@Ctx() ctx: RequestContext, @Args() args: any){
	   return this.mailsubscriptionService.deleteMail(ctx,args.id);
	}
	
	@Mutation()
	@Allow(Permission.DeleteSettings)
	deleteAllSubscriptionEmails(@Ctx() ctx: RequestContext){
	   return this.mailsubscriptionService.deleteAllMails(ctx);
	}
	
}
