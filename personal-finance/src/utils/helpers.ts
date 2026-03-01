export const showSign= (num: number)=>{
    if (num>0){return `+$${num}`}
    else if(num<0) {return `-$${Math.abs(num)}`}
    else {return 0}
}

export const sortArr = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];
