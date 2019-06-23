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
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdUser = new this.userModel(createUserDto);
            return yield createdUser.save();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.find().exec();
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findById(userId).exec();
        });
    }
    updateUser(userId, createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield this.userModel.findByIdAndUpdate(userId, createUserDto, { new: true });
            return updatedUser;
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield this.userModel.findByIdAndRemove(userId);
            return deletedUser;
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuc2VydmljZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWlDO0FBQ2pDLDJDQUE0QztBQUc1QywrQ0FBK0M7QUFHL0MsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUN2QixZQUFrRCxTQUErQjtRQUEvQixjQUFTLEdBQVQsU0FBUyxDQUFzQjtJQUFHLENBQUM7SUFFL0UsTUFBTSxDQUFDLGFBQTRCOztZQUN2QyxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEQsT0FBTyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFSyxPQUFPOztZQUNYLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxNQUFNOztZQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLE1BQU0sRUFBRSxhQUE0Qjs7WUFDbkQsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqRyxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsTUFBTTs7WUFDckIsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUM7S0FBQTtDQUNGLENBQUE7QUF6QlksWUFBWTtJQUR4QixtQkFBVSxFQUFFO0lBRUUsV0FBQSxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO3FDQUE2QixnQkFBSztHQUR2RCxZQUFZLENBeUJ4QjtBQXpCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFVzZXJJbnRlcmZhY2UgfSBmcm9tICcuL3VzZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IENyZWF0ZVVzZXJEdG8gfSBmcm9tICcuL2NyZWF0ZS11c2VyLmR0byc7XG5pbXBvcnQgeyBJbmplY3RNb2RlbCB9IGZyb20gJ0BuZXN0anMvbW9uZ29vc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdE1vZGVsKCdVc2VyJykgcHJpdmF0ZSByZWFkb25seSB1c2VyTW9kZWw6IE1vZGVsPFVzZXJJbnRlcmZhY2U+KSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShjcmVhdGVVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKTogUHJvbWlzZTxVc2VySW50ZXJmYWNlPiB7XG4gICAgY29uc3QgY3JlYXRlZFVzZXIgPSBuZXcgdGhpcy51c2VyTW9kZWwoY3JlYXRlVXNlckR0byk7XG4gICAgcmV0dXJuIGF3YWl0IGNyZWF0ZWRVc2VyLnNhdmUoKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbGwoKTogUHJvbWlzZTxVc2VySW50ZXJmYWNlW10+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyTW9kZWwuZmluZCgpLmV4ZWMoKTtcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXJCeUlkKHVzZXJJZCk6IFByb21pc2U8VXNlckludGVyZmFjZT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJNb2RlbC5maW5kQnlJZCh1c2VySWQpLmV4ZWMoKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVVzZXIodXNlcklkLCBjcmVhdGVVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKTogUHJvbWlzZTxVc2VySW50ZXJmYWNlPiB7XG4gICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCB0aGlzLnVzZXJNb2RlbC5maW5kQnlJZEFuZFVwZGF0ZSh1c2VySWQsIGNyZWF0ZVVzZXJEdG8sIHsgbmV3OiB0cnVlIH0pO1xuICAgIHJldHVybiB1cGRhdGVkVXNlcjtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZVVzZXIodXNlcklkKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBkZWxldGVkVXNlciA9IGF3YWl0IHRoaXMudXNlck1vZGVsLmZpbmRCeUlkQW5kUmVtb3ZlKHVzZXJJZCk7XG4gICAgcmV0dXJuIGRlbGV0ZWRVc2VyO1xuICB9XG59XG4iXX0=