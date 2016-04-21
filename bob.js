//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  switch(input) {
    case "question":
        return "Sure";
        break;
    case "yell":
        return "Whoa";
        break;
    case "address":
        return "Fine";
        break;
    default:
        default return "Whatever";
}
};

module.exports = Bob;
