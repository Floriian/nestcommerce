import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { GetSession } from 'src/common/decorators/get-session.decorator';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('sign-in')
  signUp(@Body() dto: SignUpDto, @GetSession() sessionId: string) {
    console.log(sessionId);
    return this.authService.signIn(dto, sessionId);
  }

  @Public()
  @Post('sign-up')
  signIn(@Body() dto: SignInDto, @GetSession() sessionId: string) {
    return this.authService.signUp(dto, sessionId);
  }
}
