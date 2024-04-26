import { Prop } from '@nestjs/mongoose';

export const UniqueProp = () => {
  return Prop({ isRequired: true, unique: true });
};
