function Spaceship() { }
Spaceship.prototype.find = function(map) {
	for (let x = 0; x < map[0].length; x++) {
		for (let y = 0; y < map.length; y++) {
			const value = map[y][x];
			if (value == 'X') {
				return [x, y - 1];
			}
		}
	}

	return "Spaceship lost forever.";
};
