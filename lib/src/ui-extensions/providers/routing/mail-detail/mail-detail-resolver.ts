/*import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DataService } from '@vendure/admin-ui/core';
import { Observable, of } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';

import { GetEmail } from '../../../generated-types';

import { GET_EMAIL } from './mail-detail-resolver.graphql';

@Injectable()
export class MailDetailResolver implements Resolve<any> {
    constructor(private dataService: DataService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
		console.log(route.paramMap.get('id'));
        const stream = this.dataService
            .query<GetEmail.Query, GetEmail.Variables>(GET_EMAIL, {
                id: route.paramMap.get('id') || '',
            })
            .mapStream(data => data.SubscriptionEmail)
            .pipe(shareReplay(1));

        return of(new stream).pipe(
            take(1),
            map(() => stream),
        );
		
    }
}*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, BaseEntityResolver } from '@vendure/admin-ui/core';
import { take } from 'rxjs/operators';
import { GET_EMAIL } from './mail-detail-resolver.graphql';

import { 
  GetEmailQuery,
  SubscribedEmailsFragment,
  GetEmailQueryVariables
} from '../../../generated-types';

@Injectable()
export default class MailDetailResolver extends BaseEntityResolver<
  SubscribedEmailsFragment
> {
  constructor(router: Router, dataService: DataService) {
    super(
      router,
      {
        __typename: 'Email',
        id: '',
		createdAt: '',
		updatedAt: '',
        email:''
      },
      (id) =>
        dataService.query<GetEmailQuery, GetEmailQueryVariables>(GET_EMAIL, {
            id: id
        })
        .mapStream((data) => data.SubscriptionEmail)
    );
  }
}

