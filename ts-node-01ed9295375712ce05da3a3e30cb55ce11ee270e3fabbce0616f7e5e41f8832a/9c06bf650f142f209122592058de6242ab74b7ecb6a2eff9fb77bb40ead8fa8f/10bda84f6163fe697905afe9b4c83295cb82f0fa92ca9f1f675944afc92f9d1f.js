"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const common_2 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let ItemsValidationPipe = class ItemsValidationPipe {
    transform(value, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            const { metatype } = metadata;
            if (!metadata || !this.toValidate(metatype)) {
                return value;
            }
            const object = class_transformer_1.plainToClass(metatype, value);
            const errors = yield class_validator_1.validate(object);
            if (errors.length > 0) {
                throw new common_1.BadRequestException('Validation failed');
            }
            return value;
        });
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find(type => metatype === type);
    }
};
ItemsValidationPipe = __decorate([
    common_2.Injectable()
], ItemsValidationPipe);
exports.ItemsValidationPipe = ItemsValidationPipe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvcGlwZXMvaXRlbXMucGlwZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvc3RhcnN6eXJheS9XZWJzdG9ybVByb2plY3RzL25lc3QtcHJhdG9uaXRlLWFwaS9zcmMvcGlwZXMvaXRlbXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFEO0FBQ3JELDJDQUF5RjtBQUN6RixxREFBMkM7QUFDM0MseURBQWlEO0FBR2pELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBQ3hCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBMEI7O1lBQy9DLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxNQUFNLE1BQU0sR0FBRyxnQ0FBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QyxNQUFNLE1BQU0sR0FBRyxNQUFNLDBCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLDRCQUFtQixDQUFDLG1CQUFtQixDQUFDLENBQUE7YUFDbkQ7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVPLFVBQVUsQ0FBQyxRQUFRO1FBQ3pCLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRixDQUFBO0FBbEJZLG1CQUFtQjtJQUQvQixtQkFBVSxFQUFFO0dBQ0EsbUJBQW1CLENBa0IvQjtBQWxCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWRSZXF1ZXN0RXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgSW5qZWN0YWJsZSwgQXJndW1lbnRNZXRhZGF0YSwgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCB7IHBsYWluVG9DbGFzcyB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEl0ZW1zVmFsaWRhdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtPGFueT4ge1xuICBhc3luYyB0cmFuc2Zvcm0odmFsdWUsIG1ldGFkYXRhOiBBcmd1bWVudE1ldGFkYXRhKSB7XG4gICAgY29uc3QgeyBtZXRhdHlwZSB9ID0gbWV0YWRhdGE7XG4gICAgaWYgKCFtZXRhZGF0YSB8fCAhdGhpcy50b1ZhbGlkYXRlKG1ldGF0eXBlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBvYmplY3QgPSBwbGFpblRvQ2xhc3MobWV0YXR5cGUsIHZhbHVlKTtcbiAgICBjb25zdCBlcnJvcnMgPSBhd2FpdCB2YWxpZGF0ZShvYmplY3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFeGNlcHRpb24oJ1ZhbGlkYXRpb24gZmFpbGVkJylcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1ZhbGlkYXRlKG1ldGF0eXBlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdHlwZXMgPSBbU3RyaW5nLCBCb29sZWFuLCBOdW1iZXIsIEFycmF5LCBPYmplY3RdO1xuICAgIHJldHVybiAhdHlwZXMuZmluZCh0eXBlID0+IG1ldGF0eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIl19