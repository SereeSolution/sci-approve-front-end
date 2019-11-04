import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/_models/profile.model';
import { CryptoService } from './crypto.service';

const OUB_Secret = 'รักนะจุ๊บๆ';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
 u : Profile = new Profile();

  constructor(
    private cypto : CryptoService
  ) {
   }

   setUserProfile( user : Profile) {
       if (user) {
       this.u = user;       
       //localStorage.setItem('profile', this.cypto.set ( JSON.stringify( this.u ), OUB_Secret ).toString() );
      localStorage.setItem('profile', JSON.stringify( this.u ) );
       }
/*
       let encrypted = this.cypto.set("Message", "Secret Passphrase");
let decrypted = this.cypto.get(encrypted, "Secret Passphrase");
console.log( 'Test encrypt : ', encrypted);
console.log( 'Test decrypt : ', decrypted);
*/
   }



   getUserProfile() {
       //console.log(  "Encrypt profile ->",localStorage.getItem('profile'));
      /*
       let encrypt_st = localStorage.getItem('profile');
       console.log(  "Encrypt profile ->", encrypt_st);
      let ret = this.cypto.get( encrypt_st, OUB_Secret );
console.log('Decrypt : ', ret );
*/
let profile = localStorage.getItem('profile');
       return JSON.parse( profile );  //localStorage.getItem('profile');
   }


}