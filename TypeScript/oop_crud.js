"use strict";
/**
 * Here is your question.

profile.ts Create an object in TS with these properties (name: string, username: string, password: string, age: number, interests: [string], married: boolean, blood_group: enum, location: string, join_date: string) Add at least 10 more properties.

Write functions to do CRUD operations on an array of above objects.

Your code should be able to provide answers to questions like "how many profiles do we have where the age is less than 25 and are married" or "list of all people with  interest in cricket and who joined in 2022" etc

You are free to showcase all your professional skills. Like logic building, coding standards, OOP principles. Show me your best talent.
 */
exports.__esModule = true;
var dependencies_1 = require("./dependencies");
var ProfilesArrayOperations = /** @class */ (function () {
    function ProfilesArrayOperations() {
        this.myProfilesArray = [];
    }
    /**
     * TWrapper over the constructor of Profile object, creates new Profile based on input parameters and adds it to the internal myProfilesArray array. Parameters are the same as the constructor for Profile Object
     */
    ProfilesArrayOperations.prototype.create_profile_operation = function (id, name, username, password, age, interests, married, blood_group, location, join_date, gender, email, city, domain, phone, qualification, cgpa, salary, vehicle, work_location) {
        var new_profile_to_add = new ProfilesArrayOperations.Profile(id, name, username, password, age, interests, married, blood_group, location, join_date, gender, email, city, domain, phone, qualification, cgpa, salary, vehicle, work_location);
        this.myProfilesArray.push(new_profile_to_add);
    };
    /**
     * Private method to match a name-value pair inside a profile object
     * @param nvPair
     * @param profile_object
     */
    ProfilesArrayOperations.prototype.matchNVPairWithProfile = function (nvPair, profile_object) {
        // check the value on nvPair
        var _name = nvPair.name;
        var _value = nvPair.value;
        var details_in_profile = profile_object;
        // let arr1=(_value.toLocaleDateString());
        // let arr2=arr1.split("/")
        // let arr3 =(details_in_profile [_name].toLocaleDateString())
        // let arr4=arr3.split("/")
        // if its a string, then do string match (less, greater, substring)
        if (typeof _value === "string") {
            if (typeof details_in_profile[_name] === "string") {
                if (details_in_profile[_name] === _value) {
                    return true;
                }
            }
        }
        else if (Array.isArray(details_in_profile[_name])) {
            if (details_in_profile[_name].includes(_value)) {
                return true;
            }
        }
        // if its a boolean, then regular match
        else if (typeof _value == "boolean") {
            if (details_in_profile[_name] === _value) {
                return true;
            }
        }
        // if its a numeric, then regular match (less, greater, equals)
        else if (typeof _value == "number" && details_in_profile[_name] == _value)
            return true;
        else if (typeof _value == "string") {
            if (details_in_profile[_name] === _value) {
                return true;
            }
        }
        //if its a date, then date match (less, greater, equal)
        if (Date) {
            if (JSON.stringify(_value) == JSON.stringify(details_in_profile[_name])) {
                return true;
            }
        }
        //string builder,3 nested if or string c0nvert
        else
            return false;
    };
    /**
     * This function accepts name value pairs and searches using the AND operation to search for elements
     * @param nvPairArray
     */
    ProfilesArrayOperations.prototype.read_profile_operation = function (nvPairArray) {
        var _this = this;
        var returnArray = [];
        this.myProfilesArray.forEach(function (curr_profile) {
            // go through all profiles
            var is_curr_profile_a_match = true;
            nvPairArray.forEach(function (curr_nvPairObj) {
                // go through each NVPairObject
                if (!_this.matchNVPairWithProfile(curr_nvPairObj, curr_profile)) {
                    // if its NOT a match,"profile x nvPair" check using matchNVPairWithProfile private method
                    is_curr_profile_a_match = false; // set match variable to false
                }
            });
            if (is_curr_profile_a_match) {
                // if match variable is still true, all conditions satisfied
                returnArray.push(curr_profile); // push matching profile to returnArray
            }
        });
        return returnArray;
    };
    ProfilesArrayOperations.testing_main = function () {
        var pao_obj = new ProfilesArrayOperations();
        pao_obj.create_profile_operation("1stFellow", "Sirisha", "Sirisha11", "97q0re", 23, ["Movies", "Playing with kids"], true, dependencies_1.BloodGroupENUM.OPOSITIVE, "Hyderabad", new Date(2022, 1, 30), dependencies_1.GenderENUM.FEMALE, "budhurusirisha@gmail.com", "GachiBowli", ".NET", "0", "B.Tech", 7.6, -20, "None", "Waverock 2.3");
        pao_obj.create_profile_operation("2ndFellow", "Sireesh", "Srlasdk", "123ED", 32, ["cricket", "Eating with kids", "movies"], false, dependencies_1.BloodGroupENUM.ABNEGATIVE, "warangal", new Date(2022, 9, 10), dependencies_1.GenderENUM.MALE, "sirisha@gmail.com", "GVMKJMnku", "UI", "9950616434", "B.Tech", 8.0, 7564333, "None", "Waverock 2.3");
        var search_params_array = [];
        //search_params_array.push(new NameValuePairDataType("name", "Sirisha"));
        search_params_array.push(new dependencies_1.NameValuePairDataType("join_date", new Date(2022, 1, 1)));
        console.log(pao_obj.read_profile_operation(search_params_array).map(function (x) { return x.name; }));
    };
    /**
     * This is the class to create profile objects to run filters on
     */
    ProfilesArrayOperations.Profile = /** @class */ (function () {
        function class_1(id, name, username, password, age, interests, married, blood_group, location, join_date, gender, email, city, domain, phone, qualification, cgpa, salary, vehicle, work_location) {
            this.id = id;
            this.name = name;
            this.username = username;
            this.password = password;
            this.age = age;
            this.interests = interests;
            this.married = married;
            this.blood_group = blood_group;
            this.location = location;
            this.join_date = join_date;
            this.gender = gender;
            this.email = email;
            this.city = city;
            this.domain = domain;
            this.phone = phone;
            this.qualification = qualification;
            this.cgpa = cgpa;
            this.salary = salary;
            this.vehicle = vehicle;
            this.work_location = work_location;
        }
        return class_1;
    }());
    return ProfilesArrayOperations;
}());
ProfilesArrayOperations.testing_main();
