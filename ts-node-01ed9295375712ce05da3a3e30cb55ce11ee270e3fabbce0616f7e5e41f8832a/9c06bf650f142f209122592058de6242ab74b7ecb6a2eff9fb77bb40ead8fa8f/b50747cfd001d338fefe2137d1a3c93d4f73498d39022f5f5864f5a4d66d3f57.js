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
let ShoppingCartController = class ShoppingCartController {
    addItem() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'This is a fke service :D';
        });
    }
};
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "addItem", null);
ShoppingCartController = __decorate([
    common_1.Controller('shopping-cart')
], ShoppingCartController);
exports.ShoppingCartController = ShoppingCartController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbnRyb2xsZXIudHMiLCJzb3VyY2VzIjpbIi9ob21lL3N0YXJzenlyYXkvV2Vic3Rvcm1Qcm9qZWN0cy9uZXN0LXByYXRvbml0ZS1hcGkvc3JjL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFHbEQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFFM0IsT0FBTzs7WUFDWCxPQUFPLDBCQUEwQixDQUFDO1FBQ3BDLENBQUM7S0FBQTtDQUNGLENBQUE7QUFIQztJQURDLGFBQUksRUFBRTs7OztxREFHTjtBQUpVLHNCQUFzQjtJQURsQyxtQkFBVSxDQUFDLGVBQWUsQ0FBQztHQUNmLHNCQUFzQixDQUtsQztBQUxZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3QsIENvbnRyb2xsZXIgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBDb250cm9sbGVyKCdzaG9wcGluZy1jYXJ0JylcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0NhcnRDb250cm9sbGVyIHtcbiAgQFBvc3QoKVxuICBhc3luYyBhZGRJdGVtKCkge1xuICAgIHJldHVybiAnVGhpcyBpcyBhIGZrZSBzZXJ2aWNlIDpEJztcbiAgfVxufVxuIl19