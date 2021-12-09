import { Injectable,Inject } from '@nestjs/common';
import { Roles } from '../../entity/Roles.entity';
import {createQueryBuilder, Repository} from 'typeorm';
import {Users} from '../../entity/Users.entity';
import {getManager} from "typeorm";
import { usersProvider } from '../users.providers';
import { RoleFeatures } from 'src/entity/RoleFeatures.entity';
import { Features } from 'src/entity/Features.entity';

@Injectable()
export class UsersserviceService {
    constructor(@Inject('USERS_REPOSITORY') private usersRepository: Repository<Users>,@Inject('USERS_REPOSITORY') private rolesRepository: Repository<Roles>){

    }

    async findAll() : Promise<Users[]>{
        debugger;
     //  return  this.usersRepository.findOne({where:{UserID:10},relations:['roles']});
  // const users =  await createQueryBuilder(Users,"users")
  //      .innerJoinAndSelect("users.roles",'roles','users.RoleID = roles.RoleID')
  //      .innerJoinAndSelect("roles.roleFeatures",'roles','roleFeatures.RoleID = roles.RoleID')
  //      .innerJoinAndSelect("Features",'features','features.FeatureId = roleFeatures.FeatureId')
  //      .where('users.UserID = :userId',{userId:10})
  //      .getOne();
      const ee : Users[] = [];
      const result  = await  getManager().createQueryBuilder()
      .select('user.UserID','userID')
      .addSelect('user.Username','username')
      .addSelect('user.Warehouse','warehouse')
      .addSelect('user.IsActive','isActive')
      .addSelect('user.FirstName','firstName')
      .addSelect('user.SecondName','secondName')
      .addSelect('r.RoleID','roleID')
      .addSelect('r.RoleName','roleName')
      .addSelect('rf.FeatureId','featureId')
      .addSelect('rf.Permission','permission')
      .addSelect('f.FeatureName','featureName')
      .addSelect('f.FeatureType','featureType')
      .from(Users,'user')
      .innerJoin(Roles,'r','r.RoleID = user.RoleID')
      .innerJoin(RoleFeatures,'rf','rf.RoleId = r.RoleID')
      .innerJoin(Features,'f','f.FeatureId = rf.FeatureId')
      .where('user.UserID =:userID',{userID:10})
      .getRawMany();
      console.log("result",result);
      if(result.length>0){
        const u = new Users()
            //var aa =  this.groupBy(result,'userID');
              result.forEach(a=>{              
              const u1 = new RoleFeatures()
              const u2 = new Features()
              u.UserID = a.userID;
              u.Username = a.username;
              u.Warehouse = a.warehouse;
              u.FirstName = a.firstName;
              u.SecondName = a.secondName;
              u1.FeatureId = a.featureId;
              u1.Permission = a.permission;
              u.roleFeatures.push(u1);  
              u2.FeatureName = a.featureName;
              u.features.push(u2);           
            })
            ee.push(u);
            const h = {...ee};
            console.log("h",h);
            return ee;
      }

    // return await this.rolesRepository.manager.createQueryBuilder(Roles,'roles')
    //    .innerJoinAndSelect("roles.roleFeatures",'rf','roles.RoleID = rf.RoleID')
    //    .where('roles.RoleID = :roleID',{roleID:1}).getMany();    
     }
    
     groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    
}
