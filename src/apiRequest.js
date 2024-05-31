const apiRequest = async(url='',Optionobj=null,errMessage=null)=>{
    try{
        const response = await fetch(url,Optionobj);
        if(!response.ok) throw Error('please reload the page');
    }catch(err){
        errMessage=err.message;
    }finally{
    return errMessage;
    }

}
export default apiRequest;