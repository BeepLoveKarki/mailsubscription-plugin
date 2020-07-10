import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { BaseListComponent, DataService, NotificationService, ModalService  } from '@vendure/admin-ui/core';
import { merge } from 'rxjs';

import { SortOrder } from '../../generated-types';
import { EMPTY } from 'rxjs';
import { debounceTime, takeUntil, switchMap } from 'rxjs/operators';

import { 
  GetAllEmailsQuery,
  SubscribedEmails,
  GetAllEmailsQueryVariables,
  DeleteEmail
} from '../../generated-types';

import { GET_ALL_EMAILS, DELETE_EMAIL } from './all-mails-list.graphql';

@Component({
    selector: 'vdr-all-mails-list',
    templateUrl: './all-mails-list.component.html',
    styleUrls: ['./all-mails-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AllMailsListComponent extends BaseListComponent<
    GetAllEmailsQuery,
	SubscribedEmails.Fragment,
    GetAllEmailsQueryVariables
> implements OnInit {
    searchTerm = new FormControl('');
    constructor(
	   private dataService: DataService,
       private modalService: ModalService,
       private notificationService: NotificationService,	   
	   router: Router, 
	   route: ActivatedRoute,
	) {
        super(router, route);
        super.setQueryFn(
            (...args: any[]) => this.dataService.query(GET_ALL_EMAILS,args),
            (data) => data.SubscriptionEmails,
			(skip, take) => ({
                options: {
                    skip,
                    take,
                    filter: {
                        email: {
                            contains: this.searchTerm.value,
                        },
                    },
					sort: {
                        updatedAt: SortOrder.Asc,
                    },
                },
            }),
        );
    }
	
	ngOnInit() {
        super.ngOnInit();
        this.searchTerm.valueChanges
            .pipe(
                debounceTime(250),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
				console.log("a");
				this.refresh();
			});
    }
	
	
	
	downloadcsv(){
	   let args: any[] = [];
	   //this.dataService.query(GET_ALL_EMAILS,args);
	}
	
	deleteEmail(id: string) {
		let ids:string[] =[id];
        this.modalService
            .dialog({
                title: _('vdr-mailsubscription-plugin.confirm-delete-email'),
                buttons: [
                    { type: 'secondary', label: _('common.cancel') },
                    { type: 'danger', label: _('common.delete'), returnValue: true },
                ],
            })
            .pipe(
                switchMap(response => (response ? this.dataService.mutate<DeleteEmail.Mutation,DeleteEmail.Variables>(DELETE_EMAIL,{"input":ids}) : EMPTY)),
            )
            .subscribe(
                () => {
                    this.notificationService.success(_('common.notify-delete-success'), {
                        entity: 'Email',
                    });
                    this.refresh();
                },
                err => {
                    this.notificationService.error(_('common.notify-delete-error'), {
                        entity: 'Email',
                    });
                },
            );
    }
}
