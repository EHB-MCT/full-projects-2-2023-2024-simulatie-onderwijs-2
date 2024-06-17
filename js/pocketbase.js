import PocketBase from 'pocketbase';

const pb = new PocketBase('https://simulatie2.pockethost.io/api/collections/users/records');

...

// example create data
const data = {
    "username": "test_username",
    "email": "test@example.com",
    "emailVisibility": true,
    "password": "12345678",
    "passwordConfirm": "12345678",
    "name": "test"
};

const record = await pb.collection('users').create(data);

