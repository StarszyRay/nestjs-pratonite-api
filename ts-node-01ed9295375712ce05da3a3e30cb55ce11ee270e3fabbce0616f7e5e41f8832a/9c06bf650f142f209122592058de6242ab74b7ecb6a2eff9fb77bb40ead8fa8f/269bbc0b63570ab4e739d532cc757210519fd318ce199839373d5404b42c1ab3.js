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
            mongoose_1.MongooseModule.forRoot('mongodb://172.18.0.2:27017/test?gssapiServiceName=mongodb', { useNewUrlParser: true }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUF3QztBQUN4QyxxREFBaUQ7QUFDakQsK0NBQTJDO0FBQzNDLCtDQUFrRDtBQUNsRCx1REFBbUQ7QUFpQm5ELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FBRyxDQUFBO0FBQVosU0FBUztJQVpyQixlQUFNLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDUCx5QkFBYyxDQUFDLE9BQU8sQ0FBQywyREFBMkQsRUFBRSxFQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUM3RywwQkFBVztTQUNaO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsOEJBQWE7U0FDZDtRQUNELFNBQVMsRUFBRTtZQUNULHdCQUFVO1NBQ1g7S0FDRixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9hcHAuY29udHJvbGxlcic7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBNb25nb29zZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvbW9uZ29vc2UnO1xuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5pbXBvcnQgeyB1c2VySW5mbyB9IGZyb20gJ29zJztcblxuLy8gTW9uZ29vc2VNb2R1bGUuZm9yUm9vdCgpIG1pZ2h0IGh2ZSB0byBnZXQgY2hhbmdlZCBhZGRyZXNzIGRlcGVuZGluZyBvbiBkb2NrZXIncyBtb25nb0RCIGNvbnRhaW5lcidzIGlwLCB1c2U6XG4vLyAnZG9rZXIgaW5zcGVjdCA8Y29udGFpbmVyPicgdG8gbG9vayB1cCBjb250YWluZXIncyBpcCBhbmQgdGhlbiAnbW9uZ28gPGNvbnRlaW5lcl9pcD4nIHRvIGdldCBmdWxsIGFkZHJlc3Mgb2YgbW9uZ29kYiBydW5uaW5nIGluc2lkZVxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNb25nb29zZU1vZHVsZS5mb3JSb290KCdtb25nb2RiOi8vMTcyLjE4LjAuMjoyNzAxNy90ZXN0P2dzc2FwaVNlcnZpY2VOYW1lPW1vbmdvZGInLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pLFxuICAgIFVzZXJzTW9kdWxlLFxuICBdLFxuICBjb250cm9sbGVyczogW1xuICAgIEFwcENvbnRyb2xsZXIsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFwcFNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19