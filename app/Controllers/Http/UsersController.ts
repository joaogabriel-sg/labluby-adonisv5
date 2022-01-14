import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return 'All users'
  }

  public async store({}: HttpContextContract) {
    return 'Create user'
  }

  public async show({}: HttpContextContract) {
    return 'Get user by id'
  }

  public async update({}: HttpContextContract) {
    return 'Change user'
  }

  public async destroy({}: HttpContextContract) {
    return 'Delete user'
  }
}
