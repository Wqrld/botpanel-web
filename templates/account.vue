
<template>
	<div id="root">





    <div class="hello">
	            <b-icon
                icon="account"
                size="is-small">
            </b-icon> {{ $route.params.username }}</div>


       <section class="section chatbox" id="chatbox">
    <ul id="messages"></ul>
  </section>



    <section class="section">
    
      <div class="tile is-primary">
      <button class="button" id="butn" onclick="sendmsg()">Send</button><button class="button" id="jumpbutn" onclick="jump()">Jump</button><form name="chatform" class="chatform" 
      method="post" 
      action="myServlet" 
      onsubmit="sendmsg(); 
      return false;"
>
<input class="input" id="m" autocomplete="off" /></form>
    
  </div>


<div id="name" style="display: none">{{ $route.params.username }}</div>
</div>
</template>


<script>
	

console.log("accountpage loaded")

console.log(app.$route.params);
//for(i=0; i < 25; i++){
//$('#messages').append("<li>" + "d" + "</li>");
  //       }
    </script>
<style>
.chatform{
  width:100%;
}
.hello {
    background-color: #ffe;

}
.chatbox {
margin-top: 2rem;
overflow: auto;
overflow-y: scroll;
max-height: 600px;
}
#messages {
	background-color: #363232;
}
</style>
