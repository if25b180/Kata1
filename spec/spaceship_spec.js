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
		]
	});

	it('should return "Spaceship lost forever." on a map without X ', function() {
		expect(spaceship.find(mapWithoutX)).toEqual("Spaceship lost forever.");
	});
});
