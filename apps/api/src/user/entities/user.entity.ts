import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { UniqueProp } from 'src/common/database/UniqueProp.decorator';

@Schema({ timestamps: true })
export class User {
  @UniqueProp()
  email: string;

  @Prop({ isRequired: true })
  password: string;

  @Prop()
  token: string;
}

export type UserDocument = HydratedDocument<User>;
export type UserModel = Model<User>;
export const UserSchema = SchemaFactory.createForClass(User);
