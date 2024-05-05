import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { InvalidCredentialsException } from './exceptions/InvalidCredentials.exception';
import * as argon2 from 'argon2';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from 'src/user/entities/User.entity';
import { Token } from './token';
import { JwtService } from '@nestjs/jwt';
import { EnvService } from 'src/env/env.service';
import { JwtPayload } from './jwt-payload';
import { SessionService } from 'src/session/session.service';
import { SignUpDto } from './dto/sign-up.dto';
import { CredentialsTakenException } from './exceptions/credentials-taken.exception';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheService: Cache,
    @InjectModel(User.name) private readonly userModel: UserModel,
    private readonly jwtService: JwtService,
    private readonly envService: EnvService,
    private readonly sessionService: SessionService,
  ) {}

  async signIn(dto: SignInDto, sessionId: string) {
    //TODO: if user has an sessionId and has cart products , assign the cart to user.
    const user = await this.userModel.findOne({ email: dto.email });
    if (!user) throw new InvalidCredentialsException();

    try {
      const isPasswordMatches = await argon2.verify(
        user.password,
        dto.password,
      );
      if (!isPasswordMatches) throw new InvalidCredentialsException();
      const tokens = await this.generateTokens({
        email: user.email,
        sub: user._id.toString(),
      });

      await this.sessionService.createSession(sessionId, tokens);

      await this.userModel.findOneAndUpdate(
        { email: user.email },
        { token: tokens.refresh_token },
      );

      return { success: true };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }

  async signUp(dto: SignUpDto, sessionId: string) {
    const user = await this.userModel.findOne({ email: dto.email });
    if (user) throw new CredentialsTakenException();

    try {
      //TODO: if user has an sessionId and has cart products , assign the cart to user.
      const hashedPassword = await argon2.hash(dto.password);

      const user = new this.userModel({ ...dto, password: hashedPassword });
      await user.save();
      return true;
    } catch (e) {
      console.log(e);
    }
  }

  private async generateTokens(payload: JwtPayload): Promise<Token> {
    console.log(this.envService.get('AT_SECRET'));
    const access_token = await this.jwtService.signAsync(payload, {
      secret: this.envService.get('AT_SECRET') as string,
      expiresIn: '15m',
    });
    const refresh_token = await this.jwtService.signAsync(payload, {
      secret: this.envService.get('RT_SECRET') as string,
      expiresIn: '7d',
    });
    return { access_token, refresh_token };
  }
}
