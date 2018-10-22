<script>
  console.log("loginpage loaded");
</script>
<template>
	<div id="root">





    <div class="hello">
	            <b-icon
                icon="account"
                size="is-small">
            </b-icon> test</div>


       <section class="section">
    <ul id="messages"></ul>
  </section>



    <section class="section">
    
      <div class="tile is-primary">
      <button class="button" id="btn-login" onclick="login()">login</button>
    
  </div>



</div>


</template>



<style>
.hello {
    background-color: #ffe;
}
#messages {
	background-color: hsl(0, 0%, 71%);
}
</style>
