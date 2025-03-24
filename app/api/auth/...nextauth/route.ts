import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";

// NextAuth config
export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt", // or "database" if you prefer
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 1) Connect to DB
        await dbConnect();

        // 2) Find user by email
        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          throw new Error("No user found with this email");
        }

        // 3) Compare password with hashed password
        const isValid = await bcrypt.compare(credentials!.password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        // 4) Return user object
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // your custom login page route
  },
};

const handler = NextAuth(authOptions);

// NextAuth requires both GET and POST
export { handler as GET, handler as POST };
