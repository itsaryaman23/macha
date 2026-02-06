let i =0;
let text = document.getElementById("text")
document.getElementById("btn").addEventListener("click",()=>{
    switch(i++)
    {
        case 1: text.innerHTML="I know I get busy sometimes."; document.body.style.backgroundColor="PaleVioletRed"; break;
        case 2: text.innerHTML="Because of the Office";document.body.style.backgroundColor="Tomato"; break;
        case 3: text.innerHTML="But trust me you are very important to me.";document.body.style.backgroundColor="DarkKhaki"; break;
        case 4: text.innerHTML= "Please forgive me Macha...🥺"; document.body.style.backgroundColor="Orchid";break;
        case 5: text.innerHTML= "I really missed you 🫂"; document.body.style.backgroundColor="Teal";break;
        case 6: text.innerHTML= "I need your anbu ❤️"; document.body.style.backgroundColor="Gold";break;
        case 7: text.innerHTML= "These are some flowers for you 🌹🪻🌺🌸🌼🌻"; document.body.style.backgroundColor="SteelBlue";break;
        case 8: text.innerHTML= "Pleaseeeee forgive me... pleaseeee 🥺"; document.body.style.backgroundColor="MediumPurple";break;
        case 9: text.innerHTML= "Now text me pleaseeeee."; document.body.style.backgroundColor="Olive";break;

    }
})