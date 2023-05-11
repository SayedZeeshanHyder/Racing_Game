let x=0;
let pos=0;
let pos1=0;
let p=1;
function numbergeneator()
{
    let a=Math.random();
    a=a*10;
    if(a>0 && a<1.51)
    x=1;
    else if(a>=1.51 && a<3)
    x=2;
    else if(a>=3 && a<4.51)
    x=3;
    else if(a>=4.51 && a<6)
    x=4;
    else if(a>=6 && a<7.51)
    x=5;
    else
    x=6;
}
function roll()
{
    if(p==1){
    numbergeneator();
    if(x==1){
        pos=pos+1.5;
        document.getElementById("carmove").style="transition: 3s";
        document.getElementById("diceroll").src="https://img.freepik.com/premium-photo/all-one-numbered-faces-white-dice_172429-625.jpg?w=740";
        document.getElementById("carmove").style="margin-left : " + pos+ "%";
    }
    else if(x==2)
    {
        pos=pos+3;
        document.getElementById("diceroll").src="https://previews.123rf.com/images/francovolpato/francovolpato1205/francovolpato120500323/13760296-the-number-two-the-colorful-face-of-a-dice-with-the-number-two.jpg";
        document.getElementById("carmove").style="margin-left : "+ pos +"%";
    }
    else if(x==3)
    {
        pos=pos+4.5;
        document.getElementById("diceroll").src="https://previews.123rf.com/images/francovolpato/francovolpato1205/francovolpato120500322/13760297-the-number-three-the-colorful-face-of-a-dice-with-the-number-three.jpg";
        document.getElementById("carmove").style="margin-left : "+ pos+"%";
    }
    else if(x==4)
    {
        pos=pos+6;
        document.getElementById("diceroll").src="https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-illustration-red-dice-games-casinos-points-d-rendering-170140095.jpg";
        document.getElementById("carmove").style="margin-left : "+ pos+"%";
    }
    else if(x==5)
    {
        pos=pos+7.5;
        document.getElementById("diceroll").src="https://media.istockphoto.com/id/878671788/photo/red-dice-with-number-five-on-the-top-on-white-background.jpg?s=612x612&w=is&k=20&c=aBeFD3mc5hFetjG8hPnw-7vEEWdVRQ7smZGRG2gTM6E=";
        document.getElementById("carmove").style="margin-left : "+ pos+"%";
    }
    else{
        pos=pos+9;
        document.getElementById("diceroll").src="https://media.istockphoto.com/id/184351886/photo/lucky-red-dice.jpg?s=612x612&w=0&k=20&c=6EZL7Dcdcg8wBZ2xE5VcezBMPSpAnZYH2FX6VEcqO00=";
        document.getElementById("carmove").style="margin-left : "+ pos+"%";
    }
    if(pos>70)
    {
        document.getElementById("rollbutt").style="display : none";
    }
    p=0;
    document.getElementById("txt").innerHTML="Click on the Finish Button to finish your turn !";
    }
    else
    {
        document.getElementById("txt").innerHTML="You Already Played your turn now its CPU's turn click finish turn to let him Play !";
    }
    if(pos>70)
    {
        p=2;
    }
    if(p==2)
    {
        document.getElementById("txt").innerHTML="You Win !";
        document.getElementById("comp").style="display : none";
    }
}
function comp(){
    if(p==0){
    numbergeneator();
    if(x==1){
        pos1=pos1+1.5;
        document.getElementById("ccarmove").style="transition: 3s";
        document.getElementById("cdiceroll").src="https://img.freepik.com/premium-photo/all-one-numbered-faces-white-dice_172429-625.jpg?w=740";
        document.getElementById("ccarmove").style="margin-left : " +pos1+ "%";
    }
    else if(x==2)
    {
        pos1=pos1+3;
        document.getElementById("cdiceroll").src="https://previews.123rf.com/images/francovolpato/francovolpato1205/francovolpato120500323/13760296-the-number-two-the-colorful-face-of-a-dice-with-the-number-two.jpg";
        document.getElementById("ccarmove").style="margin-left : "+ pos1 +"%";
    }
    else if(x==3)
    {
        pos1=pos1+4.5;
        document.getElementById("cdiceroll").src="https://previews.123rf.com/images/francovolpato/francovolpato1205/francovolpato120500322/13760297-the-number-three-the-colorful-face-of-a-dice-with-the-number-three.jpg";
        document.getElementById("ccarmove").style="margin-left : "+pos1+"%";
    }
    else if(x==4)
    {
        pos1=pos1+6;
        document.getElementById("cdiceroll").src="https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-illustration-red-dice-games-casinos-points-d-rendering-170140095.jpg";
        document.getElementById("ccarmove").style="margin-left : "+pos1+"%";
    }
    else if(x==5)
    {
        pos1=pos1+7.5;
        document.getElementById("cdiceroll").src="https://media.istockphoto.com/id/878671788/photo/red-dice-with-number-five-on-the-top-on-white-background.jpg?s=612x612&w=is&k=20&c=aBeFD3mc5hFetjG8hPnw-7vEEWdVRQ7smZGRG2gTM6E=";
        document.getElementById("ccarmove").style="margin-left : "+pos1+"%";
    }
    else{
        pos1=pos1+9;
        document.getElementById("cdiceroll").src="https://media.istockphoto.com/id/184351886/photo/lucky-red-dice.jpg?s=612x612&w=0&k=20&c=6EZL7Dcdcg8wBZ2xE5VcezBMPSpAnZYH2FX6VEcqO00=";
        document.getElementById("ccarmove").style="margin-left : "+pos1+"%";
    }
    document.getElementById("txt").innerHTML="CPU Played its turn Now its your Turn Roll the Dice !";
    }
    else{
        document.getElementById("txt").innerHTML="CPU has Already Played Its your Turn Roll Your Dice !";
    }
    if(pos1>70)
    {
        p=2;
    }
    if(p==2)
    {
        document.getElementById("txt").innerHTML="CPU Wins !";
    }
    p=1;
}