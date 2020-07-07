import { NgModule } from '@angular/core';
import { SharedModule, addNavMenuSection } from '@vendure/admin-ui/core';

@NgModule({
  imports: [SharedModule],
  providers: [
    addNavMenuSection({
      id: 'mailsubscription',
      label: 'Subscriptions',
      items: [{
        id: 'allmails',
        label: 'Mails',
        routerLink: ['/extensions/subscribedmails'],
        // Icon can be any of https://clarity.design/icons
        icon: 'envelope',
      }],
    },
    // Add this section before the "settings" section
    'settings'),
  ]
})
export class MailSubscriptionExtensionModule {}