let mark={
    Tamil:182,
    English:174,
    Maths:172,
    Chemistry:165,
    Physics:170,
    Biology:142
}
    if(mark.Physics>=160 && mark.Chemistry>=160 && mark.Maths>=160 && mark.Biology>=160){
        console.log("You are eligible for Dental collage");
    }
    else if((mark.Tamil>=150 || mark.English>=150) && mark.Maths>=150 && mark.Physics>=160){
        console.log("Eligible for Enginerring collage")
    }
    else if((mark.Chemistry>=140 || mark.Physics>=140) && mark.Biology>=140 && mark.Maths>=140){
        console.log("You are eligible for Arts collage")
    }else{
        console.log("You are not eligible for any courses")
    }
   