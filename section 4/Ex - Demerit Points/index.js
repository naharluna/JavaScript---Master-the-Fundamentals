// Speed limit = 70

// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(70);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;


    if(speed < speedLimit + kmPerPoint)
        console.log('OK');


    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        // points ++
        if (points >=12)
            console.log('Lincense suspended');
        else
            console.log('Points', points);
    }

}