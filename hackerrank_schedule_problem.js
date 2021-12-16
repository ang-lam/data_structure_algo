const arrival = [1,3,3,5,7]
const duration = [2,2,1,2,1]

const problem = (arrival, duration) => {
    const intervals = new Array(arrival.length)
    for (let i=0; i < intervals.length; i++){
        let end = arrival[i] + duration[i]
        intervals[i] = [arrival[i], end]
    }
    
    intervals.sort((a,b) => a[1] != b[1]? a[1] - b[1]: a[0] - b[0])

    const hash = {}
    let maxEvents = 0
    for (const slot of intervals){
        let end = slot[1]
        let start = slot[0]
        let i = start
        while (i < end){
            if(i in hash){
                break
            }
            hash[i] = true
            i++
        }
        if (i >= end){
            maxEvents++
        }
    }
    return maxEvents
}

problem(arrival, duration)