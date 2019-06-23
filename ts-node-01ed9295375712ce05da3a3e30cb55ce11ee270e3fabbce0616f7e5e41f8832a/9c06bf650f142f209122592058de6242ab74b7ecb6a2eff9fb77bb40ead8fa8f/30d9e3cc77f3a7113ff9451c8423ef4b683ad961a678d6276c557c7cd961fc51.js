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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXVGO0FBQ3ZGLG1EQUErQztBQUUvQyx1REFBa0Q7QUFHbEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUMxQixZQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7SUFHckQsTUFBTSxDQUFTLGFBQTRCOztZQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFHSyxPQUFPOztZQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFHSyxXQUFXLENBQWMsRUFBVTs7WUFDdkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLE1BQU0sSUFBSSwwQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2FBQUU7WUFDdkUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRixDQUFBO0FBZkM7SUFEQyxhQUFJLENBQUMsU0FBUyxDQUFDO0lBQ0YsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7cUNBQWdCLCtCQUFhOzs2Q0FFaEQ7QUFHRDtJQURDLFlBQUcsRUFBRTs7Ozs4Q0FHTDtBQUdEO0lBREMsWUFBRyxDQUFDLEtBQUssQ0FBQztJQUNRLFdBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7O2tEQUk3QjtBQWxCVSxlQUFlO0lBRDNCLG1CQUFVLENBQUMsT0FBTyxDQUFDO3FDQUV5Qiw0QkFBWTtHQUQ1QyxlQUFlLENBbUIzQjtBQW5CWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUG9zdCwgQm9keSwgUGFyYW0sIE5vdEZvdW5kRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJJbnRlcmZhY2UgfSBmcm9tICcuL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENyZWF0ZVVzZXJEdG8gfSBmcm9tICcuL2NyZWF0ZS11c2VyLmR0byc7XG5cbkBDb250cm9sbGVyKCd1c2VycycpXG5leHBvcnQgY2xhc3MgVXNlcnNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkge31cblxuICBAUG9zdCgnL2NyZWF0ZScpXG4gIGFzeW5jIGNyZWF0ZShAQm9keSgpIGNyZWF0ZVVzZXJEdG86IENyZWF0ZVVzZXJEdG8pIHtcbiAgICB0aGlzLnVzZXJzU2VydmljZS5jcmVhdGUoY3JlYXRlVXNlckR0byk7XG4gIH1cblxuICBAR2V0KClcbiAgYXN5bmMgZmluZEFsbCgpOiBQcm9taXNlPFVzZXJJbnRlcmZhY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJzU2VydmljZS5maW5kQWxsKCk7XG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBhc3luYyBnZXRVc2VyQnlJZChAUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyk6IFByb21pc2U8VXNlckludGVyZmFjZT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJzU2VydmljZS5nZXRVc2VyQnlJZChpZCk7XG4gICAgaWYgKCF1c2VyKSB7IHRocm93IG5ldyBOb3RGb3VuZEV4Y2VwdGlvbignVXNlciBoYXMgbm90IGJlZW4gZm91bmQhJyk7IH1cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIl19