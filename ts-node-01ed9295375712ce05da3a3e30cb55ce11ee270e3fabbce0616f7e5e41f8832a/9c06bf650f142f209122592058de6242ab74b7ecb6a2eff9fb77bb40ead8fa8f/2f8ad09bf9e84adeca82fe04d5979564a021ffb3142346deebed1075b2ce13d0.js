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
            const user = yield this.usersService.getUserById(id);
            if (!user) {
                throw new common_1.NotFoundException('User has not been found!');
            }
            return user;
        });
    }
    updateUser(id, createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield this.usersService.updateUser(id, createUserDto);
            if (!updatedUser) {
                throw new common_1.NotFoundException('User does not exist!');
            }
            return updatedUser;
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield this.usersService.deleteUser(userId);
            if (!deletedUser) {
                throw new common_1.NotFoundException('User does not exist!');
            }
            return deletedUser;
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
__decorate([
    common_1.Put('/update:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Delete('/delete'),
    __param(0, common_1.Query('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJHO0FBQzNHLG1EQUErQztBQUUvQyx1REFBa0Q7QUFHbEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUMxQixZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFHckQsTUFBTSxDQUFTLGFBQTRCOztZQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFHSyxPQUFPOztZQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFHSyxXQUFXLENBQWMsRUFBVTs7WUFDdkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLE1BQU0sSUFBSSwwQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2FBQUU7WUFDdkUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFHSyxVQUFVLENBQWMsRUFBRSxFQUFVLGFBQTRCOztZQUNwRSxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUFDLE1BQU0sSUFBSSwwQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQUU7WUFDekUsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBR0ssVUFBVSxDQUFrQixNQUFNOztZQUN0QyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQUMsTUFBTSxJQUFJLDBCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFBRTtZQUN6RSxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBN0JDO0lBREMsYUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNGLFdBQUEsYUFBSSxFQUFFLENBQUE7O3FDQUFnQiwrQkFBYTs7NkNBRWhEO0FBR0Q7SUFEQyxZQUFHLEVBQUU7Ozs7OENBR0w7QUFHRDtJQURDLFlBQUcsQ0FBQyxLQUFLLENBQUM7SUFDUSxXQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OztrREFJN0I7QUFHRDtJQURDLFlBQUcsQ0FBQyxZQUFZLENBQUM7SUFDQSxXQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUFNLFdBQUEsYUFBSSxFQUFFLENBQUE7OzZDQUFnQiwrQkFBYTs7aURBSXJFO0FBR0Q7SUFEQyxlQUFNLENBQUMsU0FBUyxDQUFDO0lBQ0EsV0FBQSxjQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7Ozs7aURBSWhDO0FBaENVLGVBQWU7SUFEM0IsbUJBQVUsQ0FBQyxPQUFPLENBQUM7cUNBRXlCLDRCQUFZO0dBRDVDLGVBQWUsQ0FpQzNCO0FBakNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBQb3N0LCBCb2R5LCBQYXJhbSwgTm90Rm91bmRFeGNlcHRpb24sIFB1dCwgUXVlcnksIERlbGV0ZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4vdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VySW50ZXJmYWNlIH0gZnJvbSAnLi91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDcmVhdGVVc2VyRHRvIH0gZnJvbSAnLi9jcmVhdGUtdXNlci5kdG8nO1xuXG5AQ29udHJvbGxlcigndXNlcnMnKVxuZXhwb3J0IGNsYXNzIFVzZXJzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHt9XG5cbiAgQFBvc3QoJy9jcmVhdGUnKVxuICBhc3luYyBjcmVhdGUoQEJvZHkoKSBjcmVhdGVVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKSB7XG4gICAgdGhpcy51c2Vyc1NlcnZpY2UuY3JlYXRlKGNyZWF0ZVVzZXJEdG8pO1xuICB9XG5cbiAgQEdldCgpXG4gIGFzeW5jIGZpbmRBbGwoKTogUHJvbWlzZTxVc2VySW50ZXJmYWNlW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2Vyc1NlcnZpY2UuZmluZEFsbCgpO1xuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgYXN5bmMgZ2V0VXNlckJ5SWQoQFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJzU2VydmljZS5nZXRVc2VyQnlJZChpZCk7XG4gICAgaWYgKCF1c2VyKSB7IHRocm93IG5ldyBOb3RGb3VuZEV4Y2VwdGlvbignVXNlciBoYXMgbm90IGJlZW4gZm91bmQhJyk7IH1cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxuXG4gIEBQdXQoJy91cGRhdGU6aWQnKVxuICBhc3luYyB1cGRhdGVVc2VyKEBQYXJhbSgnaWQnKSBpZCwgQEJvZHkoKSBjcmVhdGVVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHRoaXMudXNlcnNTZXJ2aWNlLnVwZGF0ZVVzZXIoaWQsIGNyZWF0ZVVzZXJEdG8pO1xuICAgIGlmICghdXBkYXRlZFVzZXIpIHt0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb24oJ1VzZXIgZG9lcyBub3QgZXhpc3QhJyk7IH1cbiAgICByZXR1cm4gdXBkYXRlZFVzZXI7XG4gIH1cblxuICBARGVsZXRlKCcvZGVsZXRlJylcbiAgYXN5bmMgZGVsZXRlVXNlcihAUXVlcnkoJ3VzZXJJZCcpIHVzZXJJZCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgZGVsZXRlZFVzZXIgPSBhd2FpdCB0aGlzLnVzZXJzU2VydmljZS5kZWxldGVVc2VyKHVzZXJJZCk7XG4gICAgaWYgKCFkZWxldGVkVXNlcikge3Rocm93IG5ldyBOb3RGb3VuZEV4Y2VwdGlvbignVXNlciBkb2VzIG5vdCBleGlzdCEnKTsgfVxuICAgIHJldHVybiBkZWxldGVkVXNlcjtcbiAgfVxufVxuIl19