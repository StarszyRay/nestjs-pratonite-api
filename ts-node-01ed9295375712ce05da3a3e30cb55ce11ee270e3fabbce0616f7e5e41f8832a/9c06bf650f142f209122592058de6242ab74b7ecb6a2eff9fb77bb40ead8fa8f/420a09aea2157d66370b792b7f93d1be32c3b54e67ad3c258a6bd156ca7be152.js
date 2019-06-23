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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll() {
        return this.userService.findAll();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserController.prototype, "findAll", null);
UserController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlci5jb250cm9sbGVyLnRzIiwic291cmNlcyI6WyIvaG9tZS9zdGFyc3p5cmF5L1dlYnN0b3JtUHJvamVjdHMvbmVzdC1wcmF0b25pdGUtYXBpL3NyYy91c2Vycy91c2VyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUQ7QUFDakQsaURBQTZDO0FBRzdDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFBNkIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBR3pELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUNGLENBQUE7QUFIQztJQURDLFlBQUcsRUFBRTs7Ozs2Q0FHTDtBQU5VLGNBQWM7SUFEMUIsbUJBQVUsRUFBRTtxQ0FFK0IsMEJBQVc7R0FEMUMsY0FBYyxDQU8xQjtBQVBZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5cbkBDb250cm9sbGVyKClcbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoKVxuICBmaW5kQWxsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZmluZEFsbCgpO1xuICB9XG59XG4iXX0=