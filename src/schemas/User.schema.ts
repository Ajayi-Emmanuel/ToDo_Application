import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class User {

    @Prop({required: true})
    firstname: string

    @Prop({required: true})
    lastname: string

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    phoneNumber: string

    @Prop({required: true})
    password: string

} 

export const UserSchema = SchemaFactory.createForClass(User)
  