function selfName(first, last){
    return (this.defautlPrefix ? this.defautlPrefix : "Mr.")
        + " "
        + first.slice(0, 1).toUpperCase() + first.slice(1).toLowerCase()
        + " "
        + last.slice(0, 1).toUpperCase() + last.slice(1).toLowerCase()
}
console.log(selfName("adam", "kowal"));
console.log(selfName.call({defautlPrefix: "Mrs."},"Ewa","Nowak"))