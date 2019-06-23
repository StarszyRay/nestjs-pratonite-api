"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const user_schema_1 = require("./user.schema");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_schema_1.UserSchema }])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvdXNlcnMvdXNlcnMubW9kdWxlLnRzIiwic291cmNlcyI6WyIvaG9tZS9zdGFyc3p5cmF5L1dlYnN0b3JtUHJvamVjdHMvbmVzdC1wcmF0b25pdGUtYXBpL3NyYy91c2Vycy91c2Vycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsK0NBQWtEO0FBQ2xELHlEQUFxRDtBQUNyRCxtREFBK0M7QUFDL0MsK0NBQTJDO0FBTzNDLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRyxDQUFBO0FBQWQsV0FBVztJQUx2QixlQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsd0JBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RSxXQUFXLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1FBQzlCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLFdBQVcsQ0FBRztBQUFkLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTW9uZ29vc2VNb2R1bGUgfSBmcm9tICdAbmVzdGpzL21vbmdvb3NlJztcbmltcG9ydCB7IFVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4vdXNlcnMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNjaGVtYSB9IGZyb20gJy4vdXNlci5zY2hlbWEnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW01vbmdvb3NlTW9kdWxlLmZvckZlYXR1cmUoW3sgbmFtZTogJ1VzZXInLCBzY2hlbWE6IFVzZXJTY2hlbWEgfV0pXSxcbiAgY29udHJvbGxlcnM6IFtVc2Vyc0NvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtVc2Vyc1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxuIl19