import {Entity,Column,PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn, JoinTable, OneToMany} from 'typeorm';
import { Features } from './Features.entity';
import { RoleFeatures } from './RoleFeatures.entity';
import { Roles } from './Roles.entity';

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    UserID : number

    @Column()
    Username : string

    @Column()
    Warehouse : string

    @Column()
    IsActive : boolean

    @Column()
    EmailId : string

    @Column()
    FirstName : string

    @Column()
    SecondName : string

    @Column()
    RoleID : number

    //@OneToOne(() => Roles)
    //@JoinColumn({name:"RoleID"})
    public roles: Roles

    //@OneToMany(() => RoleFeatures,role => role.RoleId)
    //@JoinColumn({name:"RoleID"})
    public roleFeatures: RoleFeatures[] = []

    //@OneToMany(() => RoleFeatures,roleFeature => roleFeature.FeatureId)
    //@JoinTable({name:"RoleFeatures"})
    features: Features[] = []
}
