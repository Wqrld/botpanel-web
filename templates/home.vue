<script>

console.log("homepage loaded");
socket.emit('names');
</script>
<template>
	<div id="root">

<ul>
                <li v-for="bot in $root.bots">
                    <router-link :to="'/account/' + bot.name">

                        <b-icon icon="account" size="is-small">
                        </b-icon> {{ bot.name }}
                    </router-link>
                </li>
            </ul>
      <div class="tile is-primary">
      <button class="button" id="butn" onclick="sendglobal()">Send Command</button><input placeholder="without /" class="input" id="m" autocomplete="off" />
      </div>
      <div class="tile is-primary">
      <button class="button" id="butn" onclick="setip()">Set IP</button><input class="input" id="ip" placeholder="crownme.com" autocomplete="off" />
    
  </div>
      <div class="tile is-primary">
      <button class="button" id="butn" onclick="setjoincommand()">Set join command</button><input class="input" id="joincommand" placeholder="/play factions" autocomplete="off" />
    
  </div>
</div>


</template>



<style>

</style>
