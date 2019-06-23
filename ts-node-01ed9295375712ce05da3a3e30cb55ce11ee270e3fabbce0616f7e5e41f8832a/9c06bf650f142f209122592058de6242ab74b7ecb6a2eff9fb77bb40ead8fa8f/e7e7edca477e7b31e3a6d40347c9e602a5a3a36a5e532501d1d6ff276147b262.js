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
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuc2VydmljZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWlDO0FBQ2pDLDJDQUE0QztBQUc1QywrQ0FBK0M7QUFHL0MsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUN2QixZQUFrRCxTQUErQjtRQUEvQixjQUFTLEdBQVQsU0FBUyxDQUFzQjtJQUFHLENBQUM7SUFFL0UsTUFBTSxDQUFDLGFBQTRCOztZQUN2QyxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEQsT0FBTyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFSyxPQUFPOztZQUNYLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxNQUFNOztZQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEQsQ0FBQztLQUFBO0lBQ0ssVUFBVSxDQUFDLE1BQU0sRUFBRSxhQUE0Qjs7WUFDbkQsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqRyxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBbkJZLFlBQVk7SUFEeEIsbUJBQVUsRUFBRTtJQUVFLFdBQUEsc0JBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtxQ0FBNkIsZ0JBQUs7R0FEdkQsWUFBWSxDQW1CeEI7QUFuQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VySW50ZXJmYWNlIH0gZnJvbSAnLi91c2VyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDcmVhdGVVc2VyRHRvIH0gZnJvbSAnLi9jcmVhdGUtdXNlci5kdG8nO1xuaW1wb3J0IHsgSW5qZWN0TW9kZWwgfSBmcm9tICdAbmVzdGpzL21vbmdvb3NlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3RNb2RlbCgnVXNlcicpIHByaXZhdGUgcmVhZG9ubHkgdXNlck1vZGVsOiBNb2RlbDxVc2VySW50ZXJmYWNlPikge31cblxuICBhc3luYyBjcmVhdGUoY3JlYXRlVXNlckR0bzogQ3JlYXRlVXNlckR0byk6IFByb21pc2U8VXNlckludGVyZmFjZT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRVc2VyID0gbmV3IHRoaXMudXNlck1vZGVsKGNyZWF0ZVVzZXJEdG8pO1xuICAgIHJldHVybiBhd2FpdCBjcmVhdGVkVXNlci5zYXZlKCk7XG4gIH1cblxuICBhc3luYyBmaW5kQWxsKCk6IFByb21pc2U8VXNlckludGVyZmFjZVtdPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMudXNlck1vZGVsLmZpbmQoKS5leGVjKCk7XG4gIH1cblxuICBhc3luYyBnZXRVc2VyQnlJZCh1c2VySWQpOiBQcm9taXNlPFVzZXJJbnRlcmZhY2U+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyTW9kZWwuZmluZEJ5SWQodXNlcklkKS5leGVjKCk7XG4gIH1cbiAgYXN5bmMgdXBkYXRlVXNlcih1c2VySWQsIGNyZWF0ZVVzZXJEdG86IENyZWF0ZVVzZXJEdG8pOiBQcm9taXNlPFVzZXJJbnRlcmZhY2U+IHtcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHRoaXMudXNlck1vZGVsLmZpbmRCeUlkQW5kVXBkYXRlKHVzZXJJZCwgY3JlYXRlVXNlckR0bywgeyBuZXc6IHRydWUgfSk7XG4gICAgcmV0dXJuIHVwZGF0ZWRVc2VyO1xuICB9XG59XG4iXX0=