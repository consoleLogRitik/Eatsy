export function filterData(restarauntList,inputTxt) {
    
    const filteredList = restarauntList.filter((a)=>{
        if(a.info.cuisines.find((words)=>words.toLowerCase().includes(inputTxt.toLowerCase()))){
            return true;
        }
        else{
            return false;
        }
    })
    return filteredList;
}
