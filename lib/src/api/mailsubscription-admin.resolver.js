"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailSubscriptionAdminResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const mailsubscription_service_1 = require("../service/mailsubscription.service");
const core_1 = require("@vendure/core");
let MailSubscriptionAdminResolver = class MailSubscriptionAdminResolver {
    constructor(mailsubscriptionService) {
        this.mailsubscriptionService = mailsubscriptionService;
    }
    SubscriptionEmails(ctx, args) {
        const { input } = args;
        return this.mailsubscriptionService.getAllMails(ctx, input || undefined);
    }
    SubscriptionEmail(ctx, args) {
        const { input } = args;
        return this.mailsubscriptionService.getMailById(ctx, input);
    }
    addSubscriptionEmail(ctx, args) {
        const { input } = args;
        return this.mailsubscriptionService.addMail(ctx, input);
    }
    updateSubscriptionEmail(ctx, args) {
        const { input } = args;
        return this.mailsubscriptionService.updateMail(ctx, input);
    }
    deleteSubscriptionEmail(ctx, args) {
        return this.mailsubscriptionService.deleteMail(ctx, args.id);
    }
    deleteAllSubscriptionEmails(ctx) {
        return this.mailsubscriptionService.deleteAllMails(ctx);
    }
};
__decorate([
    graphql_1.Query(),
    core_1.Allow(core_1.Permission.ReadSettings),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], MailSubscriptionAdminResolver.prototype, "SubscriptionEmails", null);
__decorate([
    graphql_1.Query(),
    core_1.Allow(core_1.Permission.ReadSettings),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], MailSubscriptionAdminResolver.prototype, "SubscriptionEmail", null);
__decorate([
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.CreateSettings),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], MailSubscriptionAdminResolver.prototype, "addSubscriptionEmail", null);
__decorate([
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.UpdateSettings),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], MailSubscriptionAdminResolver.prototype, "updateSubscriptionEmail", null);
__decorate([
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.DeleteSettings),
    __param(0, core_1.Ctx()), __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", void 0)
], MailSubscriptionAdminResolver.prototype, "deleteSubscriptionEmail", null);
__decorate([
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.DeleteSettings),
    __param(0, core_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext]),
    __metadata("design:returntype", void 0)
], MailSubscriptionAdminResolver.prototype, "deleteAllSubscriptionEmails", null);
MailSubscriptionAdminResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [mailsubscription_service_1.MailSubscriptionService])
], MailSubscriptionAdminResolver);
exports.MailSubscriptionAdminResolver = MailSubscriptionAdminResolver;
//# sourceMappingURL=mailsubscription-admin.resolver.js.map