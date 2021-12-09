import {Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToMany, JoinColumn} from 'typeorm';
import { RoleFeatures } from './RoleFeatures.entity';
import { Users } from './Users.entity';

@Entity()
export class Roles{
    @PrimaryGeneratedColumn()
    RoleID : number

    @Column()
    RoleName : string
    
}
