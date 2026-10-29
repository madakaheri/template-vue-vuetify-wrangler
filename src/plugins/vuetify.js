import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import {createVuetify} from 'vuetify';

const vuetify = createVuetify({
	icons: {
		defaultSet: 'mdi',
	},
	theme: {
		defaultTheme: 'system',
		themes: {
			light: {
				colors: {
					// primary: '#1976D2',
					primary: '#8800ff',
					secondary: '#424242',
					accent: '#82B1FF',
					error: '#FF5252',
					info: '#2196F3',
					success: '#4CAF50',
					warning: '#FFC107',
					background: '#EEEEEE',
				},
			},
			dark: {
				colors: {
					primary: '#8800ff',
					secondary: '#FFFFFF',
					accent: '#FF4081',
					error: '#FF5252',
					info: '#2196F3',
					success: '#4CAF50',
					warning: '#FB8C00',
					background: '#000000',
				},
			},
		},
	},
});

export default vuetify;
