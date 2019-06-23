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
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('UserModelToken')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuc2VydmljZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWlDO0FBQ2pDLDJDQUFvRDtBQUtwRCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBQ3ZCLFlBQXVELFNBQStCO1FBQS9CLGNBQVMsR0FBVCxTQUFTLENBQXNCO0lBQUcsQ0FBQztJQUVwRixNQUFNLENBQUMsYUFBNEI7O1lBQ3ZDLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxPQUFPLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUVLLE9BQU87O1lBQ1gsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUMsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQVhZLFlBQVk7SUFEeEIsbUJBQVUsRUFBRTtJQUVFLFdBQUEsZUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7cUNBQTZCLGdCQUFLO0dBRDVELFlBQVksQ0FXeEI7QUFYWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlckludGVyZmFjZSB9IGZyb20gJy4vdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ3JlYXRlVXNlckR0byB9IGZyb20gJy4vY3JlYXRlLXVzZXIuZHRvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ1VzZXJNb2RlbFRva2VuJykgcHJpdmF0ZSByZWFkb25seSB1c2VyTW9kZWw6IE1vZGVsPFVzZXJJbnRlcmZhY2U+KSB7fVxuXG4gIGFzeW5jIGNyZWF0ZShjcmVhdGVVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKTogUHJvbWlzZTxVc2VySW50ZXJmYWNlPiB7XG4gICAgY29uc3QgY3JlYXRlZFVzZXIgPSBuZXcgdGhpcy51c2VyTW9kZWwoY3JlYXRlVXNlckR0byk7XG4gICAgcmV0dXJuIGF3YWl0IGNyZWF0ZWRVc2VyLnNhdmUoKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbGwoKTogUHJvbWlzZTxVc2VySW50ZXJmYWNlW10+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyTW9kZWwuZmluZCgpLmV4ZWMoKTtcbiAgfVxufVxuIl19