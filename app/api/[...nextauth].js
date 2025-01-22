import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Credentials({
            // The name to display on the sign-in form (e.g. 'Sign in with...')
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: {  label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                // Here you should add your own logic to validate credentials
                // For this example, let's just validate with a static username and password
                if (credentials.username === 'admin' && credentials.password === 'password') {
                    // Return user object if credentials are valid
                    return { id: 1, name: 'Admin' }
                } else {
                    // Return null if credentials are invalid
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/auth/login' // Custom login page
    },
    session: {
        jwt: true,
    },
    callbacks: {
        async session(session, user) {
            session.user = user;
            return session;
        },
    },
});
