export interface Bill {
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

interface Transaction {
    name: string,
    category: string,
    amount: number,
    date: string,
}


export const showSign= (num: number)=>{
    if (num>0){return `+$${num}`}
    else if(num<0) {return `-$${Math.abs(num)}`}
    else {return 0}
}

export const sortOptions = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];

// export const categoryOptions = (arr:Transaction[]) => {
//     getUniqueCategory(arr)
// }

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
    let categoryMax: Record<string, number> = {};
    let maxLimit: number = 0;
    let budgetSum: Record<string, number> = {};
    budget.forEach((obj: Budget, idx: number) => {
        totalSpent += obj.spent;
        maxLimit += obj.max;
        if (!(obj.category in budgetSum)){
            budgetSum[obj.category] = obj.spent;
            categoryMax[obj.category] = obj.max;

        }
        else{
            budgetSum[obj.category] = (budgetSum[obj.category] ?? 0 ) + obj.spent; // basically budgetSum += spent with null check
            categoryMax[obj.category] = (categoryMax[obj.category] ?? 0 ) + obj.spent; // basically budgetSum += spent with null check
        }
    })
    return {maxLimit, totalSpent, budgetSum, categoryMax}
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

// A reusable async function to make a POST request
export const postData = async (url = '', data = {}) => {
    try {
        // Perform the fetch request
        const response = await fetch(url, {
            method: 'POST', // HTTP method
            headers: {
                'Content-Type': 'application/json', // Sending JSON
                'Accept': 'application/json'        // Expecting JSON
            },
            body: JSON.stringify(data) // Convert JS object to JSON string
        });

        // Check if the response status is OK (2xx)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse and return JSON response
        return await response.json();

    } catch (error:any) {
        // Handle network or parsing errors
        console.error('Error during POST request:', error.message);
        throw error; // Re-throw so caller can handle it
    }
}
// // Example usage
// (async () => {
//     const apiURL = 'https://example.com/api/data';
//     const payload = { name: 'John Doe', age: 30 };
//
//     try {
//         const result = await postData(apiURL, payload);
//         console.log('Server response:', result);
//     } catch (err) {
//         console.error('Request failed:', err.message);
//     }
// })();

// Example: Fetch data from an API using async/await
export const getData = async (url: string) => {
    try {
        // Send GET request
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json' // Expecting JSON response
            }
        });

        // Check if the response status is OK (status code 200–299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON data
        const data = await response.json();
        console.log("Fetched Data:", data);

        return data; // Return data for further use
    } catch (error:any) {
        // Handle network or parsing errors
        console.error("Fetch error:", error.message);
        return null; // Return null if something went wrong
    }
}
// // Example usage:
// fetchData('https://jsonplaceholder.typicode.com/posts/1')
//     .then(data => {
//         if (data) {
//             console.log("Title:", data.title);
//         }
//     });

// Example: Fetch data from an API using async/await
export const deleteData = async (url:string, id: number) => {
    console.log("deleteData")
    try {
        // Construct the full endpoint URL
        const endpoint = `${url}/${encodeURIComponent(id)}`;

        // Send the DELETE request
        const response = await fetch(endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', // Optional, depends on API
                'Accept': 'application/json'
            }
        });

        // Check if the response status indicates success
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }

        // Try to parse JSON (if API returns a body)
        let data = null;
        try {
            data = await response.json();
        } catch {
            // No JSON body returned
        }

        console.log('Resource deleted successfully:', data || 'No content');
        return data;

    } catch (error: any) {
        console.error('Error deleting resource:', error.message);
        throw error; // Re-throw so caller can handle it
    }
}

// Example usage:
// (async () => {
//     const apiBaseUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API
//     const resourceId = 1; // ID to delete
//
//     try {
//         await deleteResource(apiBaseUrl, resourceId);
//     } catch (err) {
//         console.error('Delete operation failed:', err.message);
//     }
// })();

// A reusable async function to make a POST request
export const putData = async (url = '', id:number, data = {}) => {
    try {
        // Perform the fetch request
        const endpoint = `${url}/${encodeURIComponent(id)}`;
        const response = await fetch(endpoint, {
            method: 'PUT', // HTTP method
            headers: {
                'Content-Type': 'application/json', // Sending JSON
                'Accept': 'application/json'        // Expecting JSON
            },
            body: JSON.stringify(data) // Convert JS object to JSON string
        });

        // Check if the response status is OK (2xx)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse and return JSON response
        return await response.json();

    } catch (error:any) {
        // Handle network or parsing errors
        console.error('Error during PUT request:', error.message);
        throw error; // Re-throw so caller can handle it
    }
}

export const sortBy = (field:string, arr:Transaction[]) => {
  // Create a shallow copy so we don't mutate original array
  const sorted = [...arr];

  switch (field) {
    case 'Latest':
      return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    case 'Oldest':
      return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    case 'A to Z':
      return sorted.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    case 'Z to A':
      return sorted.sort((a, b) =>
        b.name.localeCompare(a.name)
      );

    case 'Highest':
      return sorted.sort((a, b) => b.amount - a.amount);

    case 'Lowest':
      return sorted.sort((a, b) => a.amount - b.amount);

    default:
      return sorted; // no sorting if field doesn't match
  }
};

export const getUniqueCategory = (arr:Transaction[]) => {
    //Return an array of the unique Categories properties within the Transactions array
      // .filter(obj > obj && typeof obj === "object" && prop in obj) // ensure valid objects
  return [...new Set(arr.map(obj => obj.category))].sort(); }