import axios from 'axios';
import qs from 'qs';

const URL = 'https://api.twilio.com/2010-04-01/Accounts/Messages.json';
const AccountSID = 'AC2a8f29967db79c2037db492c87bd4e8f';

export default sendMessages = (to, message) => {
	axios({
		method: 'post',
		url: 'https://api.twilio.com/2010-04-01/Accounts/AC2a8f29967db79c2037db492c87bd4e8f/Messages.json',
		data: qs.stringify({
			From: '+12037936369',
			Body: message,
			To: to,
		}),
		headers: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
		auth: {
			username: AccountSID,
			password: '70734cf4dcfd76a0a6e827e1fea08c5e'
		}
	}).then((res) => {
		console.log('Sent messages')
	}).catch(error => {
		console.log('Error sending msgs', error);
	})
}