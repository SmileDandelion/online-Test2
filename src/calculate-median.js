function getMedian(arr) {
    var sumMedian = 0;
    var num = 0;
    for (var i = 1; i < arr.length; i += 2) {
        sumMedian += arr[i];
        num++;
    }
    return sumMedian/num;
}
function calculate_median(arr) {

    if (arr.length == 1) {
        return 0;
    }
    if (arr.length == 2) {
        return arr[1];
    }
    else if (arr.length > 2) {
        return getMedian(arr);
    }

}

module.exports = calculate_median;
