(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/adal-angular5/node_modules/@angular/core/esm5 lazy recursive":
/*!******************************************************************************************!*\
  !*** ./node_modules/adal-angular5/node_modules/@angular/core/esm5 lazy namespace object ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/adal-angular5/node_modules/@angular/core/esm5 lazy recursive";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-presentation/PresentationType.ts":
/*!******************************************************!*\
  !*** ./src/app/add-presentation/PresentationType.ts ***!
  \******************************************************/
/*! exports provided: PresentationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationType", function() { return PresentationType; });
var PresentationType = /** @class */ (function () {
    function PresentationType(id, name) {
        this.id = id;
        this.name = name;
    }
    return PresentationType;
}());



/***/ }),

/***/ "./src/app/add-presentation/add-presentation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/add-presentation/add-presentation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-presentation/add-presentation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/add-presentation/add-presentation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"presentationType===undefind\">\r\n  <div class=\"col-sm\">\r\n    <input type=\"text\" class=\"form-control sm-2 h1\" aria-label=\"Default\" placeholder=\"Presentation Name\">\r\n    <div class=\"btn-toolbar\" role=\"toolbar\">\r\n      <div class=\"btn-group mr-3\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-outline-dark\" data-toggle=\"modal\" data-target=\"#presentationTypeModal\">Presentation Type</button>\r\n      </div>\r\n      <div class=\"btn-group ml-3\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-outline-dark\">Effective Dates</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"full-height\"></div>\r\n  <div class=\"col-sm\">\r\n    <div class=\"\">\r\n      <h4 class=\"d-inline p-2\">Presentations</h4>\r\n      <button type=\"button\" class=\"btn bg-red-color text-white float-right d-inline\">\r\n        <i class=\"fa fa-plus\"></i> Add New\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" id=\"Welcome\" *ngIf=\"presentationType==='Welcome'\">\r\n  <div class=\"col-sm border-right\">\r\n    <div class=\"row\">\r\n      <div class=\"h1 col-md-10\">Welcome</div>\r\n      <div>\r\n        <i class=\"fa fa-mobile-phone text-danger\" style=\"font-size: 48px\"></i>Preview\r\n      </div>\r\n    </div>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\">\r\n      <div class=\"btn-group mr-2 mt-3\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">Welcome</button>\r\n      </div>\r\n      <div class=\"btn-group ml-2 mt-3\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">Jun 22 - Jun 25</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm\">\r\n    <div class=\"\">\r\n      <h4 class=\"d-inline p-2\">Zones</h4>\r\n      <button type=\"button\" class=\"btn bg-red-color text-white float-right d-inline\">\r\n        <i class=\"fa fa-plus\"></i> Add New\r\n      </button>\r\n      <div class=\"mr-2 mt-4\">\r\n        <a routerLink=\"/home/zone-details\">\r\n          <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n            </div>\r\n            <div class=\"col-md-5 py-3\">\r\n              <h5 class=\"card-text\">Why Coke</h5>\r\n            </div>\r\n            <div class=\"col-md-3 py-3\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n          <div class=\"col-md-3\">\r\n            <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n          </div>\r\n          <div class=\"col-md-5 py-3\">\r\n            <h5 class=\"card-text\">Business Stats</h5>\r\n          </div>\r\n          <div class=\"col-md-3 py-3\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n          <div class=\"col-md-3\">\r\n            <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n          </div>\r\n          <div class=\"col-md-5 py-3\">\r\n            <h5 class=\"card-text\">Our Company</h5>\r\n          </div>\r\n          <div class=\"col-md-3 py-3\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n \r\n<div class=\"row\" id=\"CommercialPlan\" *ngIf=\"presentationType==='Commercial Plan'\">\r\n  <div class=\"col-sm border-right\">\r\n    <div class=\"row\">\r\n      <div class=\"h1 col-md-10\">FSR Family Restaurant</div>\r\n      <div>\r\n        <i class=\"fa fa-mobile-phone text-danger\" style=\"font-size: 48px\"></i>Preview\r\n      </div>\r\n    </div>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\">\r\n      <div class=\"btn-group mr-2 mt-3\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">Commercial Plan</button>\r\n      </div>\r\n      <div class=\"btn-group ml-2 mt-3\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">Jun 22 - Jun 25</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm\">\r\n    <div class=\"\">\r\n      <h4 class=\"d-inline p-2\">Zones</h4>\r\n      <button type=\"button\" class=\"btn bg-red-color text-white float-right d-inline\">\r\n        <i class=\"fa fa-plus\"></i> Add New\r\n      </button>\r\n      <div class=\"mr-2 my-4\">\r\n        <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n          <div class=\"col-md-3\">\r\n            <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n          </div>\r\n          <div class=\"col-md-5 py-3\">\r\n            <h5 class=\"card-text\">Entrance</h5>\r\n          </div>\r\n          <div class=\"col-md-3 py-3\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\" data-toggle=\"modal\" data-target=\".CommericalPlans\">Copy</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n          <div class=\"col-md-3\">\r\n            <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n          </div>\r\n          <div class=\"col-md-5 py-3\">\r\n            <h5 class=\"card-text\">Takeout Zone</h5>\r\n          </div>\r\n          <div class=\"col-md-3 py-3\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n          <div class=\"col-md-3\">\r\n            <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n          </div>\r\n          <div class=\"col-md-5 py-3\">\r\n            <h5 class=\"card-text\">Table Zone</h5>\r\n          </div>\r\n          <div class=\"col-md-3 py-3\">\r\n            <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h5>Select Zone Hotspots Slide</h5>\r\n      <img src=\"assets/Images/Upload.jpg\" class=\"rounded w-50\" alt=\"Upload\">\r\n      <div class=\"btn-toolbar\" role=\"toolbar\">\r\n        <div class=\"btn-group mr-2\" role=\"group\">\r\n          <button type=\"button\" class=\"btn btn-round-lg bg-red-color text-white d-inline p-2 btn-sm my-3\">\r\n            <i class=\"fa fa-plus\"></i> Upload\r\n          </button>\r\n        </div>\r\n        <div class=\"btn-group mr-2\" role=\"group\">\r\n          <button type=\"button\" class=\"btn btn-round-lg bg-red-color text-white d-inline p-2 btn-sm my-3\">Create Hotspots</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" id=\"Resouce\" *ngIf=\"presentationType==='Resource'\">\r\n  <div class=\"col-sm border-right\">\r\n    <div class=\"row\">\r\n      <div class=\"h1 col-md-10\">Equipment</div>\r\n      <div>\r\n        <i class=\"fa fa-mobile-phone text-danger\" style=\"font-size: 48px\"></i>Preview\r\n      </div>\r\n    </div>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\">\r\n      <div class=\"btn-group mr-2 mt-3\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">Resource</button>\r\n      </div>\r\n      <div class=\"btn-group ml-2 mt-3\" role=\"group\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">Jun 22 - Jun 25</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm\">\r\n    <div>\r\n      <h4 class=\"d-inline p-2\">Zones</h4>\r\n      <button type=\"button\" class=\"btn bg-red-color text-white float-right d-inline\">\r\n        <i class=\"fa fa-plus\"></i> Add New\r\n      </button>\r\n      <div class=\"mr-2 mt-4\">\r\n        <div class=\"row\">\r\n          <div class=\"ml-2 my-5\">\r\n            <span>\r\n              <i class=\"fa fa-align-justify\"></i>\r\n            </span>\r\n          </div>\r\n          <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n            </div>\r\n            <div class=\"col-md-5 py-3\">\r\n              <h5 class=\"card-text\">Venders</h5>\r\n            </div>\r\n            <div class=\"col-md-3 py-3\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"ml-2 my-5\">\r\n            <span>\r\n              <i class=\"fa fa-align-justify\"></i>\r\n            </span>\r\n          </div>\r\n          <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n            </div>\r\n            <div class=\"col-md-5 py-3\">\r\n              <h5 class=\"card-text\">Venders</h5>\r\n            </div>\r\n            <div class=\"col-md-3 py-3\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"ml-2 my-5\">\r\n            <span>\r\n              <i class=\"fa fa-align-justify\"></i>\r\n            </span>\r\n          </div>\r\n          <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n            </div>\r\n            <div class=\"col-md-5 py-3\">\r\n              <h5 class=\"card-text\">Venders</h5>\r\n            </div>\r\n            <div class=\"col-md-3 py-3\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"ml-2 my-5\">\r\n            <span>\r\n              <i class=\"fa fa-align-justify\"></i>\r\n            </span>\r\n          </div>\r\n          <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n            </div>\r\n            <div class=\"col-md-5 py-3\">\r\n              <h5 class=\"card-text\">Venders</h5>\r\n            </div>\r\n            <div class=\"col-md-3 py-3\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"ml-2 my-5\">\r\n            <span>\r\n              <i class=\"fa fa-align-justify\"></i>\r\n            </span>\r\n          </div>\r\n          <div class=\"row card-body mx-3 my-1 shadow bg-light rounded\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\">\r\n            </div>\r\n            <div class=\"col-md-5 py-3\">\r\n              <h5 class=\"card-text\">Venders</h5>\r\n            </div>\r\n            <div class=\"col-md-3 py-3\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-outline-dark px-4 ml-5\">Copy</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- The Modal -->\r\n<div class=\"modal fade\" id=\"presentationTypeModal\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n        <div class=\"custom-controls-stacked\">\r\n          <div class=\"form-check\">\r\n            <div class=\"form-check-label\" *ngFor=\"let option of Presentation\">\r\n              <label class=\"cursor-pointer\"><input type=\"radio\" name=\"price\" (click)=\"getValue(option.id)\" [checked]=\"option.id == selectedOption.id\" value={{option.id}} /> {{option.name}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-link float-right text-danger\" (click)=\"ViewPresentationType()\" data-dismiss=\"modal\">Apply</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Commercial Plans-->\r\n<div class=\"modal fade CommericalPlans\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" style=\"max-width: 950px;\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <div class=\"header-title\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <h1 class=\"d-inline\">Presentations</h1>\r\n          </div>\r\n          <div class=\"col-md-3 mt-2\">\r\n          <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <button class=\"btn btn-outline-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"\" aria-describedby=\"basic-addon1\">\r\n            </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"btn-toolbar float-left\" role=\"toolbar\">\r\n          <div class=\"btn-group mr-2\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Name</button>\r\n          </div>\r\n          <div class=\"btn-group mr-2\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Presentation Type</button>\r\n          </div>\r\n          <div class=\"btn-group mr-2\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Date</button>\r\n          </div>\r\n          <div class=\"btn-group mr-2\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Other Filters</button>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <!-- Nav tabs -->\r\n          <ul class=\"nav nav-tabs float-right\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">\r\n                <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">\r\n                <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <!-- Tab panes -->\r\n          <div class=\"tab-content\">\r\n            <div id=\"home\" class=\"tab-pane active\">\r\n              <table class=\"table\" width=\"100%\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">Name</th>\r\n                    <th scope=\"col\">Date</th>\r\n                    <th scope=\"col\">Presentation Type</th>\r\n                    <th scope=\"col\"></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 1</td>\r\n                    <td>Mark</td>\r\n                    <td>Otto</td>\r\n                    <td class=\"float-right mr-4\">\r\n                      <input type=\"radio\" />\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 2</td>\r\n                    <td>Jacob</td>\r\n                    <td>Thornton</td>\r\n                    <td class=\"float-right mr-4\">\r\n                        <input type=\"radio\" />\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 3</td>\r\n                    <td>Larry</td>\r\n                    <td>the Bird</td>\r\n                    <td class=\"float-right mr-4\">\r\n                        <input type=\"radio\" />\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 4</td>\r\n                    <td>Mark</td>\r\n                    <td>Otto</td>\r\n                    <td class=\"float-right mr-4\">\r\n                        <input type=\"radio\" />\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 5</td>\r\n                    <td>Jacob</td>\r\n                    <td>Thornton</td>\r\n                    <td class=\"float-right mr-4\">\r\n                        <input type=\"radio\" />\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 6</td>\r\n                    <td>Larry</td>\r\n                    <td>the Bird</td>\r\n                    <td class=\"float-right mr-4\">\r\n                        <input type=\"radio\" />\r\n                      </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div class=\"modal-footer d-inline\">\r\n                  <button type=\"button\" class=\"btn btn-outline-dark float-right mr-3 px-4\" data-dismiss=\"modal\">Save</button>\r\n                  <button type=\"button\" class=\"btn btn-outline-dark float-right mr-3 px-4\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n            <div id=\"menu1\" class=\"tab-pane fade\">\r\n              <table class=\"table\" width=\"100%\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">Name</th>\r\n                    <th scope=\"col\">Date</th>\r\n                    <th scope=\"col\">Slides Type</th>\r\n                    <th scope=\"col\">Equipment Type</th>\r\n                    <th scope=\"col\">Equipment Sub Type</th>\r\n                    <th scope=\"col\"></th>\r\n                  </tr>\r\n                </thead>\r\n              </table>\r\n              <div class=\"row ml-1 text-center text-lg-left\">\r\n                <div class=\"col-md-4 mb-5\">\r\n                  <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n                  <div class=\"caption ml-2\">\r\n                    <h4>Presentation 1</h4>\r\n                    <p>\r\n                      <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n                    </p>\r\n                    <!-- <div class=\"row ml-1\">\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                      </div>\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                      </div>\r\n                      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4 mb-5\">\r\n                  <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n                  <div class=\"caption ml-2\">\r\n                    <h4>Presentation 1</h4>\r\n                    <p>\r\n                      <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n                    </p>\r\n                    <!-- <div class=\"row ml-1\">\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                      </div>\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                      </div>\r\n                      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4 mb-5\">\r\n                  <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n                  <div class=\"caption ml-2\">\r\n                    <h4>Presentation 1</h4>\r\n                    <p>\r\n                      <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n                    </p>\r\n                    <!-- <div class=\"row ml-1\">\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                      </div>\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                      </div>\r\n                      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4 mb-5\">\r\n                  <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n                  <div class=\"caption ml-2\">\r\n                    <h4>Presentation 1</h4>\r\n                    <p>\r\n                      <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n                    </p>\r\n                    <!-- <div class=\"row ml-1\">\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                      </div>\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                      </div>\r\n                      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4 mb-5\">\r\n                  <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n                  <div class=\"caption ml-2\">\r\n                    <h4>Presentation 1</h4>\r\n                    <p>\r\n                      <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n                    </p>\r\n                    <!-- <div class=\"row ml-1\">\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                      </div>\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                      </div>\r\n                      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4 mb-5\">\r\n                  <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n                  <div class=\"caption ml-2\">\r\n                    <h4>Presentation 1</h4>\r\n                    <p>\r\n                      <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n                    </p>\r\n                    <!-- <div class=\"row ml-1\">\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                      </div>\r\n                      <div class=\"mr-2\">\r\n                        <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                      </div>\r\n                      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/add-presentation/add-presentation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-presentation/add-presentation.component.ts ***!
  \****************************************************************/
