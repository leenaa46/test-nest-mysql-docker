"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const deposit_entity_1 = require("./entities/deposit.entity");
const deposit_controller_1 = require("./deposit.controller");
const deposit_service_1 = require("./deposit.service");
let DepositModule = class DepositModule {
};
DepositModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([deposit_entity_1.Deposit])],
        controllers: [deposit_controller_1.DepositController],
        providers: [deposit_service_1.DepositService],
    })
], DepositModule);
exports.DepositModule = DepositModule;
//# sourceMappingURL=deposit.module.js.map