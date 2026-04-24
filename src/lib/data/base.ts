const firstName = 'Anesu';
const lastName = 'Mlambo';
const suffix = 'Personal Project Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
