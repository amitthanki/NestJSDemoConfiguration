import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Features{
    @PrimaryGeneratedColumn()
    FeatureId : number

    @Column()
    FeatureName : string

    @Column()
    ParentFeatureId : number

    @Column()
    FeatureType : string
}