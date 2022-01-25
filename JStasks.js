//Task 1

function createSecretHolder(s) {
  let secret = s;

  return {
    getSecret() {
      return secret;
    },

    setSecret(s) {
      secret = s;
    }
  }
}

//Task 2

let arr = [7, 6, 15, 8];

function bitSort(array) {
  // method sort does not create a copy of array
  array.sort((a, b) => {
    const countA = a.toString(2).split(1).length;
    const countB = b.toString(2).split(1).length;

    if (countA !== countB) {
      return countA - countB;
    }

    return a - b;
  });
}

//Task 3

function filterLanguages(languages) {
	const sortedArray = Object.entries(languages)
	.filter(([language, points]) => points >= 60)
	.sort((a, b) => {
		const [keyA, valueA] = a;
		const [keyB, valueB] = b;
		return valueB - valueA
	});

	return Object.keys(Object.fromEntries(sortedArray));
}

const languages = {"Java": 10, "Ruby": 80, "Python": 65};

const output = filterLanguages(languages);
console.log(output);

//Task 4

for (var i = 0; i < 5; i++) {
  setTimeout((i) => {
      console.log(i);
    }, 1000, i)
}
