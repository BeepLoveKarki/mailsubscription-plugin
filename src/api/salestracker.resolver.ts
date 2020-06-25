import { Args, Parent, Query, Resolver } from '@nestjs/graphql';
import { SalesTrackerService } from '../service/salestracker.service';
import { RequestContext, Ctx } from '@vendure/core';

@Resolver()
export class SalesTrackerResolver {
    constructor(private salestrackerService: SalesTrackerService) {
    }

    @Query()
    examples(@Ctx() ctx: RequestContext, @Args() args: any) {
        return this.SalesTrackerService.getAllItems();
    }
}
