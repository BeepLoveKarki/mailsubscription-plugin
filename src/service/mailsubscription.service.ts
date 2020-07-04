import { Injectable, Inject } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { MailSubscriptionEntity } from '../entities/mailsubscription.entity';
import { PLUGIN_INIT_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';

@Injectable()
export class MailSubscriptionService {

    constructor(@InjectConnection() private connection: Connection,
                @Inject(PLUGIN_INIT_OPTIONS) private options: PluginInitOptions) {}

    getAllMails() {
        return this.connection.getRepository(MailSubscriptionEntity).find();
    }
	
	
	async addSingleMail(ctx,data){
	   const createdVariant = this.connection.getRepository(MailSubscriptionEntity).create(data);
	   const savedVariant = await this.connection.getRepository(MailSubscriptionEntity).save(createdVariant);
	   return Object(savedVariant).id;
	}
	
	async updateSingleMail(ctx,data){
	   const createdVariant = await this.connection.getRepository(MailSubscriptionEntity).update(data.id,{email:data.email});
	   return data.id;
	}
	
	async addMail(ctx,input){
	    const ids:string[] = [];
        for (const emailInput of input) {
            const id = await this.addSingleMail(ctx, emailInput);
            ids.push(id);
        }
        const createdVariants = await this.connection.getRepository(MailSubscriptionEntity).findByIds(ids);
		return createdVariants;
	}
	
	async updateMail(ctx,input){
	    const ids:string[] = [];
        for (const emailInput of input) {
            const id = await this.updateSingleMail(ctx, emailInput);
            ids.push(id);
        }
        const createdVariants = await this.connection.getRepository(MailSubscriptionEntity).findByIds(ids);
		return createdVariants;
	}
	
	async deleteMail(ctx,ids){
	   const Variants = await this.connection.getRepository(MailSubscriptionEntity).findByIds(ids);
	   this.connection.getRepository(MailSubscriptionEntity).delete(ids);
	   return Variants;
	}
	
	deleteAllMails(ctx){
	   this.connection.getRepository(MailSubscriptionEntity).clear();
	   return true;
	}
	
}
