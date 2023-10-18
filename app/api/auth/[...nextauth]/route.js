import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginAdmin } from "../../admin";
import { compare } from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing username or password");
        }
        console.log(
          loginAdmin(credentials.email, credentials.password).catch(error)
        );

        // if user doesn't exist or password doesn't match
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
