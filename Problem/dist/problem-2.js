"use strict";
{
    function removeDuplicates(ara) {
        return Array.from(new Set(ara));
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 5, 5]));
    console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
}
