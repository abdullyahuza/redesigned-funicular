const person = {
	name: "Abdulrazak Yahuza",
	height: 124,
	country: "Nigeria",
	print(){
		return `Name: ${this.name}\nHeight: ${this.height}\nCountry: ${this.country}`
	}
}

console.log(person.print())