/*! exports provided: AddPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPresentationComponent", function() { return AddPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _PresentationType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PresentationType */ "./src/app/add-presentation/PresentationType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddPresentationComponent = /** @class */ (function () {
    function AddPresentationComponent() {
        this.selectedOption = new _PresentationType__WEBPACK_IMPORTED_MODULE_1__["PresentationType"](2, 'Commercial Plan');
        this.Presentation = [
            new _PresentationType__WEBPACK_IMPORTED_MODULE_1__["PresentationType"](1, 'Welcome'),
            new _PresentationType__WEBPACK_IMPORTED_MODULE_1__["PresentationType"](2, 'Commercial Plan'),
            new _PresentationType__WEBPACK_IMPORTED_MODULE_1__["PresentationType"](3, 'Resource'),
        ];
    }
    AddPresentationComponent.prototype.ngOnInit = function () {
    };
    AddPresentationComponent.prototype.getValue = function (optionid) {
        this.selectedOption = this.Presentation.filter(function (item) { return item.id == optionid; })[0];
    };
    AddPresentationComponent.prototype.ViewPresentationType = function () {
        this.presentationType = this.selectedOption.name;
    };
    AddPresentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-presentation',
            template: __webpack_require__(/*! ./add-presentation.component.html */ "./src/app/add-presentation/add-presentation.component.html"),
            styles: [__webpack_require__(/*! ./add-presentation.component.css */ "./src/app/add-presentation/add-presentation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddPresentationComponent);
    return AddPresentationComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _presentations_zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentations/zone-details/zone-details.component */ "./src/app/presentations/zone-details/zone-details.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _presentations_presentations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentations/presentations.component */ "./src/app/presentations/presentations.component.ts");
/* harmony import */ var _add_presentation_add_presentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-presentation/add-presentation.component */ "./src/app/add-presentation/add-presentation.component.ts");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/slides/slides.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]],
        children: [
            { path: 'presentation', component: _presentations_presentations_component__WEBPACK_IMPORTED_MODULE_3__["PresentationsComponent"] },
            { path: 'zone-details', component: _presentations_zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_0__["ZoneDetailsComponent"] },
            { path: 'addpresentation', component: _add_presentation_add_presentation_component__WEBPACK_IMPORTED_MODULE_4__["AddPresentationComponent"] },
            { path: 'slides', component: _slides_slides_component__WEBPACK_IMPORTED_MODULE_5__["SlidesComponent"] }
        ]
    }
    // { path: '', component: HomeComponent},
    // {
    //   path: 'home', component: HomeComponent,
    //     children:
    //      [
    //         { path: 'presentation', component: PresentationsComponent },
    //         { path: 'zone-details', component: ZoneDetailsComponent },
    //         { path: 'addpresentation', component: AddPresentationComponent },
    //         { path: 'slides', component: SlidesComponent }
    //       ]
    // }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MarketplaceWebPoc';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _presentations_presentations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentations/presentations.component */ "./src/app/presentations/presentations.component.ts");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/slides/slides.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth-callback/auth-callback.component */ "./src/app/auth-callback/auth-callback.component.ts");
