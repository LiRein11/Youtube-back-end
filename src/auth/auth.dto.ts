// Файл для входящих данных

import { IsEmail } from 'class-validator'
import { IsString, MinLength } from 'class-validator/types/decorator/decorators'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password cannot be less than 6 characters!'
	})
	@IsString()
	password: string
}
