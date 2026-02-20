export const showSign= (num: number)=>{
    if (num>0){return `+$${num}`}
    else if(num<0) {return `-$${Math.abs(num)}`}
    else {return 0}
}
