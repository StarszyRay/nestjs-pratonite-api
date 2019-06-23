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
const user_controller_1 = require("./users/user.controller");
const user_service_1 = require("./users/user.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(`mongodb://172.18.0.2:27017/test?gssapiServiceName=mongodb`, { useNewUrlParser: true }),
        ],
        controllers: [
            app_controller_1.AppController,
            user_controller_1.UserController
        ],
        providers: [
            app_service_1.AppService,
            user_service_1.UserService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUF3QztBQUN4QyxxREFBaUQ7QUFDakQsK0NBQTJDO0FBQzNDLCtDQUFrRDtBQUNsRCw2REFBeUQ7QUFDekQsdURBQW1EO0FBaUJuRCxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBQUcsQ0FBQTtBQUFaLFNBQVM7SUFickIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ1AseUJBQWMsQ0FBQyxPQUFPLENBQUMsMkRBQTJELEVBQUUsRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDOUc7UUFDRCxXQUFXLEVBQUU7WUFDWCw4QkFBYTtZQUNiLGdDQUFjO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCx3QkFBVTtZQUNWLDBCQUFXO1NBQ1o7S0FDRixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcHBDb250cm9sbGVyIH0gZnJvbSAnLi9hcHAuY29udHJvbGxlcic7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBNb25nb29zZU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvbW9uZ29vc2UnO1xuaW1wb3J0IHsgVXNlckNvbnRyb2xsZXIgfSBmcm9tICcuL3VzZXJzL3VzZXIuY29udHJvbGxlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlcnMvdXNlci5zZXJ2aWNlJztcblxuLy8gTW9uZ29vc2VNb2R1bGUuZm9yUm9vdCgpIG1pZ2h0IGh2ZSB0byBnZXQgY2hhbmdlZCBhZGRyZXNzIGRlcGVuZGluZyBvbiBkb2NrZXIncyBtb25nb0RCIGNvbnRhaW5lcidzIGlwLCB1c2U6XG4vLyAnZG9rZXIgaW5zcGVjdCA8Y29udGFpbmVyPicgdG8gbG9vayB1cCBjb250YWluZXIncyBpcCBhbmQgdGhlbiAnbW9uZ28gPGNvbnRlaW5lcl9pcD4nIHRvIGdldCBmdWxsIGFkZHJlc3Mgb2YgbW9uZ29kYiBydW5uaW5nIGluc2lkZVxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNb25nb29zZU1vZHVsZS5mb3JSb290KGBtb25nb2RiOi8vMTcyLjE4LjAuMjoyNzAxNy90ZXN0P2dzc2FwaVNlcnZpY2VOYW1lPW1vbmdvZGJgLCB7dXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pLFxuICBdLFxuICBjb250cm9sbGVyczogW1xuICAgIEFwcENvbnRyb2xsZXIsXG4gICAgVXNlckNvbnRyb2xsZXJcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXBwU2VydmljZSxcbiAgICBVc2VyU2VydmljZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==