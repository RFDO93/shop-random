import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'

const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const findUser = await prisma.user.findFirst({
          where: {
            email
          },
          select: {
            id: true,
            email: true,
            avatar: true,
            password: true,
            Profile: {
              select: {
                id: true,
                name: true
              }
            },
            Person: {
              select: {
                name: true,
                lastName: true,
                phone: true,
                birthDate: true,
                gender: true,
                typeDocument: true,
                identificationDocument: true,
                nationality: true
              }
            }
          }
        })

        if (!findUser) {
          return null
        }

        const validPassword = bcrypt.compareSync(password, findUser.password)

        if (!validPassword) {
          return null
        }

        delete findUser.password
        return findUser
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  callbacks: {
    session: async ({ session, token }) => {
      session.user = { ...token.user }
      return Promise.resolve(session)
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.name = user.Person[0].name
        token.picture = user.avatar
        token.user = { ...user }
      }
      return Promise.resolve(token)
    }
  }
}

export default NextAuth(authOptions)
