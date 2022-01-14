import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    const uniqueKey = 'eMail'

    await User.updateOrCreateMany(uniqueKey, [
      {
        eMail: 'virk@adonisjs.com',
        password: 'secret123',
      },
      {
        eMail: 'romain@adonisjs.com',
        password: 'supersecret',
      },
      {
        eMail: 'gabriel@adonisjs.com',
        password: 'supersupersecret',
      },
    ])
  }
}
