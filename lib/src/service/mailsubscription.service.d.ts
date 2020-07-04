import { Connection } from 'typeorm';
import { MailSubscriptionEntity } from '../entities/mailsubscription.entity';
import { PluginInitOptions } from '../types';
export declare class MailSubscriptionService {
    private connection;
    private options;
    constructor(connection: Connection, options: PluginInitOptions);
    getAllMails(): Promise<MailSubscriptionEntity[]>;
    addSingleMail(ctx: any, data: any): Promise<any>;
    updateSingleMail(ctx: any, data: any): Promise<any>;
    addMail(ctx: any, input: any): Promise<MailSubscriptionEntity[]>;
    updateMail(ctx: any, input: any): Promise<MailSubscriptionEntity[]>;
    deleteMail(ctx: any, ids: any): Promise<MailSubscriptionEntity[]>;
    deleteAllMails(ctx: any): boolean;
}
