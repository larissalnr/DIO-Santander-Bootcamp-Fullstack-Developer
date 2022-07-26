const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'Admin') {
			admins.push(key);
		}
	}

	return admins;
};

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Elvira', 'Admin');
usuarios.set('Carolina', 'User');
usuarios.set('Guilherme', 'User');

console.log(getAdmins(usuarios));