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
const items_controller_1 = require("./items/items.controller");
const item_service_1 = require("./items/item.service");
const shopping_cart_controller_1 = require("./shopping-cart/shopping-cart.controller");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(`mongodb://172.18.0.2:27017/test?gssapiServiceName=mongodb`, { useNewUrlParser: true }),
        ],
        controllers: [
            app_controller_1.AppController,
            items_controller_1.ItemsController,
            shopping_cart_controller_1.ShoppingCartController,
        ],
        providers: [
            app_service_1.AppService,
            item_service_1.ItemsService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDJDQUF3QztBQUN4QyxxREFBaUQ7QUFDakQsK0NBQTJDO0FBQzNDLCtEQUEwRDtBQUMxRCx1REFBb0Q7QUFDcEQsdUZBQWtGO0FBQ2xGLCtDQUFrRDtBQWtCbEQsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztDQUFHLENBQUE7QUFBWixTQUFTO0lBZHJCLGVBQU0sQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNQLHlCQUFjLENBQUMsT0FBTyxDQUFDLDJEQUEyRCxFQUFFLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzlHO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsOEJBQWE7WUFDYixrQ0FBZTtZQUNmLGlEQUFzQjtTQUN2QjtRQUNELFNBQVMsRUFBRTtZQUNULHdCQUFVO1lBQ1YsMkJBQVk7U0FDYjtLQUNGLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL2FwcC5jb250cm9sbGVyJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IEl0ZW1zQ29udHJvbGxlcn0gZnJvbSAnLi9pdGVtcy9pdGVtcy5jb250cm9sbGVyJztcbmltcG9ydCB7IEl0ZW1zU2VydmljZSB9IGZyb20gJy4vaXRlbXMvaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IFNob3BwaW5nQ2FydENvbnRyb2xsZXIgfSBmcm9tICcuL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb250cm9sbGVyJztcbmltcG9ydCB7IE1vbmdvb3NlTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9tb25nb29zZSc7XG5cbi8vIE1vbmdvb3NlTW9kdWxlLmZvclJvb3QoKSBtaWdodCBodmUgdG8gZ2V0IGNoYW5nZWQgYWRkcmVzcyBkZXBlbmRpbmcgb24gZG9ja2VyJ3MgbW9uZ29EQiBjb250YWluZXIncyBpcCwgdXNlOlxuLy8gJ2Rva2VyIGluc3BlY3QgPGNvbnRhaW5lcj4nIHRvIGxvb2sgdXAgY29udGFpbmVyJ3MgaXAgYW5kIHRoZW4gJ21vbmdvIDxjb250ZWluZXJfaXA+JyB0byBnZXQgZnVsbCBhZGRyZXNzIG9mIG1vbmdvZGIgcnVubmluZyBpbnNpZGVcbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTW9uZ29vc2VNb2R1bGUuZm9yUm9vdChgbW9uZ29kYjovLzE3Mi4xOC4wLjI6MjcwMTcvdGVzdD9nc3NhcGlTZXJ2aWNlTmFtZT1tb25nb2RiYCwge3VzZU5ld1VybFBhcnNlcjogdHJ1ZSB9KSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtcbiAgICBBcHBDb250cm9sbGVyLFxuICAgIEl0ZW1zQ29udHJvbGxlcixcbiAgICBTaG9wcGluZ0NhcnRDb250cm9sbGVyLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBcHBTZXJ2aWNlLFxuICAgIEl0ZW1zU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=