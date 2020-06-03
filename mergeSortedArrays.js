function mergeArrays(array1,array2)
{
    if(array1.length === 0)
    {
        return array2;
    }
    if(array2.length === 0)
    {
        return array1;
    }
    const mergedArray=[];
    let aItem = array1[0];
    let bItem = array2[0];
    let i=1;
    let j=1;
    while (aItem || bItem) 
    {
        if(bItem === undefined || aItem < bItem)
        {
            mergedArray.push(aItem);
            aItem = array1[i];
            i++;
        }    
        else
        {
            mergedArray.push(bItem);
            bItem = array2[j];
            j++;
        }
    }
    return mergedArray;
}

console.log(mergeArrays([0,3,4,31], [3,4,6,30]));
