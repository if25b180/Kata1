describe('Spaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();

		mapWithoutX = [
			['.','.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.','.'],
		];
		mapEmpty = [];
		mapInvalidType = "asfd";
		mapWithX = [
			['.','.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','X','.','.'],
			['.','.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.','.'],
		];
	});

	it('should return "Spaceship lost forever." on a map without X ', function() {
		expect(spaceship.find(mapWithoutX)).toEqual("Spaceship lost forever.");
	});

	it('should return "Spaceship lost forever." on an empty map', function() {
		expect(spaceship.find(mapEmpty)).toEqual("Spaceship lost forever.");
	});

	it('should return "Spaceship lost forever." on a non-array type map', function() {
		expect(spaceship.find(mapInvalidType)).toEqual("Spaceship lost forever.");
	});

	it('should return [7, 2] coordinates of spaceship on a map with X(x = 7, y = 2)', function() {
		expect(spaceship.find(mapWithX)).toEqual([7, 2]);
	});
});
