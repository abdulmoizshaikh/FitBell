export function calculateDistance (lat1, lon1, lat2, lon2) {
    // console.log("lat1, lon1, lat2, lon2", lat1, lon1, lat2, lon2)
    let R = 6371; // km
    let dLat = toRad(lat2 - lat1);
    let dLon = toRad(lon2 - lon1);
    let dlat1 = toRad(lat1);
    let dlat2 = toRad(lat2);
    
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(dlat1) * Math.cos(dlat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    // console.log("d--------", d)
    // if (d>1) return Math.round(d)+"km";
	// else if (d<=1) return Math.round(d*1000)+"m";
    return Math.round(d*0.621)+" miles" ; // 1 km = 0.621 m
}
function toRad(Value) {
    return Value * Math.PI / 180;
}