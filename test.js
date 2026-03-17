// test-simple.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function test() {
  try {
    console.log('Test de connexion...')
    const result = await prisma.$queryRaw`SELECT 1+1 as result`
    console.log('✅ Connexion réussie!', result)
  } catch (error) {
    console.error('❌ Erreur:', error)
  } finally {
    await prisma.$disconnect()
  }
}

test()