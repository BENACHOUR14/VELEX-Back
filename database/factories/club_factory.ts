import factory from '@adonisjs/lucid/factories'
import Club from '#models/club'

export const ClubFactory = factory
  .define(Club, async ({ faker }) => {
    return {}
  })
  .build()