<template>
    <div class="content">
      <canvas id="canvas" :width="canvas.width" :height="canvas.height" ></canvas>
    </div>
    <button style="left:0px" @click="click_1"></button>
    <button style="left:150px"@click="click_2"></button>
    <button style="left:300px" @click="click_3"></button>
</template>

<script>
    import CanvasBrush from '../libs/CanvasBrush.js'
    import config from '../../config.js'
    export default {

        ready() { 
            this.cb = CanvasBrush.init('canvas');
            this.cb.params = {
                color: 'red', 
                radius: '2', //1-10
            }
            this.cb.start();
            console.log(config.WebSocket.host+ config.WebSocket.port+1)
            this.ws = new WebSocket(config.WebSocket.host + config.WebSocket.port+1);
            this.ws.binaryType = "arraybuffer";
            this.ws.onopen = (evt) =>{
                console.log(1);
            };
            var options = null;
            CanvasBrush.server(this.ws, options, function(data){
                
            });
            
            this.ws.onmessage = (evt) => {
                this.cb.drawWithData(evt.data);
            }
        },

        data() {
            return {
                canvas: {
                    width: document.body.offsetWidth + 'px',
                    height: (document.body.offsetHeight - 2.5*document.body.offsetWidth/20) + 'px'
                }
            }
        },

        methods: {
            click_1() {
                console.log(this.cb)
                this.cb.pause()
            },
            click_2() {
                console.log(this.cb)
                this.cb.resume()
            },
            click_3() {
                console.log(this.cb)
                this.cb.clear()
            }
        },
        
        components: {
          
        },

        vuex: {
            getters: {
               
                
            },
            actions: {
                
            }
        }
    }
</script>
<style scoped>

canvas {
    background-color: white;
}
button {
    background-color: red;
    z-index: 100000;
    position: absolute;
    width: 100px;
    height: 20px;
}



</style>
