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
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(`mongodb://172.18.0.2:27017/test?gssapiServiceName=mongodb`, { useNewUrlParser: true }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUF3QztBQUN4QyxxREFBaUQ7QUFDakQsK0NBQTJDO0FBQzNDLCtDQUFrRDtBQUNsRCwrREFBMkQ7QUFDM0QseURBQXFEO0FBa0JyRCxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBQUcsQ0FBQTtBQUFaLFNBQVM7SUFkckIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ1AseUJBQWMsQ0FBQyxPQUFPLENBQUMsMkRBQTJELEVBQUUsRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FFOUc7UUFDRCxXQUFXLEVBQUU7WUFDWCw4QkFBYTtZQUNiLGtDQUFlO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsd0JBQVU7WUFDViw0QkFBWTtTQUNiO0tBQ0YsQ0FBQztHQUNXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBwQ29udHJvbGxlciB9IGZyb20gJy4vYXBwLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9uZ29vc2VNb2R1bGUgfSBmcm9tICdAbmVzdGpzL21vbmdvb3NlJztcbmltcG9ydCB7IFVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4vdXNlcnMvdXNlcnMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzL3VzZXJzLnNlcnZpY2UnO1xuXG4vLyBNb25nb29zZU1vZHVsZS5mb3JSb290KCkgbWlnaHQgaHZlIHRvIGdldCBjaGFuZ2VkIGFkZHJlc3MgZGVwZW5kaW5nIG9uIGRvY2tlcidzIG1vbmdvREIgY29udGFpbmVyJ3MgaXAsIHVzZTpcbi8vICdkb2tlciBpbnNwZWN0IDxjb250YWluZXI+JyB0byBsb29rIHVwIGNvbnRhaW5lcidzIGlwIGFuZCB0aGVuICdtb25nbyA8Y29udGVpbmVyX2lwPicgdG8gZ2V0IGZ1bGwgYWRkcmVzcyBvZiBtb25nb2RiIHJ1bm5pbmcgaW5zaWRlXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1vbmdvb3NlTW9kdWxlLmZvclJvb3QoYG1vbmdvZGI6Ly8xNzIuMTguMC4yOjI3MDE3L3Rlc3Q/Z3NzYXBpU2VydmljZU5hbWU9bW9uZ29kYmAsIHt1c2VOZXdVcmxQYXJzZXI6IHRydWUgfSksXG5cbiAgXSxcbiAgY29udHJvbGxlcnM6IFtcbiAgICBBcHBDb250cm9sbGVyLFxuICAgIFVzZXJzQ29udHJvbGxlclxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBcHBTZXJ2aWNlLFxuICAgIFVzZXJzU2VydmljZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==