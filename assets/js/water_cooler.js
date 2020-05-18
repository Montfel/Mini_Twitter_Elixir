let WaterCooler = {
    init(socket) {
      let channel = socket.channel('water_cooler:lobby', {})
      channel.join()
      this.listenForChats(channel)
    },
  
    listenForChats(channel) {
      document.getElementById('btnTwitter').addEventListener('click', function(){
  
        let userName = document.getElementById('user-name').value
        let userMsg = document.getElementById('user-msg').value
  
        channel.push('shout', {name: userName, body: userMsg})
  
        document.getElementById('user-msg').value = ''
      })
  
      channel.on('shout', payload => {      
        let msgBlock = document.getElementById("chat-box");
        msgBlock.insertAdjacentHTML('afterbegin', `<div class="box"><b>${payload.name}</b> Agora mesmo <br> ${payload.body}</div>`)
      })
    }
  }
  
  export default WaterCooler