"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typeorm_1 = require("typeorm");
var ProductsRepository_1 = __importDefault(require("../repositories/ProductsRepository"));
var CreateProductService_1 = __importDefault(require("../services/CreateProductService"));
var productsRouter = express_1.Router();
productsRouter.get('/:order/:filter?', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
    var _a, order, filter, productsRepository, params, products, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.params, order = _a.order, filter = _a.filter;
                productsRepository = typeorm_1.getCustomRepository(ProductsRepository_1.default);
                params = [order || 'name_asc', filter || ''];
                return [4 /*yield*/, productsRepository.get.apply(productsRepository, params)];
            case 1:
                products = _b.sent();
                return [2 /*return*/, response.json(products)];
            case 2:
                err_1 = _b.sent();
                return [2 /*return*/, response.json({ error: err_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
productsRouter.post('/', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
    var _a, name_1, description, price, promoPrice, statusFlag, imageUrl, category, createProductService, product, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.body, name_1 = _a.name, description = _a.description, price = _a.price, promoPrice = _a.promoPrice, statusFlag = _a.statusFlag, imageUrl = _a.imageUrl, category = _a.category;
                createProductService = new CreateProductService_1.default();
                return [4 /*yield*/, createProductService.execute({
                        name: name_1,
                        description: description,
                        price: price,
                        promoPrice: promoPrice,
                        statusFlag: statusFlag,
                        imageUrl: imageUrl,
                        categoryTitle: category,
                    })];
            case 1:
                product = _b.sent();
                return [2 /*return*/, response.json(product)];
            case 2:
                err_2 = _b.sent();
                throw new Error(err_2.message);
            case 3: return [2 /*return*/];
        }
    });
}); });
productsRouter.put('/:id', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
    var id, _a, name_2, description, price, promoPrice, statusFlag, imageUrl, category, productsRepository, product, productUpdated, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                id = request.params.id;
                _a = request.body, name_2 = _a.name, description = _a.description, price = _a.price, promoPrice = _a.promoPrice, statusFlag = _a.statusFlag, imageUrl = _a.imageUrl, category = _a.category;
                productsRepository = typeorm_1.getCustomRepository(ProductsRepository_1.default);
                return [4 /*yield*/, productsRepository.findOne(id)];
            case 1:
                product = _b.sent();
                if (!product) {
                    return [2 /*return*/, response.status(400).json({ error: 'Produto não encontrado' })];
                }
                productUpdated = {
                    id: id,
                    name: name_2,
                    description: description,
                    price: price,
                    promo_price: promoPrice,
                    status_flag: statusFlag,
                    image_url: imageUrl,
                    category: category,
                };
                return [4 /*yield*/, productsRepository.save(productUpdated)];
            case 2:
                _b.sent();
                return [2 /*return*/, response.json(productUpdated)];
            case 3:
                err_3 = _b.sent();
                throw new Error(err_3.message);
            case 4: return [2 /*return*/];
        }
    });
}); });
productsRouter.delete('/:id', function (request, response) { return __awaiter(_this, void 0, void 0, function () {
    var id, productsRepository, product, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = request.params.id;
                productsRepository = typeorm_1.getCustomRepository(ProductsRepository_1.default);
                return [4 /*yield*/, productsRepository.findOne(id)];
            case 1:
                product = _a.sent();
                if (!product) {
                    return [2 /*return*/, response.status(400).json({ error: 'Produto não encontrado' })];
                }
                return [4 /*yield*/, productsRepository.delete(product.id)];
            case 2:
                _a.sent();
                return [2 /*return*/, response.status(200).json()];
            case 3:
                err_4 = _a.sent();
                return [2 /*return*/, response.json({ error: err_4.message })];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = productsRouter;
