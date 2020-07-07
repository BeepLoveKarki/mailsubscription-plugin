import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@vendure/admin-ui/core';
import { AllMailsListComponent } from './components/all-mails-list/all-mails-list.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: AllMailsListComponent ,
      data: { breadcrumb: 'Subscribed Mails' },
    }]),
  ],
  declarations: [AllMailsListComponent],
})
export class MailSubscriptionUIModule {}