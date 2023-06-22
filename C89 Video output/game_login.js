function addUser() {
    player_1_name =document.getElementById("player1_name_input").value;   
    player_2_name =document.getElementById("player2_name_input").value;
    localStorage.setItem("player_1_name" ,player_1_name);  
    localStorage.setItem("player_2_name" ,player_2_name);  
    window.location="game_page.html";
    }
    player_1_name=localStorage.getItem("player_1_name");
    player_2_name=localStorage.getItem("player_2_name");
    
    player_1_score=0;
    player_2_score=0;
    
    document.getElementById("player_1_name").innerHTML=player_1_name+": ";
    document.getElementById("player_2_name").innerHTML=player_2_name+": ";
    document.getElementById("player_1_score").innerHTML=player_1_score;
    document.getElementById("player_2_score").innerHTML=player_2_score;
    document.getElementById("player_question").innerHTML="Turno para preguntar="+player_1_name;
    document.getElementById("player_answer").innerHTML="Turno para preguntar="+player_2_name;
    function send() {
        word=document.getElementById("word").value;
        word2=document.toLowerCase();
        letra1=word.charAt(1);
        longitudentre2=Math.floor(word.length/2);
        letra2=word.charAt(longitudentre2);
        longitudmenos1=word.length-1;
        letra3=word.charAt(longitudmenos1);
        remplacarletra1=word.replace(letra1,"_");
        remplacarletra2=remplacarletra1.replace(letra2,"_");
        remplacarletra3=remplacarletra2.replace(letra3,"_");
        pregunta="<h4 id='word_display'>p="+remplacarletra3+"</h4>";
        input="<br>respusta=<input type='text'id='input2'>";
        button="<br><button onclick='check()'>Camprobar</button>" 
        fila=pregunta+input+button;  
        document.getElementById("ouput").innerHTML=fila;
        document.getElementById("word").value="";
    }
    turno_pregunta="player_1";
    turno_respuesta="player_2";
    function  check() {
        tener_respuesta=document.getElementById("input2").value;
        respuesta=tener_respuesta.toLowerCase();
        if (respuesta==word) {
          if(turno_respuesta=="player_1") {
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
            }else{
                player_2_score=player_2_score+1;
                document.getElementById("player_2_score").innerHTML=player_2_score; 
            }
    
        }
        if(turno_pregunta=="player_1") {
            turno_pregunta="player_2"
            document.getElementById("player_question").innerHTML="turno para preguntar "+player_2_name;
            }else{
                turno_pregunta="player_1"
            document.getElementById("player_question").innerHTML="turno para preguntar "+player_1_name;
            }
     if(turno_respuesta=="player_1") {
            turno_respuesta="player_2"
            document.getElementById("player_answer").innerHTML="turno para responder "+player_2_name;
            }else{
                turno_respuesta="player_1"
            document.getElementById("player_answer").innerHTML="turno para responder "+player_1_name;
            }
    }