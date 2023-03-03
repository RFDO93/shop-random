import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

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
      }
    })

    if (findUser) {
      return res.status(400).json({
        status: false,
        msg: 'Un usuario existe con ese correo'
      })
    }

    const salt = await bcrypt.genSaltSync()
    const passwordCry = await bcrypt.hashSync(password, salt)

    const user = await prisma.user.create({
      data: {
        email,
        password: passwordCry,
        profileId: 1
      }
    })

    delete user.password
    const tokenJsonwebtoken = process?.env?.KEY_JSONWEBTOKEN || ''

    const token = jwt.sign(user, tokenJsonwebtoken, {
      expiresIn: 604800
    })

    return res.status(201).json({
      status: true,
      msg: '',
      user,
      token
    })
  }

  res.status(400).json({
    status: false,
    msg: 'Esta api no es correcta.'
  })
}