/* harmony import */ var adal_angular5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! adal-angular5 */ "./node_modules/adal-angular5/index.js");
/* harmony import */ var adal_angular5__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(adal_angular5__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _add_presentation_add_presentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-presentation/add-presentation.component */ "./src/app/add-presentation/add-presentation.component.ts");
/* harmony import */ var _presentations_zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./presentations/zone-details/zone-details.component */ "./src/app/presentations/zone-details/zone-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: '',
        children: []
    },
    {
        path: 'auth-callback',
        component: _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_14__["AuthCallbackComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _presentations_presentations_component__WEBPACK_IMPORTED_MODULE_9__["PresentationsComponent"],
                _slides_slides_component__WEBPACK_IMPORTED_MODULE_10__["SlidesComponent"],
                _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_14__["AuthCallbackComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _add_presentation_add_presentation_component__WEBPACK_IMPORTED_MODULE_17__["AddPresentationComponent"],
                _presentations_zone_details_zone_details_component__WEBPACK_IMPORTED_MODULE_18__["ZoneDetailsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]],
            providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"], _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], adal_angular5__WEBPACK_IMPORTED_MODULE_15__["Adal5Service"],
                { provide: adal_angular5__WEBPACK_IMPORTED_MODULE_15__["Adal5HTTPService"],
                    useFactory: adal_angular5__WEBPACK_IMPORTED_MODULE_15__["Adal5HTTPService"].factory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], adal_angular5__WEBPACK_IMPORTED_MODULE_15__["Adal5Service"]]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-callback/auth-callback.component.css":
/*!***********************************************************!*\
  !*** ./src/app/auth-callback/auth-callback.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth-callback/auth-callback.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth-callback/auth-callback.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  auth-callback works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth-callback/auth-callback.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth-callback/auth-callback.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackComponent", function() { return AuthCallbackComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthCallbackComponent = /** @class */ (function () {
    function AuthCallbackComponent(_router, _authService, _zone, _activatedRoute) {
        this._router = _router;
        this._authService = _authService;
        this._zone = _zone;
        this._activatedRoute = _activatedRoute;
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.completeAuthentication();
        setTimeout(function () {
            _this._zone.run(function () { return _this._router.navigate(['/home']); });
        }, 200);
    };
    AuthCallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-callback',
            template: __webpack_require__(/*! ./auth-callback.component.html */ "./src/app/auth-callback/auth-callback.component.html"),
            styles: [__webpack_require__(/*! ./auth-callback.component.css */ "./src/app/auth-callback/auth-callback.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AuthCallbackComponent);
    return AuthCallbackComponent;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_authService) {
        this._authService = _authService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this._authService.isLoggedIn()) {
            return true;
        }
        this._authService.startAuthentication();
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var adal_angular5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! adal-angular5 */ "./node_modules/adal-angular5/index.js");
/* harmony import */ var adal_angular5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(adal_angular5__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(_adal) {
        this._adal = _adal;
        this._user = null;
        this._config = {
            tenant: 'CCOPSample.onmicrosoft.com',
            clientId: 'b80e1461-f039-4509-9bed-7078151db06a',
            redirectUri: "https://marketplacedev.azurewebsites.net/auth-callback",
            postLogoutRedirectUri: "https://marketplacedev.azurewebsites.net"
        };
        this._adal.init(this._config);
    }
    AuthService.prototype.isLoggedIn = function () {
        return this._adal.userInfo.authenticated;
    };
    AuthService.prototype.signout = function () {
        this._adal.logOut();
    };
    AuthService.prototype.startAuthentication = function () {
        this._adal.login();
    };
    AuthService.prototype.getName = function () {
        return this._user.profile.name;
    };
    AuthService.prototype.completeAuthentication = function () {
        var _this = this;
        this._adal.handleWindowCallback();
        this._adal.getUser().subscribe(function (user) {
            _this._user = user;
            console.log(_this._adal.userInfo);
            var expireIn = user.profile.exp.newDate().getTime();
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [adal_angular5__WEBPACK_IMPORTED_MODULE_1__["Adal5Service"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <div id=\"header\">\r\n    <app-nav-bar></app-nav-bar>\r\n  </div>\r\n  <br/>\r\n  <div id=\"body\" class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n<div id=\"footer\">\r\n  <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_authService) {
        this._authService = _authService;
        this.name = "";
        this.displayedColumns = ['image', 'position', 'name', 'weight', 'symbol', 'Type', 'Edit', 'Delete', 'Duplicate'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._authService.getName();
    };
    HomeComponent.prototype.signout = function () {
        this._authService.signout();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-red-color navbar-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">CLUB COKE</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n      <ul class=\"navbar-nav mr-5\">\r\n        <li class=\"nav-item\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">\r\n                <span class=\"fa fa-search\"></span>\r\n              </span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control mr-sm-2\" aria-label=\"Default\" placeholder=\"Search\">\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <div class=\"mr-auto\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"/home/presentation\">\r\n              <i class=\"fa fa-play\"></i> Presentation</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"/home/slides\">\r\n              <i class=\"fa fa-image\"></i> Slides</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"mr-2 my-lg-0\">\r\n        <ul class=\"navbar-nav\">\r\n          <!-- Dropdown -->\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" data-toggle=\"dropdown\">\r\n              Hello, {{userName}}\r\n              <i class=\"fa fa-cog\"></i>\r\n            </a>\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" href=\"#\">Internal Resources</a>\r\n              <a class=\"dropdown-item text-danger\" href=\"javascript:void(0);\" (click)=\"signout();\">Signout</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(_authService) {
        this._authService = _authService;
        this.displayedColumns = ['image', 'position', 'name', 'weight', 'symbol', 'Type', 'Edit', 'Delete', 'Duplicate'];
    }
    NavBarComponent.prototype.ngOnInit = function () {
        if (this._authService.getName() !== null || this._authService.getName() !== undefined) {
            this.userName = this._authService.getName();
        }
        else {
            this.userName = 'Guest User';
        }
        // this.userName = 'Guest User';
    };
    NavBarComponent.prototype.signout = function () {
        this._authService.signout();
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/presentations/presentations.component.css":
/*!***********************************************************!*\
  !*** ./src/app/presentations/presentations.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/presentations/presentations.component.html":
/*!************************************************************!*\
  !*** ./src/app/presentations/presentations.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-title\">\r\n  <h1 class=\"d-inline\">Presentations</h1>\r\n  <a class=\"btn btn-round-lg bg-red-color text-white ml-4\" routerLink=\"/home/addpresentation\">\r\n    <i class=\"fa fa-plus\"></i> New Presentation\r\n  </a>\r\n</div>\r\n<br />\r\n<div class=\"btn-toolbar float-left\" role=\"toolbar\">\r\n  <div class=\"btn-group mr-2\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Name</button>\r\n  </div>\r\n  <div class=\"btn-group mr-2\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Presentation Type</button>\r\n  </div>\r\n  <div class=\"btn-group mr-2\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Date</button>\r\n  </div>\r\n  <div class=\"btn-group mr-2\" role=\"group\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Other Filters</button>\r\n  </div>\r\n</div>\r\n<div>\r\n  <!-- Nav tabs -->\r\n  <ul class=\"nav nav-tabs float-right\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">\r\n        <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\">\r\n        <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n    <div id=\"home\" class=\"tab-pane active\">\r\n      <table class=\"table\" width=\"100%\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Date</th>\r\n            <th scope=\"col\">Presentation Type</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 1</td>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td class=\"float-right\">\r\n              <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm px-4\">Edit</button>\r\n                </div>\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 2</td>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td class=\"float-right\">\r\n              <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm px-4\">Edit</button>\r\n                </div>\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 3</td>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td class=\"float-right\">\r\n              <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm px-4\">Edit</button>\r\n                </div>\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 4</td>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td class=\"float-right\">\r\n              <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm px-4\">Edit</button>\r\n                </div>\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 5</td>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td class=\"float-right\">\r\n              <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm px-4\">Edit</button>\r\n                </div>\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td scope=\"row\"><i class=\"fa fa-image\"></i> Presentation 6</td>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td class=\"float-right\">\r\n              <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm px-4\">Edit</button>\r\n                </div>\r\n                <div class=\"btn-group mr-2\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                </div>\r\n                <div class=\"btn-group\" role=\"group\">\r\n                  <button type=\"button\" class=\"btn btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div id=\"menu1\" class=\"tab-pane fade\">\r\n      <table class=\"table\" width=\"100%\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Date</th>\r\n            <th scope=\"col\">Slides Type</th>\r\n            <th scope=\"col\">Equipment Type</th>\r\n            <th scope=\"col\">Equipment Sub Type</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </thead>\r\n      </table>\r\n      <div class=\"row ml-1 text-center text-lg-left\">\r\n        <div class=\"col-md-4 mb-5\">\r\n          <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n          <div class=\"caption ml-2\">\r\n            <h4>Presentation 1</h4>\r\n            <p>\r\n              <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n            </p>\r\n            <div class=\"row ml-1\">\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n              </div>\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-5\">\r\n          <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n          <div class=\"caption ml-2\">\r\n            <h4>Presentation 1</h4>\r\n            <p>\r\n              <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n            </p>\r\n            <div class=\"row ml-1\">\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n              </div>\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-5\">\r\n          <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n          <div class=\"caption ml-2\">\r\n            <h4>Presentation 1</h4>\r\n            <p>\r\n              <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n            </p>\r\n            <div class=\"row ml-1\">\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n              </div>\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-5\">\r\n          <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n          <div class=\"caption ml-2\">\r\n            <h4>Presentation 1</h4>\r\n            <p>\r\n              <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n            </p>\r\n            <div class=\"row ml-1\">\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n              </div>\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-5\">\r\n          <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n          <div class=\"caption ml-2\">\r\n            <h4>Presentation 1</h4>\r\n            <p>\r\n              <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n            </p>\r\n            <div class=\"row ml-1\">\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n              </div>\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-5\">\r\n          <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n          <div class=\"caption ml-2\">\r\n            <h4>Presentation 1</h4>\r\n            <p>\r\n              <i class=\"fa fa-clock-o mr-1\"></i><small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n            </p>\r\n            <div class=\"row ml-1\">\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n              </div>\r\n              <div class=\"mr-2\">\r\n                <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n              </div>\r\n              <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/presentations/presentations.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/presentations/presentations.component.ts ***!
  \**********************************************************/
/*! exports provided: PresentationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationsComponent", function() { return PresentationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PresentationsComponent = /** @class */ (function () {
    function PresentationsComponent() {
    }
    PresentationsComponent.prototype.ngOnInit = function () {
    };
    PresentationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-presentations',
            template: __webpack_require__(/*! ./presentations.component.html */ "./src/app/presentations/presentations.component.html"),
            styles: [__webpack_require__(/*! ./presentations.component.css */ "./src/app/presentations/presentations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PresentationsComponent);
    return PresentationsComponent;
}());



/***/ }),

/***/ "./src/app/presentations/zone-details/zone-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/presentations/zone-details/zone-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/presentations/zone-details/zone-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/presentations/zone-details/zone-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-5\">\r\n  <div class=\"row border-bottom\">\r\n  <div class=\"col-sm\">\r\n    <div class=\"sm-2 h1\">Why Coke</div>\r\n  </div>\r\n  <div class=\"col-sm\">\r\n      <button type=\"button\" class=\"btn bg-red-color text-white float-right d-inline\"><i class=\"fa fa-plus\"></i> Add Slides</button>\r\n  </div>\r\n  </div>\r\n  <div class=\"float-left\" style=\"min-height: 500px\">\r\n    <ul class=\"list-inline\">\r\n      <li class=\"list-inline-item mx-4 my-4\"><h6>Order</h6></li>\r\n      <li class=\"list-inline-item mx-4 my-4\"><h6>Name</h6></li>\r\n      <li class=\"list-inline-item mx-4 my-4\"><h6>Date</h6></li>\r\n    </ul>\r\n  </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/presentations/zone-details/zone-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/presentations/zone-details/zone-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ZoneDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneDetailsComponent", function() { return ZoneDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZoneDetailsComponent = /** @class */ (function () {
    function ZoneDetailsComponent() {
    }
    ZoneDetailsComponent.prototype.ngOnInit = function () {
    };
    ZoneDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zone-details',
            template: __webpack_require__(/*! ./zone-details.component.html */ "./src/app/presentations/zone-details/zone-details.component.html"),
            styles: [__webpack_require__(/*! ./zone-details.component.css */ "./src/app/presentations/zone-details/zone-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZoneDetailsComponent);
    return ZoneDetailsComponent;
}());



/***/ }),

/***/ "./src/app/slides/slides.component.css":
/*!*********************************************!*\
  !*** ./src/app/slides/slides.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/slides/slides.component.html":
/*!**********************************************!*\
  !*** ./src/app/slides/slides.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Grid-template-->\r\n<div>\r\n  <div class=\"header-title\">\r\n    <h1 class=\"d-inline\">Slides</h1>\r\n    <button type=\"button\" class=\"btn btn-round-lg bg-red-color text-white ml-4\" data-toggle=\"modal\" data-target=\"#newSlide\">\r\n      <i class=\"fa fa-plus\"></i> New Slide\r\n    </button>\r\n  </div>\r\n  <br />\r\n  <div class=\"btn-toolbar float-left\" role=\"toolbar\">\r\n    <div class=\"btn-group mr-2\" role=\"group\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Name</button>\r\n    </div>\r\n    <div class=\"btn-group mr-2\" role=\"group\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Slides Type</button>\r\n    </div>\r\n    <div class=\"btn-group mr-2\" role=\"group\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Equip Type</button>\r\n    </div>\r\n    <div class=\"btn-group mr-2\" role=\"group\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Equip Sub Type</button>\r\n    </div>\r\n    <div class=\"btn-group mr-2\" role=\"group\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Date</button>\r\n    </div>\r\n    <div class=\"btn-group mr-2\" role=\"group\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Other Filters</button>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <!-- Nav tabs -->\r\n    <ul class=\"nav nav-tabs float-right\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#slides-list\">\r\n          <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#slides\">\r\n          <i class=\"fa fa-th-large\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n      <div id=\"slides-list\" class=\"tab-pane active\">\r\n        <table class=\"table\" width=\"100%\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Name</th>\r\n              <th scope=\"col\">Date</th>\r\n              <th scope=\"col\">Slides Type</th>\r\n              <th scope=\"col\">Equipment Type</th>\r\n              <th scope=\"col\">Equipment Sub Type</th>\r\n              <th scope=\"col\"></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr data-toggle=\"modal\" data-target=\".SlidePresentation\">\r\n              <td scope=\"row\"><i class=\"fa fa-image\"></i> Slides 1</td>\r\n              <td> 12/12/2018</td>\r\n              <td>Element Asset</td>\r\n              <td>Vending</td>\r\n              <td>Glass Front Vender</td>\r\n              <td class=\"mr-auto\">\r\n                <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-secondary btn-sm px-4\">Edit</button>\r\n                  </div>\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                  </div>\r\n                  <div class=\"btn-group\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td scope=\"row\"><i class=\"fa fa-image\"></i> Slides 2</td>\r\n              <td> 12/12/2018</td>\r\n              <td>Element Asset</td>\r\n              <td>Vending</td>\r\n              <td>Glass Front Vender</td>\r\n              <td class=\"mr-auto\">\r\n                <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-secondary btn-sm px-4\">Edit</button>\r\n                  </div>\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                  </div>\r\n                  <div class=\"btn-group\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td scope=\"row\"><i class=\"fa fa-image\"></i> Slides 3</td>\r\n              <td> 12/12/2018</td>\r\n              <td>Element Asset</td>\r\n              <td>Vending</td>\r\n              <td>Glass Front Vender</td>\r\n              <td class=\"mr-auto\">\r\n                <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-secondary btn-sm px-4\">Edit</button>\r\n                  </div>\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                  </div>\r\n                  <div class=\"btn-group\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td scope=\"row\"><i class=\"fa fa-image\"></i> Slides 4</td>\r\n              <td> 12/12/2018</td>\r\n              <td>Element Asset</td>\r\n              <td>Vending</td>\r\n              <td>Glass Front Vender</td>\r\n              <td class=\"mr-auto\">\r\n                <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-secondary btn-sm px-4\">Edit</button>\r\n                  </div>\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                  </div>\r\n                  <div class=\"btn-group\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td scope=\"row\"><i class=\"fa fa-image\"></i> Slides 5</td>\r\n              <td> 12/12/2018</td>\r\n              <td>Element Asset</td>\r\n              <td>Vending</td>\r\n              <td>Glass Front Vender</td>\r\n              <td class=\"mr-auto\">\r\n                <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-secondary btn-sm px-4\">Edit</button>\r\n                  </div>\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                  </div>\r\n                  <div class=\"btn-group\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td scope=\"row\"><i class=\"fa fa-image\"></i> Slides 6</td>\r\n              <td> 12/12/2018</td>\r\n              <td>Element Asset</td>\r\n              <td>Vending</td>\r\n              <td>Glass Front Vender</td>\r\n              <td class=\"mr-auto\">\r\n                <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-secondary btn-sm px-4\">Edit</button>\r\n                  </div>\r\n                  <div class=\"btn-group mr-2\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-danger bg-red-color btn-sm px-3\">Delete</button>\r\n                  </div>\r\n                  <div class=\"btn-group\" role=\"group\">\r\n                    <button type=\"button\" class=\"btn btn-round-lg btn-outline-dark btn-sm px-2\">Duplicate</button>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div id=\"slides\" class=\"tab-pane fade\">\r\n        <table class=\"table\" width=\"100%\">\r\n          <thead>\r\n            <tr>\r\n              <th scope=\"col\">Name</th>\r\n              <th scope=\"col\">Date</th>\r\n              <th scope=\"col\">Slides Type</th>\r\n              <th scope=\"col\">Equipment Type</th>\r\n              <th scope=\"col\">Equipment Sub Type</th>\r\n              <th scope=\"col\"></th>\r\n            </tr>\r\n          </thead>\r\n        </table>\r\n        <div class=\"row text-center text-lg-left ml-1\">\r\n          <div class=\"col-md-4 mb-5\">\r\n            <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n            <div class=\"caption ml-2\">\r\n              <h4>Slides 1</h4>\r\n              <p>\r\n                <i class=\"fa fa-clock-o mr-1\"></i>\r\n                <small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n              </p>\r\n              <div class=\"row ml-1\">\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                </div>\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 mb-5\">\r\n            <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n            <div class=\"caption ml-2\">\r\n              <h4>Slides 1</h4>\r\n              <p>\r\n                <i class=\"fa fa-clock-o mr-1\"></i>\r\n                <small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n              </p>\r\n              <div class=\"row ml-1\">\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                </div>\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 mb-5\">\r\n            <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n            <div class=\"caption ml-2\">\r\n              <h4>Slides 1</h4>\r\n              <p>\r\n                <i class=\"fa fa-clock-o mr-1\"></i>\r\n                <small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n              </p>\r\n              <div class=\"row ml-1\">\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                </div>\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 mb-5\">\r\n            <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n            <div class=\"caption ml-2\">\r\n              <h4>Slides 1</h4>\r\n              <p>\r\n                <i class=\"fa fa-clock-o mr-1\"></i>\r\n                <small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n              </p>\r\n              <div class=\"row ml-1\">\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                </div>\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 mb-5\">\r\n            <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n            <div class=\"caption ml-2\">\r\n              <h4>Slides 1</h4>\r\n              <p>\r\n                <i class=\"fa fa-clock-o mr-1\"></i>\r\n                <small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n              </p>\r\n              <div class=\"row ml-1\">\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                </div>\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 mb-5\">\r\n            <img class=\"img-fluid rounded w-75\" src=\"assets/Images/SlideImg.png\" alt=\"\">\r\n            <div class=\"caption ml-2\">\r\n              <h4>Slides 1</h4>\r\n              <p>\r\n                <i class=\"fa fa-clock-o mr-1\"></i>\r\n                <small> Effective: 10/12/2018 - 10/12/2018 </small>\r\n              </p>\r\n              <div class=\"row ml-1\">\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-secondary btn-sm\">Edit</button>\r\n                </div>\r\n                <div class=\"mr-2\">\r\n                  <button type=\"button\" class=\"btn btn-danger bg-red-color btn-sm\">Delete</button>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-outline-dark btn-sm\">Duplicate</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--Presentation Modal-->\r\n<div class=\"modal fade SlidePresentation\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <div class=\"popup-conatiner\">\r\n          <img src=\"assets/Images/Foutain.png\" class=\"rounded\">\r\n          <div>\r\n            <button type=\"button\" class=\"btn btn-danger btn-round-lg mr-2 mt-3 mb-3\">\r\n              <i class=\"fa fa-plus\"></i> Upload\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-danger btn-round-lg mr-2 mt-3 mb-3\" data-toggle=\"modal\" data-target=\"#hotspotModal\">Create Hotspots</button>\r\n            <button type=\"button\" class=\"btn btn-danger btn-round-lg mt-3 mb-3\" data-toggle=\"modal\" data-target=\".BrandModal\">Map Brands</button>\r\n          </div>\r\n          <div class=\"border-dark border-bottom mb-2\">\r\n            <h3>Fountain</h3>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <label>\r\n                <strong> Effective Start Date </strong>\r\n              </label>\r\n              <div>\r\n                <input type=\"date\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label>\r\n                <strong> Effective End Date </strong>\r\n              </label>\r\n              <div>\r\n                <input type=\"date\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <label>\r\n                <strong> Slide Type </strong>\r\n              </label>\r\n              <div>\r\n                <select class=\"form-control\">\r\n                  <option>Element Asset</option>\r\n                  <option>Element Non Asset</option>\r\n                  <option>Non Element</option>\r\n                  <option>Promotional Item</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                <strong>Equipment Type</strong>\r\n              </label>\r\n              <div>\r\n                <select class=\"form-control\">\r\n                  <option>Vender</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                <strong> Equipment Sub Type </strong>\r\n              </label>\r\n              <div>\r\n                <select class=\"form-control\">\r\n                  <option>Glass Font Vender (5x9)</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                <strong>Equipment Group</strong>\r\n              </label>\r\n              <div>\r\n                <select class=\"form-control\">\r\n                  <option>Large Capacity Glass Front</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <label>\r\n                <strong>Brand Market</strong>\r\n              </label>\r\n              <div>\r\n                <select class=\"form-control\">\r\n                  <option>Standard</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <label>\r\n                <strong> Accessories</strong>\r\n              </label>\r\n              <div>\r\n                <select class=\"form-control\">\r\n                  <option>Credit Card Reader</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                <strong> Tags </strong>\r\n              </label>\r\n              <div>\r\n                <input type=\"date\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-3 mb-4\">\r\n            <h3>\r\n              Brands\r\n              <span class=\"text-danger\"> Edit</span>\r\n            </h3>\r\n          </div>\r\n          <div class=\"row mt-3 mb-3\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle\">\r\n              <span class=\"small\">Add Brand</span>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle\">\r\n              <span class=\"small\">Add Brand</span>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle\">\r\n              <span class=\"small\">Add Brand</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle\">\r\n              <span class=\"small\">Add Brand</span>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle\">\r\n              <span class=\"small\">Add Brand</span>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle\">\r\n              <span class=\"small\">Add Brand</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"btn-group mr-2 float-right\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-outline-dark\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--New Slide-->\r\n<div class=\"modal\" id=\"newSlide\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close btn-round-lg\" data-dismiss=\"modal\">&times;</button>\r\n        <img src=\"assets/Images/Upload.jpg\" class=\"rounded w-25\" alt=\"Upload\">\r\n        <div class=\"btn-toolbar\" role=\"toolbar\">\r\n          <div class=\"btn-group mr-2\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-round-lg bg-red-color text-white d-inline px-2 btn-sm my-3\">Upload</button>\r\n          </div>\r\n          <div class=\"btn-group mr-2\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-round-lg bg-red-color text-white d-inline px-2 btn-sm my-3\">Create Hotspots</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group form-group-sm col-sm-4\">\r\n            <label for=\"first_name\" class=\"col-form-label\">Name</label>\r\n            <div>\r\n              <input type=\"text\" class=\"form-control\" id=\"first_name\" name=\"first_name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group form-group-sm col-sm-4\">\r\n            <label for=\"last_name\" class=\"col-form-label\">Label</label>\r\n            <div>\r\n              <input type=\"text\" class=\"form-control \" id=\"last_name\" name=\"last_name\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group form-group-sm col-md-4\">\r\n            <label class=\"col-form-label\">Effective Start Date</label>\r\n            <div>\r\n              <input type=\"date\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group form-group-sm col-md-4\">\r\n            <label class=\"col-form-label\">Effective End Date</label>\r\n            <div>\r\n              <input type=\"date\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group form-group-sm col-md-4\">\r\n            <label for=\"City\" class=\"col-form-label\">Slide Type</label>\r\n            <div>\r\n              <select class=\"form-control\" id=\"sel1\" name=\"sellist1\">\r\n                <option>Element Asset</option>\r\n                <option>Element Non Asset</option>\r\n                <option>Non Element</option>\r\n                <option>Promotional Item</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row float-right\">\r\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--Brand Mapping-->\r\n<div class=\"modal fade BrandModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" style=\"max-width: 1150px;\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <div class=\"popup-conatiner\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10 my-3\">\r\n              <h3>Assign Product Layout</h3>\r\n            </div>\r\n            <div class=\"col-md-2 my-4 float-right text-danger\">\r\n              <a href=\"#\">Reset all</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"card mr-2\" style=\"width: 350px\">\r\n              <div class=\"card-body mx-3 my-2 bg-light\">\r\n                <table>\r\n                  <tr>\r\n                    <th rowspan=\"2\">\r\n                      <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle mr-2\">\r\n                    </th>\r\n                    <td>\r\n                      <span class=\"small card-text\">120Z PET LS24 SPRITE</span>\r\n                    </td>\r\n                    <th rowspan=\"2\">\r\n                      <span class=\"ml-5\">...</span>\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <span class=\"small card-title\">\r\n                        <strong> Vender Rate: $1.50 </strong>\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body mx-3 my-1 bg-light\">\r\n                <table>\r\n                  <tr>\r\n                    <th rowspan=\"2\">\r\n                      <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle mr-2\">\r\n                    </th>\r\n                    <td>\r\n                      <span class=\"small card-text\">120Z PET LS24 SPRITE</span>\r\n                    </td>\r\n                    <th rowspan=\"2\">\r\n                      <span class=\"ml-5\">...</span>\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <span class=\"small card-title\">\r\n                        <strong> Vender Rate: $1.50 </strong>\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body mx-3 my-1 bg-light\">\r\n                <table>\r\n                  <tr>\r\n                    <th rowspan=\"2\">\r\n                      <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle mr-2\">\r\n                    </th>\r\n                    <td>\r\n                      <span class=\"small card-text\">120Z PET LS24 SPRITE</span>\r\n                    </td>\r\n                    <th rowspan=\"2\">\r\n                      <span class=\"ml-5\">...</span>\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <span class=\"small card-title\">\r\n                        <strong> Vender Rate: $1.50 </strong>\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body mx-3 my-1 bg-light\">\r\n                <table>\r\n                  <tr>\r\n                    <th rowspan=\"2\">\r\n                      <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle mr-2\">\r\n                    </th>\r\n                    <td>\r\n                      <span class=\"small card-text\">120Z PET LS24 SPRITE</span>\r\n                    </td>\r\n                    <th rowspan=\"2\">\r\n                      <span class=\"ml-5\">...</span>\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <span class=\"small card-title\">\r\n                        <strong> Vender Rate: $1.50 </strong>\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n              <div class=\"card-body mx-3 my-1 bg-light\">\r\n                <table>\r\n                  <tr>\r\n                    <th rowspan=\"2\">\r\n                      <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle mr-2\">\r\n                    </th>\r\n                    <td>\r\n                      <span class=\"small card-text\">120Z PET LS24 SPRITE</span>\r\n                    </td>\r\n                    <th rowspan=\"2\">\r\n                      <span class=\"ml-5\">...</span>\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <span class=\"small card-title\">\r\n                        <strong> Vender Rate: $1.50 </strong>\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\" style=\"width: 700px\">\r\n              <div class=\"card-body row\">\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n                <div class=\"mx-1 my-1 border\">\r\n                  <img src=\"assets/Images/SlideImg.png\" width=\"60px\" height=\"55px\" class=\"rounded-circle my-5 mx-2\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"btn-group mr-2 mt-2 float-right pull-md-5\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-outline-dark\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Create Hotspot -->\r\n<div class=\"modal\" id=\"hotspotModal\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body jumbotron\" style=\"margin: 10px\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">\r\n            <img src=\"assets/Images/CokeEquip.png\" class=\"w-100 \">\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <h1>Product Vender </h1>\r\n            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna\r\n            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis\r\n            nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse\r\n            molestie consequat...\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer d-inline\">\r\n        <button type=\"button\" class=\"btn btn-danger float-left\" data-dismiss=\"modal\">New Hotspot</button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark float-right\" data-dismiss=\"modal\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Link Hotspot-->\r\n<div class=\"modal\" id=\"linkHotspot\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group has-search\">\r\n            <span class=\"fa fa-search form-control-feedback\"></span>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            <span class=\"fa fa-search form-control-feedback\"></span> -->\r\n          </div>\r\n          <select multiple class=\"form-control\" id=\"sel2\" name=\"sellist2\">\r\n            <option>Slide 1</option>\r\n            <option>Slide 2</option>\r\n            <option>Slide 3</option>\r\n            <option>Slide 4</option>\r\n            <option>Slide 5</option>\r\n          </select>\r\n        </form>\r\n      </div>\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer d-inline\">\r\n        <button type=\"button\" class=\"btn btn-danger float-left\" data-dismiss=\"modal\">Remove</button>\r\n        <button type=\"button\" class=\"btn btn-danger float-right\" data-dismiss=\"modal\">Done</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/slides/slides.component.ts":
/*!********************************************!*\
  !*** ./src/app/slides/slides.component.ts ***!
  \********************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlidesComponent = /** @class */ (function () {
    function SlidesComponent() {
    }
    SlidesComponent.prototype.ngOnInit = function () {
    };
    SlidesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! ./slides.component.html */ "./src/app/slides/slides.component.html"),
            styles: [__webpack_require__(/*! ./slides.component.css */ "./src/app/slides/slides.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlidesComponent);
    return SlidesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CCBCC\MarketPalceGit\MarketplaceWebGit\MarketplaceApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map