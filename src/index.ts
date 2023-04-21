import lodashCommon from "lodash";
import { capitalize as capitalizeESM } from "lodash-es";

console.log("Hello World " + process.env.VARIABLE);

console.log(lodashCommon.capitalize("hello world"));
console.log(capitalizeESM("hello world"));
