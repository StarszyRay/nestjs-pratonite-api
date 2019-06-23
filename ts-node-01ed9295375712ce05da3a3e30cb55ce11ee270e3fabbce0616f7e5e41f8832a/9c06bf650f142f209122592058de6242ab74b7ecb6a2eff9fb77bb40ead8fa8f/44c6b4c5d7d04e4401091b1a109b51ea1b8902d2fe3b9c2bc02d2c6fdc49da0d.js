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
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findById(id).exec();
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuc2VydmljZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWlDO0FBQ2pDLDJDQUE0QztBQUc1QywrQ0FBK0M7QUFHL0MsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUN2QixZQUFrRCxTQUErQjtRQUEvQixjQUFTLEdBQVQsU0FBUyxDQUFzQjtJQUFHLENBQUM7SUFFL0UsTUFBTSxDQUFDLGFBQTRCOztZQUN2QyxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEQsT0FBTyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFSyxPQUFPOztZQUNYLE9BQU8sTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxFQUFFOztZQUNsQixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEQsQ0FBQztLQUFBO0NBS0YsQ0FBQTtBQW5CWSxZQUFZO0lBRHhCLG1CQUFVLEVBQUU7SUFFRSxXQUFBLHNCQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7cUNBQTZCLGdCQUFLO0dBRHZELFlBQVksQ0FtQnhCO0FBbkJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlckludGVyZmFjZSB9IGZyb20gJy4vdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ3JlYXRlVXNlckR0byB9IGZyb20gJy4vY3JlYXRlLXVzZXIuZHRvJztcbmltcG9ydCB7IEluamVjdE1vZGVsIH0gZnJvbSAnQG5lc3Rqcy9tb25nb29zZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0TW9kZWwoJ1VzZXInKSBwcml2YXRlIHJlYWRvbmx5IHVzZXJNb2RlbDogTW9kZWw8VXNlckludGVyZmFjZT4pIHt9XG5cbiAgYXN5bmMgY3JlYXRlKGNyZWF0ZVVzZXJEdG86IENyZWF0ZVVzZXJEdG8pOiBQcm9taXNlPFVzZXJJbnRlcmZhY2U+IHtcbiAgICBjb25zdCBjcmVhdGVkVXNlciA9IG5ldyB0aGlzLnVzZXJNb2RlbChjcmVhdGVVc2VyRHRvKTtcbiAgICByZXR1cm4gYXdhaXQgY3JlYXRlZFVzZXIuc2F2ZSgpO1xuICB9XG5cbiAgYXN5bmMgZmluZEFsbCgpOiBQcm9taXNlPFVzZXJJbnRlcmZhY2VbXT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJNb2RlbC5maW5kKCkuZXhlYygpO1xuICB9XG5cbiAgYXN5bmMgZ2V0VXNlckJ5SWQoaWQpOiBQcm9taXNlPFVzZXJJbnRlcmZhY2U+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyTW9kZWwuZmluZEJ5SWQoaWQpLmV4ZWMoKTtcbiAgfVxuICAvLyBhc3luYyBlZGl0KGVkaXRVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIC8vICAgLy8gdG9kb1xuICAvLyAgIHJldHVybiBUcnVlO1xuICAvLyB9XG59XG4iXX0=