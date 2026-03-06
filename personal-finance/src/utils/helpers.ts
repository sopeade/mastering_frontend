interface Bill {
    name: string;
    date: string;
    amount: number;
}

interface Pots {
  id: number;
  name: string;
  target: number;
  color: string;
  saved: number;
}

interface Budget {
    id: number,
    category: string;
    max: number,
    spent: number;
    left: number;
    items?:
        {
            "name": string,
            "category": string,
            "date": string,
            "amount": number
        }[],
}


export const showSign= (num: number)=>{
    if (num>0){return `+$${num}`}
    else if(num<0) {return `-$${Math.abs(num)}`}
    else {return 0}
}

export const sortArr = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];

export const toPercent = (a:number, b:number) => {
    return ((a* 100)/ b).toFixed(1);
}

export const potsOverviewData = (pots: Pots[]) => {
    let total:number = 0;
    let items: Record<string,number> = {};
    console.log("typeof pots", typeof pots);
    console.log("pots3", pots)
    pots.forEach((obj: Pots, idx: number) => {
       total += obj.saved;
       items[obj.name] = obj.saved;
    })
    return {total, items}
}

export const budgetsOverviewData = (budget: Budget[]) => {
    let totalSpent: number = 0;
    let totalLeft: number = 0;
    let items: Record<string, string|number> = {};
    budget.forEach((obj: Budget, idx: number) => {
        totalSpent += obj.spent;
        totalLeft += obj.left;
        items[obj.category] = obj.spent;
    })
    return {totalSpent, totalLeft, items}
}

export const billsOverviewData = (bills: Bill[]) => {}

export const transOverviewData = () => {}

export const getOrdinal = (num:number) => {
  let ord = 'th';
  if (num % 10 == 1 && num % 100 != 11)
  {
    ord = 'st';
  }
  else if (num % 10 == 2 && num % 100 != 12)
  {
    ord = 'nd';
  }
  else if (num % 10 == 3 && num % 100 != 13)
  {
    ord = 'rd';
  }
  return ord;
}