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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./create-user.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usersService.create(createUserDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersService.findAll();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.getUserById(id);
        });
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9FO0FBQ3BFLG1EQUErQztBQUUvQyx1REFBa0Q7QUFHbEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUMxQixZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFHckQsTUFBTSxDQUFTLGFBQTRCOztZQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFHSyxPQUFPOztZQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFHSyxXQUFXLENBQWMsRUFBVTs7WUFDdkMsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7S0FBQTtDQUNGLENBQUE7QUFiQztJQURDLGFBQUksQ0FBQyxTQUFTLENBQUM7SUFDRixXQUFBLGFBQUksRUFBRSxDQUFBOztxQ0FBZ0IsK0JBQWE7OzZDQUVoRDtBQUdEO0lBREMsWUFBRyxFQUFFOzs7OzhDQUdMO0FBR0Q7SUFEQyxZQUFHLENBQUMsS0FBSyxDQUFDO0lBQ1EsV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7a0RBRTdCO0FBaEJVLGVBQWU7SUFEM0IsbUJBQVUsQ0FBQyxPQUFPLENBQUM7cUNBRXlCLDRCQUFZO0dBRDVDLGVBQWUsQ0FpQjNCO0FBakJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBQb3N0LCBCb2R5LCBQYXJhbSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4vdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VySW50ZXJmYWNlIH0gZnJvbSAnLi91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDcmVhdGVVc2VyRHRvIH0gZnJvbSAnLi9jcmVhdGUtdXNlci5kdG8nO1xuXG5AQ29udHJvbGxlcigndXNlcnMnKVxuZXhwb3J0IGNsYXNzIFVzZXJzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHt9XG5cbiAgQFBvc3QoJy9jcmVhdGUnKVxuICBhc3luYyBjcmVhdGUoQEJvZHkoKSBjcmVhdGVVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKSB7XG4gICAgdGhpcy51c2Vyc1NlcnZpY2UuY3JlYXRlKGNyZWF0ZVVzZXJEdG8pO1xuICB9XG5cbiAgQEdldCgpXG4gIGFzeW5jIGZpbmRBbGwoKTogUHJvbWlzZTxVc2VySW50ZXJmYWNlW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2Vyc1NlcnZpY2UuZmluZEFsbCgpO1xuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgYXN5bmMgZ2V0VXNlckJ5SWQoQFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJJbnRlcmZhY2U+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51c2Vyc1NlcnZpY2UuZ2V0VXNlckJ5SWQoaWQpO1xuICB9XG59XG4iXX0=