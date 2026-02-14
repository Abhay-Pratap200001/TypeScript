//This is called union type where we can give multiple datatypes to our variable and that variable will accept only those db 

let subs: number | string  = 10  

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'
apiRequestStatus = 'error'

let airlineSeat: 'aisel' | 'window' | 'middle' = 'aisel'
airlineSeat = 'window'


const orders = ['12', '20', '28', '42']

let currentorder: string | undefined;

for (let order of orders) {
    if (order === '20') {
        currentorder = order
    }
}

console.log(currentorder);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////