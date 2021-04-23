const url = 'http://api-staging.joinbubble.co.uk'

export const api_login = async (email, password) => {

    try{
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "ARRAffinity=59b5ebf1bf006345bf45707dc6aa863d0faff1c322ab4c24e3f07a74567c94bd");
    
        let raw = JSON.stringify({
        "email": email,
        "password": password
        });
    
        let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    
        const result = await fetch(`${url}/auth/local?web=0`, requestOptions)
        const data = await result.json()
        return data

    }catch (err) {console.log(err)}   
}

export const api_getUser = async (token) => {

    try{
        const fullToken = `Bearer ${token}`
        let myHeaders = new Headers();
        myHeaders.append("Authorization", fullToken);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "ARRAffinity=59b5ebf1bf006345bf45707dc6aa863d0faff1c322ab4c24e3f07a74567c94bd");
    
        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
    
        const result = await fetch(`${url}/api/user`, requestOptions)
        const data = await result.json()
        return data 

    }catch (err) {console.log(err)}
}

export const api_getBookings = async (token) => {

    try{
        const fullToken = `Bearer ${token}`
        let myHeaders = new Headers();
        myHeaders.append("Authorization", fullToken);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "ARRAffinity=59b5ebf1bf006345bf45707dc6aa863d0faff1c322ab4c24e3f07a74567c94bd");
    
        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
    
        const result = await fetch(`${url}/api/booking/activesummary`, requestOptions)
        const data = await result.json()
        return data 

    }catch (err) {console.log(err)}
}

export const api_getLocalSitters = async (token) => {

    try{
        const fullToken = `Bearer ${token}`
        let myHeaders = new Headers();
        myHeaders.append("Authorization", fullToken);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "ARRAffinity=59b5ebf1bf006345bf45707dc6aa863d0faff1c322ab4c24e3f07a74567c94bd");
    
        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
    
        const result = await fetch(`${url}/api/search`, requestOptions)
        const data = await result.json()
        return data 
        
    }catch (err) {console.log(err)}
}

export const api_getBooking = async (token,id) => {

    try{
        const fullToken = `Bearer ${token}`
        let myHeaders = new Headers();
        myHeaders.append("Authorization", fullToken);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "ARRAffinity=59b5ebf1bf006345bf45707dc6aa863d0faff1c322ab4c24e3f07a74567c94bd");
    
        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
    
        const result = await fetch(`${url}/api/booking/${id}`, requestOptions)
        const data = await result.json()
        return data 

    }catch (err) {console.log(err)}
}