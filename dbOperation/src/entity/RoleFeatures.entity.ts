import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from './Roles.entity';

@Entity({ name: "dbo.RoleFeatures" })
export class RoleFeatures  {
    //@PrimaryGeneratedColumn()
   @PrimaryColumn()
    RoleId : number

    @Column()
    FeatureId : number

    @Column()
    Permission : string

}