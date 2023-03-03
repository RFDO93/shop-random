// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

type DataResponse = {
  status: boolean
  msg: string
  user?: any
  token?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  if (req.method === 'POST') {
    const { email, password } = req.body

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

    const validPassword = bcrypt.compareSync(password, findUser.password)

    if (!findUser || !validPassword) {
      return res.status(401).json({
        status: false,
        msg: 'Email o contraseña son incorrecta.'
      })
    }

    delete findUser.password
    const tokenJsonwebtoken = process?.env?.KEY_JSONWEBTOKEN || ''

    const token = jwt.sign(findUser, tokenJsonwebtoken, {
      expiresIn: 604800
    })

    return res.status(200).json({
      status: true,
      msg: '',
      user: findUser,
      token
    })
  }

  res.status(400).json({
    status: false,
    msg: 'Esta api no es correcta.'
  })
}
