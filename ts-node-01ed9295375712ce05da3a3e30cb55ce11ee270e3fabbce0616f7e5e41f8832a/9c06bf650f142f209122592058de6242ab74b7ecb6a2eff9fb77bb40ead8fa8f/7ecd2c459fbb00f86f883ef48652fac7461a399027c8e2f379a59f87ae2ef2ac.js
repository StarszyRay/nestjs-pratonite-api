"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(`mongodb://172.18.0.2:27017/test?gssapiServiceName=mongodb`, { useNewUrlParser: true }),
            users_module_1.UsersModule
        ],
        controllers: [
            app_controller_1.AppController,
            users_controller_1.UsersController
        ],
        providers: [
            app_service_1.AppService,
            users_service_1.UsersService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUF3QztBQUN4QyxxREFBaUQ7QUFDakQsK0NBQTJDO0FBQzNDLCtDQUFrRDtBQUNsRCwrREFBMkQ7QUFDM0QseURBQXFEO0FBQ3JELHVEQUFtRDtBQWtCbkQsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztDQUFHLENBQUE7QUFBWixTQUFTO0lBZHJCLGVBQU0sQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNQLHlCQUFjLENBQUMsT0FBTyxDQUFDLDJEQUEyRCxFQUFFLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQzdHLDBCQUFXO1NBQ1o7UUFDRCxXQUFXLEVBQUU7WUFDWCw4QkFBYTtZQUNiLGtDQUFlO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsd0JBQVU7WUFDViw0QkFBWTtTQUNiO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vYXBwLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9uZ29vc2VNb2R1bGUgfSBmcm9tICdAbmVzdGpzL21vbmdvb3NlJztcbmltcG9ydCB7IFVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4vdXNlcnMvdXNlcnMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5cbi8vIE1vbmdvb3NlTW9kdWxlLmZvclJvb3QoKSBtaWdodCBodmUgdG8gZ2V0IGNoYW5nZWQgYWRkcmVzcyBkZXBlbmRpbmcgb24gZG9ja2VyJ3MgbW9uZ29EQiBjb250YWluZXIncyBpcCwgdXNlOlxuLy8gJ2Rva2VyIGluc3BlY3QgPGNvbnRhaW5lcj4nIHRvIGxvb2sgdXAgY29udGFpbmVyJ3MgaXAgYW5kIHRoZW4gJ21vbmdvIDxjb250ZWluZXJfaXA+JyB0byBnZXQgZnVsbCBhZGRyZXNzIG9mIG1vbmdvZGIgcnVubmluZyBpbnNpZGVcbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTW9uZ29vc2VNb2R1bGUuZm9yUm9vdChgbW9uZ29kYjovLzE3Mi4xOC4wLjI6MjcwMTcvdGVzdD9nc3NhcGlTZXJ2aWNlTmFtZT1tb25nb2RiYCwge3VzZU5ld1VybFBhcnNlcjogdHJ1ZSB9KSxcbiAgICBVc2Vyc01vZHVsZVxuICBdLFxuICBjb250cm9sbGVyczogW1xuICAgIEFwcENvbnRyb2xsZXIsXG4gICAgVXNlcnNDb250cm9sbGVyXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFwcFNlcnZpY2UsXG4gICAgVXNlcnNTZXJ2aWNlXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19