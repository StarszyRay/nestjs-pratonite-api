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
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield this.usersService.deleteUser(id);
            if (!deletedUser) {
                throw new common_1.NotFoundException('User does not exist!');
            }
            return deletedUser;
        });
    }
};
__decorate([
    common_1.Post(''),
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
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRIO0FBQzVILG1EQUErQztBQUUvQyx1REFBa0Q7QUFHbEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUMxQixZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFHckQsTUFBTSxDQUFTLGFBQTRCOztZQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFHSyxPQUFPOztZQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFHSyxXQUFXLENBQWMsRUFBVTs7WUFDdkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLE1BQU0sSUFBSSwwQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2FBQUU7WUFDdkUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFHSyxVQUFVLENBQVEsR0FBRyxFQUFlLEVBQVUsRUFBVSxhQUE0Qjs7WUFDeEYsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFBQyxNQUFNLElBQUksMEJBQWlCLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUFFO1lBQ3pFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDcEMsT0FBTyxFQUFFLDRCQUE0QjtnQkFDckMsV0FBVzthQUNaLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUdLLFVBQVUsQ0FBYyxFQUFFOztZQUM5QixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQUMsTUFBTSxJQUFJLDBCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFBRTtZQUN6RSxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBaENDO0lBREMsYUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNLLFdBQUEsYUFBSSxFQUFFLENBQUE7O3FDQUFnQiwrQkFBYTs7NkNBRWhEO0FBR0Q7SUFEQyxZQUFHLEVBQUU7Ozs7OENBR0w7QUFHRDtJQURDLFlBQUcsQ0FBQyxLQUFLLENBQUM7SUFDUSxXQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OztrREFJN0I7QUFHRDtJQURDLFlBQUcsQ0FBQyxLQUFLLENBQUM7SUFDTyxXQUFBLFlBQUcsRUFBRSxDQUFBLEVBQU8sV0FBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBYyxXQUFBLGFBQUksRUFBRSxDQUFBOztxREFBZ0IsK0JBQWE7O2lEQU96RjtBQUdEO0lBREMsZUFBTSxDQUFDLEtBQUssQ0FBQztJQUNJLFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7O2lEQUk1QjtBQW5DVSxlQUFlO0lBRDNCLG1CQUFVLENBQUMsT0FBTyxDQUFDO3FDQUV5Qiw0QkFBWTtHQUQ1QyxlQUFlLENBb0MzQjtBQXBDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUG9zdCwgQm9keSwgUGFyYW0sIE5vdEZvdW5kRXhjZXB0aW9uLCBQdXQsIFF1ZXJ5LCBEZWxldGUsIEh0dHBTdGF0dXMsIFJlcyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4vdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VySW50ZXJmYWNlIH0gZnJvbSAnLi91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDcmVhdGVVc2VyRHRvIH0gZnJvbSAnLi9jcmVhdGUtdXNlci5kdG8nO1xuXG5AQ29udHJvbGxlcigndXNlcnMnKVxuZXhwb3J0IGNsYXNzIFVzZXJzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHt9XG5cbiAgQFBvc3QoJycpXG4gIGFzeW5jIGNyZWF0ZShAQm9keSgpIGNyZWF0ZVVzZXJEdG86IENyZWF0ZVVzZXJEdG8pIHtcbiAgICB0aGlzLnVzZXJzU2VydmljZS5jcmVhdGUoY3JlYXRlVXNlckR0byk7XG4gIH1cblxuICBAR2V0KClcbiAgYXN5bmMgZmluZEFsbCgpOiBQcm9taXNlPFVzZXJJbnRlcmZhY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJzU2VydmljZS5maW5kQWxsKCk7XG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBhc3luYyBnZXRVc2VyQnlJZChAUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlcnNTZXJ2aWNlLmdldFVzZXJCeUlkKGlkKTtcbiAgICBpZiAoIXVzZXIpIHsgdGhyb3cgbmV3IE5vdEZvdW5kRXhjZXB0aW9uKCdVc2VyIGhhcyBub3QgYmVlbiBmb3VuZCEnKTsgfVxuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgQFB1dCgnOmlkJylcbiAgYXN5bmMgdXBkYXRlVXNlcihAUmVzKCkgcmVzLCBAUGFyYW0oJ2lkJykgaWQ6IHN0cmluZywgQEJvZHkoKSBjcmVhdGVVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKXtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHRoaXMudXNlcnNTZXJ2aWNlLnVwZGF0ZVVzZXIoaWQsIGNyZWF0ZVVzZXJEdG8pO1xuICAgIGlmICghdXBkYXRlZFVzZXIpIHt0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb24oJ1VzZXIgZG9lcyBub3QgZXhpc3QhJyk7IH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cyhIdHRwU3RhdHVzLk9LKS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6ICdVc2VyIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICB1cGRhdGVkVXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIEBEZWxldGUoJzppZCcpXG4gIGFzeW5jIGRlbGV0ZVVzZXIoQFBhcmFtKCdpZCcpIGlkKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBkZWxldGVkVXNlciA9IGF3YWl0IHRoaXMudXNlcnNTZXJ2aWNlLmRlbGV0ZVVzZXIoaWQpO1xuICAgIGlmICghZGVsZXRlZFVzZXIpIHt0aHJvdyBuZXcgTm90Rm91bmRFeGNlcHRpb24oJ1VzZXIgZG9lcyBub3QgZXhpc3QhJyk7IH1cbiAgICByZXR1cm4gZGVsZXRlZFVzZXI7XG4gIH1cbn1cbiJdfQ==