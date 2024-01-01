$(function(){
    
    function load(){                                                            //funkcja pobierająca api strony
        return fetch('https://cat-fact.herokuapp.com/facts')
        .then (inf =>{
            if(inf.ok){
                return inf.json();
            }
            else{
                return Promise.reject(`Http error: ${inf.status}`);
            }
        })
    }
    
    load().                                                                        //test funkcji
    then( inf =>{
        console.log(inf);
    })

    $('#ciekawosta').click(function(){                                          //funkcja aktywowana przyciskiem losująca ciekawostke
        var liczba = Math.floor(Math.random()*5);
    
        load().
        then( inf =>{

            $('#ciekawosteczka').text(inf[liczba].text);
            $('#data').text("Stworzone: "+ inf[liczba].updatedAt);
            $('#autor').text("Id twórcy: "+ inf[liczba].user);
        })
    })

    $('#wybierz').click(function(){                                             //funkcja wyszukująca ciekawostke wybraną przez użytkownika
        var wybrana = document.getElementById("numer").value;
        load().
        then( inf =>{
            $('#ciekawosteczka').text(inf[wybrana-1].text);
            $('#data').text("Stworzone: "+ inf[wybrana-1].updatedAt);
            $('#autor').text("Twórca: "+ inf[wybrana-1].user);
        })
    })
})