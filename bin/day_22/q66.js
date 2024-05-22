// this function check boolean vlaue if both value are true so it function
// return true either if one of these parameters receive false value so it's 
// return false. 
function checkBooleanValue(...booleanValue) {
    if (booleanValue[0] === true && booleanValue[1] === true) { //checking boolean values.
        return true;
    }
    else {
        return false;
    }
}
;
console.log(checkBooleanValue(true, true)); // output is true.
export {};
