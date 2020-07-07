import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListComponent, DataService } from '@vendure/admin-ui/core';

import { GetAllEmailsQuery, SubscribedEmailsFragment, GetAllEmailsQueryVariables } from '../../generated-types';

import { GET_ALL_EMAILS } from './all-mails-list.graphql';

@Component({
    selector: 'vdr-all-mails-list',
    templateUrl: './all-mails-list.component.html',
    styleUrls: ['./all-mails-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AllMailsListComponent extends BaseListComponent<
    GetAllEmailsQuery,
	SubscribedEmailsFragment,
    GetAllEmailsQueryVariables
> {

    constructor(private dataService: DataService, router: Router, route: ActivatedRoute) {
        super(router, route);
        super.setQueryFn(
            (...args: any[]) => this.dataService.query(GET_ALL_EMAILS,args),
            (data) => data.SubscriptionEmails
        );
    }
}
