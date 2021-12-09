import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
@Entity('User')
    export class UserEntity {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      firstName: string;

      @Column()
      lastName: string;
     
      @Column()
      isActive: boolean;
    }