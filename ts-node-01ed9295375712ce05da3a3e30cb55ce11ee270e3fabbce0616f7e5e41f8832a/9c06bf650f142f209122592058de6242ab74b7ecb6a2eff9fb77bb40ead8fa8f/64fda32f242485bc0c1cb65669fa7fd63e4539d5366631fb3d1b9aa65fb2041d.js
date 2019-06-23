"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello world!';
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvYXBwLnNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9ob21lL3N0YXJzenlyYXkvV2Vic3Rvcm1Qcm9qZWN0cy9uZXN0LXByYXRvbml0ZS1hcGkvc3JjL2FwcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBRzVDLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFDckIsUUFBUTtRQUNOLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBO0FBSlksVUFBVTtJQUR0QixtQkFBVSxFQUFFO0dBQ0EsVUFBVSxDQUl0QjtBQUpZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFNlcnZpY2Uge1xuICBnZXRIZWxsbygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnSGVsbG8gd29ybGQhJztcbiAgfVxufVxuIl19