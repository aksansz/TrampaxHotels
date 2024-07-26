const users = [
    { email: 'Test@gmail.com', password: 'test123' },
];

export const authenticateUser = (email, password) => {
    return users.find(user => user.email === email && user.password === password);
};