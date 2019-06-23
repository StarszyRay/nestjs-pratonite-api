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
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(`mongodb://172.18.0.2:27017/test?gssapiServiceName=mongodb`, { useNewUrlParser: true, user: 'admin', password: 'admin1' }),
            users_module_1.UsersModule,
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [
            app_service_1.AppService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUF3QztBQUN4QyxxREFBaUQ7QUFDakQsK0NBQTJDO0FBQzNDLCtDQUFrRDtBQUNsRCx1REFBbUQ7QUFpQm5ELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FBRyxDQUFBO0FBQVosU0FBUztJQVpyQixlQUFNLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDUCx5QkFBYyxDQUFDLE9BQU8sQ0FBQywyREFBMkQsRUFBRSxFQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7WUFDaEosMEJBQVc7U0FDWjtRQUNELFdBQVcsRUFBRTtZQUNYLDhCQUFhO1NBQ2Q7UUFDRCxTQUFTLEVBQUU7WUFDVCx3QkFBVTtTQUNYO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vYXBwLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9uZ29vc2VNb2R1bGUgfSBmcm9tICdAbmVzdGpzL21vbmdvb3NlJztcbmltcG9ydCB7IFVzZXJzTW9kdWxlIH0gZnJvbSAnLi91c2Vycy91c2Vycy5tb2R1bGUnO1xuaW1wb3J0IHsgdXNlckluZm8gfSBmcm9tICdvcyc7XG5cbi8vIE1vbmdvb3NlTW9kdWxlLmZvclJvb3QoKSBtaWdodCBodmUgdG8gZ2V0IGNoYW5nZWQgYWRkcmVzcyBkZXBlbmRpbmcgb24gZG9ja2VyJ3MgbW9uZ29EQiBjb250YWluZXIncyBpcCwgdXNlOlxuLy8gJ2Rva2VyIGluc3BlY3QgPGNvbnRhaW5lcj4nIHRvIGxvb2sgdXAgY29udGFpbmVyJ3MgaXAgYW5kIHRoZW4gJ21vbmdvIDxjb250ZWluZXJfaXA+JyB0byBnZXQgZnVsbCBhZGRyZXNzIG9mIG1vbmdvZGIgcnVubmluZyBpbnNpZGVcbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTW9uZ29vc2VNb2R1bGUuZm9yUm9vdChgbW9uZ29kYjovLzE3Mi4xOC4wLjI6MjcwMTcvdGVzdD9nc3NhcGlTZXJ2aWNlTmFtZT1tb25nb2RiYCwge3VzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlcjogJ2FkbWluJywgcGFzc3dvcmQ6ICdhZG1pbjEnIH0pLFxuICAgIFVzZXJzTW9kdWxlLFxuICBdLFxuICBjb250cm9sbGVyczogW1xuICAgIEFwcENvbnRyb2xsZXIsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFwcFNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19