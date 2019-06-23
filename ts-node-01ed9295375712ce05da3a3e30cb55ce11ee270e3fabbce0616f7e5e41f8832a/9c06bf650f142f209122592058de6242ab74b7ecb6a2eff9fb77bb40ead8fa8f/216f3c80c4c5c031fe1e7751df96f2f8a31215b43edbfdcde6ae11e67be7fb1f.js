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
const common_1 = require("@nestjs/common");
const item_service_1 = require("./item.service");
const item_interface_1 = require("./item.interface");
const items_pipe_1 = require("../pipes/items.pipe");
let ItemsController = class ItemsController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.itemsService.findAll();
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.itemsService.create(item);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new items_pipe_1.ItemsValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_interface_1.Item]),
    __metadata("design:returntype", Promise)
], ItemsController.prototype, "create", null);
ItemsController = __decorate([
    common_1.Controller('items'),
    __metadata("design:paramtypes", [item_service_1.ItemsService])
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvaXRlbXMvaXRlbXMuY29udHJvbGxlci50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvaXRlbXMvaXRlbXMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNFO0FBQ3RFLGlEQUE4QztBQUM5QyxxREFBd0M7QUFFeEMsb0RBQTBEO0FBRzFELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFMUIsWUFBNkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBR3JELE9BQU87O1lBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUlLLE1BQU0sQ0FBUyxJQUFVOztZQUM3QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtDQUNGLENBQUE7QUFUQztJQURDLFlBQUcsRUFBRTs7Ozs4Q0FHTDtBQUlEO0lBRkMsYUFBSSxFQUFFO0lBQ04saUJBQVEsQ0FBQyxJQUFJLGdDQUFtQixFQUFFLENBQUM7SUFDdEIsV0FBQSxhQUFJLEVBQUUsQ0FBQTs7cUNBQU8scUJBQUk7OzZDQUU5QjtBQWJVLGVBQWU7SUFEM0IsbUJBQVUsQ0FBQyxPQUFPLENBQUM7cUNBR3lCLDJCQUFZO0dBRjVDLGVBQWUsQ0FjM0I7QUFkWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldCwgUG9zdCwgQm9keSwgQ29udHJvbGxlciwgVXNlUGlwZXN9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEl0ZW1zU2VydmljZSB9IGZyb20gJy4vaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL2l0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7IENyZWF0ZUl0ZW1EdG8gfSBmcm9tICcuL2NyZWF0ZS1pdGVtLmR0byc7XG5pbXBvcnQgeyBJdGVtc1ZhbGlkYXRpb25QaXBlIH0gZnJvbSAnLi4vcGlwZXMvaXRlbXMucGlwZSc7XG5cbkBDb250cm9sbGVyKCdpdGVtcycpXG5leHBvcnQgY2xhc3MgSXRlbXNDb250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGl0ZW1zU2VydmljZTogSXRlbXNTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoKVxuICBhc3luYyBmaW5kQWxsKCk6IFByb21pc2U8SXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNTZXJ2aWNlLmZpbmRBbGwoKTtcbiAgfVxuXG4gIEBQb3N0KClcbiAgQFVzZVBpcGVzKG5ldyBJdGVtc1ZhbGlkYXRpb25QaXBlKCkpXG4gIGFzeW5jIGNyZWF0ZShAQm9keSgpIGl0ZW06IEl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1NlcnZpY2UuY3JlYXRlKGl0ZW0pO1xuICB9XG59XG4iXX0=