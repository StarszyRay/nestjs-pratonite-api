"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ItemsService = class ItemsService {
    constructor() {
        this.items = [];
    }
    findAll() {
        return this.items;
    }
    create(item) {
        this.items.push(item);
    }
};
ItemsService = __decorate([
    common_1.Injectable()
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvaXRlbXMvaXRlbS5zZXJ2aWNlLnRzIiwic291cmNlcyI6WyIvaG9tZS9zdGFyc3p5cmF5L1dlYnN0b3JtUHJvamVjdHMvbmVzdC1wcmF0b25pdGUtYXBpL3NyYy9pdGVtcy9pdGVtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwyQ0FBNEM7QUFJNUMsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUR6QjtRQUVtQixVQUFLLEdBQVcsRUFBRSxDQUFDO0lBUXRDLENBQUM7SUFOQyxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBVTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBO0FBVFksWUFBWTtJQUR4QixtQkFBVSxFQUFFO0dBQ0EsWUFBWSxDQVN4QjtBQVRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL2l0ZW0uaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1zU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaXRlbXM6IEl0ZW1bXSA9IFtdO1xuXG4gIGZpbmRBbGwoKTogSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgfVxuICBjcmVhdGUoaXRlbTogSXRlbSkge1xuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgfVxufVxuIl19