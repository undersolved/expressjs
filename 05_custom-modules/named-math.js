/* -------------------------------------named export using exports.------------------------------------- */
exports.myAddfunction = function add(a, b) {
	return a + b;
};
/* -------------------------------------------------------------------------- */
function sub(a, b) {
	return a - b;
}
function mul(a, b) {
	return a * b;
}
function div(a, b) {
	return a / b;
}

/* -------------------------------------------------------------------------- */
/*
Two ways to expor this module
1. Named export ---> if we want to export a specific function individually
2. Default export ---> if we want to export this full file as a module
*/
/* -------------------------------------------------------------------------- */
