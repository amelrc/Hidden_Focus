import GImg1 from './images/WEB-9598-2000x1333--251kb.jpg';
import GImg2 from './images/WEB-6417--2000x1333--256kb.jpg';

export const museum = [
	{
		floors: 'themes',
		rooms: [
			{
				name: 'look at the flowers',
				img: ['intro latf image', 'latf 1', 'latf 2'],
			},
			{
				name: 'lightscapes',
				img: ['intro light image', 'scapes 1', 'scapes 2'],
			},
		],
	},
	{
		floors: 'destinations',
		rooms: [
			{ name: 'canada', img: ['intro canada image'] },
			{ name: 'cuba', img: ['cuba intro image'] },
		],
	},
	{
		floors: 'shows',
		rooms: [
			{ name: '4 amigos', img: ['img amigos intro'] },
			{ name: 'mexico', img: ['img mexigo intro'] },
		],
	},
];

export const galleries = [
	{
		name: 'Look-at-the-Flowers',
		img: GImg1,
		belongsTo: 'themes',
		galleries: [
			{
				img: GImg1,
				personal: [{ firstname: 'Param' }, { lastname: 'Harrison' }],
			},
			{
				img: GImg2,
				employer: {
					name: 'Jobbatical',
					city: 'Tallinn, Estonia',
				},
			},
		],
	},
	{
		name: 'Lightscapes',
		img: GImg2,
		belongsTo: 'themes',
		galleries: [
			{
				img: 'img 1 param theme',
				personal: [{ firstname: 'Param' }, { lastname: 'Harrison' }],
			},
			{
				img: 'img 2 param theme',
				employer: {
					name: 'Jobbatical',
					city: 'Tallinn, Estonia',
				},
			},
		],
	},
	{
		name: 'Canada',
		img: GImg1,
		belongsTo: 'destinations',
		galleries: [
			{
				img: 'img 1 miguel destination',
				content: {
					firstname: 'Miguel',
					lastname: 'Medina',
				},
			},
			{
				img: 'img 2 miguel destination',
				content: {
					name: 'Skype',
					city: 'Arizona, US',
				},
			},
			{
				name: 'other',
				content: {
					country: 'Mexico',
					age: 30,
				},
			},
		],
	},
	{
		name: '4 amigos',
		img: GImg2,
		belongsTo: 'shows',
		galleries: [
			{
				img: 'img 1 miguel destination',
				content: {
					firstname: 'Miguel',
					lastname: 'Medina',
				},
			},
			{
				img: 'img 2 miguel destination',
				content: {
					name: 'Skype',
					city: 'Arizona, US',
				},
			},
			{
				name: 'other',
				content: {
					country: 'Mexico',
					age: 30,
				},
			},
		],
	},
];
