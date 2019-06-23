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
    updateUser(res, id, createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield this.usersService.updateUser(id, createUserDto);
            if (!updatedUser) {
                throw new common_1.NotFoundException('User does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User updated successfully.',
                updatedUser,
            });
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
    common_1.Put('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Query('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_user_dto_1.CreateUserDto]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRIO0FBQzVILG1EQUErQztBQUUvQyx1REFBa0Q7QUFHbEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUMxQixZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFHckQsTUFBTSxDQUFTLGFBQTRCOztZQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFHSyxPQUFPOztZQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFHSyxXQUFXLENBQWMsRUFBVTs7WUFDdkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLE1BQU0sSUFBSSwwQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2FBQUU7WUFDdkUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFHSyxVQUFVLENBQVEsR0FBRyxFQUFlLEVBQVUsRUFBVSxhQUE0Qjs7WUFDeEYsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBQyxNQUFNLElBQUksMEJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUFFO1lBQ3pFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDcEMsT0FBTyxFQUFFLDRCQUE0QjtnQkFDckMsV0FBVzthQUNaLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUdLLFVBQVUsQ0FBa0IsTUFBTTs7WUFDdEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUFDLE1BQU0sSUFBSSwwQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQUU7WUFDekUsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQWhDQztJQURDLGFBQUksQ0FBQyxTQUFTLENBQUM7SUFDRixXQUFBLGFBQUksRUFBRSxDQUFBOztxQ0FBZ0IsK0JBQWE7OzZDQUVoRDtBQUdEO0lBREMsWUFBRyxFQUFFOzs7OzhDQUdMO0FBR0Q7SUFEQyxZQUFHLENBQUMsS0FBSyxDQUFDO0lBQ1EsV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7a0RBSTdCO0FBR0Q7SUFEQyxZQUFHLENBQUMsU0FBUyxDQUFDO0lBQ0csV0FBQSxZQUFHLEVBQUUsQ0FBQSxFQUFPLFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQWMsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7cURBQWdCLCtCQUFhOztpREFPekY7QUFHRDtJQURDLGVBQU0sQ0FBQyxTQUFTLENBQUM7SUFDQSxXQUFBLGNBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTs7OztpREFJaEM7QUFuQ1UsZUFBZTtJQUQzQixtQkFBVSxDQUFDLE9BQU8sQ0FBQztxQ0FFeUIsNEJBQVk7R0FENUMsZUFBZSxDQW9DM0I7QUFwQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFBvc3QsIEJvZHksIFBhcmFtLCBOb3RGb3VuZEV4Y2VwdGlvbiwgUHV0LCBRdWVyeSwgRGVsZXRlLCBIdHRwU3RhdHVzLCBSZXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckludGVyZmFjZSB9IGZyb20gJy4vdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ3JlYXRlVXNlckR0byB9IGZyb20gJy4vY3JlYXRlLXVzZXIuZHRvJztcblxuQENvbnRyb2xsZXIoJ3VzZXJzJylcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7fVxuXG4gIEBQb3N0KCcvY3JlYXRlJylcbiAgYXN5bmMgY3JlYXRlKEBCb2R5KCkgY3JlYXRlVXNlckR0bzogQ3JlYXRlVXNlckR0bykge1xuICAgIHRoaXMudXNlcnNTZXJ2aWNlLmNyZWF0ZShjcmVhdGVVc2VyRHRvKTtcbiAgfVxuXG4gIEBHZXQoKVxuICBhc3luYyBmaW5kQWxsKCk6IFByb21pc2U8VXNlckludGVyZmFjZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnNTZXJ2aWNlLmZpbmRBbGwoKTtcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIGFzeW5jIGdldFVzZXJCeUlkKEBQYXJhbSgnaWQnKSBpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2Vyc1NlcnZpY2UuZ2V0VXNlckJ5SWQoaWQpO1xuICAgIGlmICghdXNlcikgeyB0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb24oJ1VzZXIgaGFzIG5vdCBiZWVuIGZvdW5kIScpOyB9XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBAUHV0KCcvdXBkYXRlJylcbiAgYXN5bmMgdXBkYXRlVXNlcihAUmVzKCkgcmVzLCBAUXVlcnkoJ2lkJykgaWQ6IHN0cmluZywgQEJvZHkoKSBjcmVhdGVVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKXtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHRoaXMudXNlcnNTZXJ2aWNlLnVwZGF0ZVVzZXIoaWQsIGNyZWF0ZVVzZXJEdG8pO1xuICAgIGlmICghdXBkYXRlZFVzZXIpIHt0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb24oJ1VzZXIgZG9lcyBub3QgZXhpc3QhJyk7IH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLk9LKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6ICdVc2VyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICB1cGRhdGVkVXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIEBEZWxldGUoJy9kZWxldGUnKVxuICBhc3luYyBkZWxldGVVc2VyKEBRdWVyeSgndXNlcklkJykgdXNlcklkKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBkZWxldGVkVXNlciA9IGF3YWl0IHRoaXMudXNlcnNTZXJ2aWNlLmRlbGV0ZVVzZXIodXNlcklkKTtcbiAgICBpZiAoIWRlbGV0ZWRVc2VyKSB7dGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uKCdVc2VyIGRvZXMgbm90IGV4aXN0IScpOyB9XG4gICAgcmV0dXJuIGRlbGV0ZWRVc2VyO1xuICB9XG59XG4iXX0=