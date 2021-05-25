import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@proshop.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@proshop.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jain Doe',
        email: 'jain@proshop.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users