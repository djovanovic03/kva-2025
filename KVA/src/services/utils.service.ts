import { Injectable } from '@angular/core';
import { UserService } from './korisnik.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

 ratings: any[] = [
  {movieId: 1, rating: 1, comment: "Katastrofa totalna, bolje da sam spavao.", user: "Mare_2003"},
  {movieId: 1, rating: 2, comment: "Može da prođe, ali jedva.", user: "AnaBanana88"},
  {movieId: 1, rating: 2, comment: "Onako, ništa posebno.", user: "Nemanja_NS"},
  {movieId: 1, rating: 4, comment: "Baš mi prijalo, gledao bih opet!", user: "BaneVozdovac"},
  {movieId: 1, rating: 2, comment: "Ok je, al ne bih opet gledao.", user: "TeaKraljica"},
  {movieId: 2, rating: 5, comment: "Brutalno dobar film, svaka čast!", user: "djolebgd"},
  {movieId: 2, rating: 5, comment: "Od početka do kraja savršenstvo.", user: "laki_grobar"},
  {movieId: 2, rating: 4, comment: "Dobar je, al’ predugačak.", user: "Zika23"},
  {movieId: 2, rating: 3, comment: "Pa može, ništa spec.", user: "PeraDetlić95"},
  {movieId: 2, rating: 5, comment: "Najbolji film ove godine!", user: "jana_lav"},
  {movieId: 2, rating: 2, comment: "Moglo je mnogo bolje.", user: "marko_pancevo"},
  {movieId: 3, rating: 5, comment: "Fenomenalan, oduševljen sam!", user: "IgorMMA"},
  {movieId: 3, rating: 5, comment: "Top, nisam očekivao ovako dobar film.", user: "Andjelina"},
  {movieId: 3, rating: 4, comment: "Lepo urađeno, mada malo kliše.", user: "DarkoKraljevo"},
  {movieId: 3, rating: 1, comment: "Ne bih preporučio nikome.", user: "BataKonj"},
  {movieId: 3, rating: 3, comment: "Solidno, al smara na pola.", user: "tasa_09"},
  {movieId: 4, rating: 5, comment: "Filmčina, svaka scena ludilo!", user: "milica_m"},
  {movieId: 4, rating: 2, comment: "Iskreno dosadno, prespavao pola.", user: "gox_77"},
  {movieId: 4, rating: 4, comment: "Super, vredelo je karte platiti.", user: "MikiKralj"},
  {movieId: 4, rating: 2, comment: "Ne bih ga preporučio dalje.", user: "Sale010"},
  {movieId: 4, rating: 5, comment: "E ovo je bio spektakl!", user: "jelena_bg"},
  {movieId: 4, rating: 2, comment: "Slabo, očekivao sam više.", user: "LukaX"},
  {movieId: 4, rating: 5, comment: "Neočekivano dobro, prijatno iznenađenje.", user: "PetarOnTheMove"},
  {movieId: 5, rating: 1, comment: "Dosadno, jedva sam izdržao.", user: "aca_south"},
  {movieId: 5, rating: 1, comment: "Najgori film ikad, totalni promašaj.", user: "dragana_999"},
  {movieId: 5, rating: 4, comment: "Nije loše, može da se gleda.", user: "Uros91"},
  {movieId: 5, rating: 5, comment: "Fantastično, baš me oduševio!", user: "TamaraM"},
  {movieId: 6, rating: 1, comment: "Slab film, nije ispunio očekivanja.", user: "Stefan007"}
];

 priceMap: Map<number, number> = new Map([
      [1, 999],
      [2, 699],
      [3, 499],
      [4, 1199],
      [5, 899],
      [6, 599],
      [7, 649],
      [8, 1299],
      [9, 399],
      [10, 349],
      [11, 199],
      [12, 699],
      [13, 799],
      [14, 799],
      [15, 1099],
      [16, 299],
      [17, 359],
      [18, 699],
      [19, 499],
      [20, 599],
      [21, 259],
      [22, 759],
      [23, 599],
      [24, 399],
      [25, 529],
      [26, 1099],
      [27, 999],
      [28, 859],
      [29, 379],
      [30, 399],
      [31, 499],
      [32, 699],
      [33, 1250],
      [34, 419],
      [35, 559],
      [36, 459],
      [37, 899],
      [38, 1099],
      [39, 609],
      [40, 799],
      [41, 899],
      [42, 799],
      [43, 399],
      [44, 499],
      [45, 699],
      [46, 599],
      [47, 299],
      [48, 369],
      [49, 479],
      [50, 959],
      [51, 699],
      [52, 799],
      [53, 1499],
      [54, 239],
      [55, 199],
      [56, 399],
      [57, 599],
      [58, 529],
      [59, 649],
      [60, 899],
      [61, 399],
      [62, 459],
      [63, 999],
      [64, 259],
      [65, 1099],
      [66, 799],
      [67, 689],
      [68, 789],
      [69, 299],
      [70, 459],
      [71, 1259],
      [72, 1299],
      [73, 399],
      [74, 459],
      [75, 489],
      [76, 239],
      [77, 189],
      [78, 769],
      [79, 1499],
      [80, 299],
      [81, 499],
      [82, 659]
 ]);
  public projectionDate: string[] = []; 
  public projectionTime: string[] = ['12:00','14:30','15:30','17:00','19:00']; 
  constructor() { 
    let datestring
    for(let i=0; i < 5; i++){
      let date = new Date()
      date.setDate(date.getDate() + i)
      datestring = date.toISOString().slice(0, 10)
      this.projectionDate.push(datestring)
    }
  }

  public generateMovieImage(poster: string) {
    return poster;
  }

  public formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS').slice(0,12)
  }
  public round(number: number){
    return Math.round(number)
  }
  public round2(number: number){
    return Math.round(number * 100) / 100
  }
  public leftover(number: number){
    return number % 60
  }
  public multiply(cena: number, kolicina: number): number{
    if(kolicina>0 && kolicina <= 10){
      return cena*kolicina
    }
    else if(kolicina > 10){
      return cena*10
    }
    else{
      return cena*1
    }
  }

  public setRatings(){
    localStorage.setItem("userRatings", JSON.stringify(this.ratings))
  }
  
   Orders(movie: any, userInputDate: string, userInputTime: string, userInputCount: number) {
    const activeUser = UserService.getActiveUser()?.username;
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const ordered = orders.find((o: any) => (o.movieId === movie.movieId) && (o.projectionTime === userInputTime) && (o.projectionDate === userInputDate) );
    if(!activeUser){
      alert("Ulogujte se");
    }
    else if (ordered && ordered.count <= 10 && activeUser && userInputCount > 0) {
      if((userInputCount + ordered.count) <= 10){
        ordered.count += userInputCount;
        alert("Dodali ste u korpu još karata za ovu projekciju");
      }
      else{
        alert("Previše karata! Maksimum je 10 po projekciji")
      }
    } else if(userInputDate != '' && userInputTime != '' && userInputCount > 0 && userInputCount <= 10 && activeUser) {
      alert("Dodali ste film u vašu korpu");
      orders.push({
        movieId: movie.movieId,
        poster: movie.poster,
        runTime: movie.runTime,
        startDate: movie.startDate,
        projectionDate: userInputDate,
        projectionTime: userInputTime, 
        title: movie.title,
        price: movie.price,
        status: '',
        rating: '',
        count: userInputCount,
        activeUser: activeUser
      });
    }
    else{
        alert("Unesite datum i vreme projekcije \nMaksimalna količina karata je 10");
      }
    localStorage.setItem('orders', JSON.stringify(orders));
  }
  
}


