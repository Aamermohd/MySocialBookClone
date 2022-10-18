/**
 * This is a custom enum to help classify the blood groups
 */
enum BloodGroupENUM {
  APOSITIVE,
  ANEGATIVE,
  BPOSITIVE,
  BNEGATIVE,
  OPOSITIVE,
  ONEGATIVE,
  ABPOSITIVE,
  ABNEGATIVE,
}
/**
 * This is a custom enum to help classify genders
 */
enum GenderENUM {
  MALE,
  FEMALE,
  OTHER,
}
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
class NameValuePairDataType {
  name: string;
  value: any;
//   match_type: matchENUM;
  constructor(name: string, value: any) {
    this.name = name;
    this.value = value;
  }
}

export { BloodGroupENUM, GenderENUM, NameValuePairDataType };
