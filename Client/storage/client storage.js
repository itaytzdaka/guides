let user

// session storage
sessionStorage.setItem("user", JSON.stringify(response.data.user));
user= JSON.parse(sessionStorage.getItem("user"));

// local storage
localStorage.setItem("user", JSON.stringify(response.data.user));
user= JSON.parse(localStorage.getItem("user"));


//js cookie
const date = new Date(); // Get current date and time.
date.setFullYear(date.getFullYear() + 1);
document.cookie = "user=" + JSON.stringify(user) + "; expires=" + date.toUTCString()+"; Path=/;"; 
document.cookie = "user= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

const allCookies = document.cookie.split("; "); // ["user=jsonData"]

for (const oneCookie of allCookies) { // oneCookie = "user=jsonData"
  const pairArr = oneCookie.split("="); // ["user", "jsonData"]
  if (pairArr[0] === "user") {
    user = JSON.parse(pairArr[1]);
  }
}


//angular cookie
import { CookieService } from 'ngx-cookie-service';
const d = new Date();
d.setFullYear(d.getFullYear() + 1);
this.cookieService.set('user', JSON.stringify(user),d,"/");
console.log(JSON.parse(this.cookieService.get('user')));
this.cookieService.deleteAll();


//react cookie - npm i universal-cookie
import Cookies from 'universal-cookie';
const cookies = new Cookies();
cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat'));
cookies.remove('myCat');
