"use strict";
exports.__esModule = true;
exports.NameValuePairDataType = exports.GenderENUM = exports.BloodGroupENUM = void 0;
/**
 * This is a custom enum to help classify the blood groups
 */
var BloodGroupENUM;
(function (BloodGroupENUM) {
    BloodGroupENUM[BloodGroupENUM["APOSITIVE"] = 0] = "APOSITIVE";
    BloodGroupENUM[BloodGroupENUM["ANEGATIVE"] = 1] = "ANEGATIVE";
    BloodGroupENUM[BloodGroupENUM["BPOSITIVE"] = 2] = "BPOSITIVE";
    BloodGroupENUM[BloodGroupENUM["BNEGATIVE"] = 3] = "BNEGATIVE";
    BloodGroupENUM[BloodGroupENUM["OPOSITIVE"] = 4] = "OPOSITIVE";
    BloodGroupENUM[BloodGroupENUM["ONEGATIVE"] = 5] = "ONEGATIVE";
    BloodGroupENUM[BloodGroupENUM["ABPOSITIVE"] = 6] = "ABPOSITIVE";
    BloodGroupENUM[BloodGroupENUM["ABNEGATIVE"] = 7] = "ABNEGATIVE";
})(BloodGroupENUM || (BloodGroupENUM = {}));
exports.BloodGroupENUM = BloodGroupENUM;
/**
 * This is a custom enum to help classify genders
 */
var GenderENUM;
(function (GenderENUM) {
    GenderENUM[GenderENUM["MALE"] = 0] = "MALE";
    GenderENUM[GenderENUM["FEMALE"] = 1] = "FEMALE";
    GenderENUM[GenderENUM["OTHER"] = 2] = "OTHER";
})(GenderENUM || (GenderENUM = {}));
exports.GenderENUM = GenderENUM;
// /**
//  * This is a custom enum to help classify matching type
//  */
// enum matchENUM {
//   EQUALS,
//   LESSTHAN,
//   GREATERTHAN,
// }
/**
 * This object represents the where clause while conditionally
 * filtering objects from my array of profiles
 */
var NameValuePairDataType = /** @class */ (function () {
    //   match_type: matchENUM;
    function NameValuePairDataType(name, value) {
        this.name = name;
        this.value = value;
    }
    return NameValuePairDataType;
}());
exports.NameValuePairDataType = NameValuePairDataType;
