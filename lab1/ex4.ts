//count string length function
function stringCount(value: string):number{
    return value.length;
}
//count string excluding the edges function
function stringCountTrim(value: string):number{
    return value.trim().length;
}
//function to count the string length with or without edges
function stringCountAndTrim(value: string, option:boolean):number{
    let count: number = 0;
    //if statement to determine which option to print
    if(option == true)
    {
         count = value.length;
    }
    else{
        count = value.trim().length;
    }

    return count;
}
//printing out values
console.log(stringCount("  test1  "));
console.log(stringCountTrim("  test2   "));
console.log(stringCountAndTrim("  test3  ", false));
console.log(stringCountAndTrim("  test3  ", true));
