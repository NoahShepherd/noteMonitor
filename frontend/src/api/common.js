const Get = async (path,auth=null) => {
    try {
      const response = await fetch(`${path}`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
        },
        auth,
      });
      const result = await response.json()

      return {staus:200,data:result.data,msg:result.msg}
    } catch (error) {
      console.log('Error fetching data:', error);
      // log
      return {staus:500,err:error}
    }
};
const Post = async (path,data=null,auth=null) => {
    try {
        const response = await fetch(`${path}`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            auth
        });
        const result = await response.json()

        return {staus:200,data:result.data,msg:result.msg}
    } catch (error) {
        console.log('Error fetching data:', error);
        // log
        return {staus:500,err:error}
    }
};
const Put = async (path,data,auth=null) => {
    try {
        const response = await fetch(`${path}`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            auth
        });
        const result = await response.json()

        return {staus:200,data:result.data,msg:result.msg}
    } catch (error) {
        console.log('Error fetching data:', error);
        // log
        return {staus:500,err:error}
    }
};
const Del = async (path,data=null,auth=null) => {
    try {
        const response = await fetch(`${path}`,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            auth
        });
        const result = await response.json()

        return {staus:200,data:result.data,msg:result.msg}
    } catch (error) {
        console.log('Error del data:', error);
        // log
        return {staus:500,err:error}
    }
};

export {Get,Post,Put,Del}