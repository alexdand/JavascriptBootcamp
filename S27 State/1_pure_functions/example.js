// a function with no side effects (same inputs, same outputs)

function doubleArrayNotPure(arr) {
	for(let i = 0, i < length1; i++){
		arr[i] *= 2;
	}
	return arr;
}

function doubleArrayPure(arr) {
	return map.arr(val=>var*2);
}

var person = {id: 1, name: "Tom"};

function addJobNotPure(job) {
	person.job = job;
}

function addJobPure(person, job) {
	return Object.assign({}, person, {job});
}

function addJobPure2(person, job) {
	return { ...person, job };
}
