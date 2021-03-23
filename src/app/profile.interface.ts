export interface Profile {
	name: string;
	lastName: string;
	email: string;
	phone: string;
	adversiting: {
		primary: string;
		ads: Ads[];
	};
}

export interface Ads {
	data: string;
}
