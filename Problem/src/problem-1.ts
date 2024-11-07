{
    function sumArray(ara:number[]):number{
        return ara.reduce((sum,current)=>sum+current,0);
    }

    console.log(sumArray([1, 2, 3, 4, 5]));
    console.log(sumArray([1, 2, 3, 8, 5]));
    console.log(sumArray([1, 2, 3, 20, 5]));
}