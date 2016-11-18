/**
 * @ author: 邢东朋
 * @ desc: canvas绘画
 * @ time: 2016-10-28
*/
var CanvasBrushController = [];


function CanvasBrush(el) {

    // 创建私有对象
    this.el = document.getElementById(el);
    this.ctx = this.el.getContext('2d');

    this.params = {
        color: '', 
        radius: 1   
    }

    this.extend = undefined;
    this.state = '';
    this._moveDatas = [];
    this._startDatas = [];
    this._endDatas = [];

    // 发送数据和定时器
    this._sendDatas = [];
    this._timer = '';
    
    // 初始化方法
    this.datasInit();
    
}

// 开始绘画
CanvasBrush.prototype.start = function() {
    this.bind();
}

// 暂停
CanvasBrush.prototype.pause = function() {
    this.state = 'pause';
}

CanvasBrush.prototype.resume = function() {
    this.state = 'resume'
}

// 清空画布
CanvasBrush.prototype.clear = function() {
    this.el.width = this.el.width;
    this.el.height = this.el.height;
    this.ctx.clearRect(this.el.offsetLeft, this.el.offsetTop, this.el.width, this.el.height);
    this._moveDatas = [];
    this._startDatas = [];
    this._endDatas = [];
    this.moveDatas = [];
    this.startDatas = [];
    this.endDatas = [];
}

// 接收数据并绘图
CanvasBrush.prototype.drawWithData = function(data) {
    var decodeData = Decode(data);
    var startPoint = decodeData[0].split(',');
    this.ctx.lineWidth = startPoint[4];
    this.ctx.strokeStyle = startPoint[3];
    this.ctx.moveTo(startPoint[0], startPoint[1]);
    window.i = 0;
    window.decodeData = decodeData;
    window.ctx = this.ctx
    window.xdpTimer = function() {
        var time = 0;
        window.arr = window.decodeData[window.i].split(',');
        window.old_arr = [0,0,0,0,0];
        if(window.i>0){
            window.old_arr = window.decodeData[window.i-1].split(',');
        }
        window.i = window.i + 1;
        window.ctx.lineTo(window.arr[0], window.arr[1])
        window.ctx.stroke();
        if(window.i === window.decodeData.length) {
            return;
        }
        console.log(window.decodeData)
        setTimeout('xdpTimer()',10)
    }

    xdpTimer();
}

// 状态管理
CanvasBrush.prototype.stateController = function() {
    if(this.state === 'pause'){
        return true
    }else {
        return false
    }
}
// 初始化三个响应式对象
CanvasBrush.prototype.datasInit = function() {
    Object.defineProperty(this, "moveData", {
        set: (newValue) => { 
            this.Move(newValue, this._moveDatas[this._moveDatas.length -1]);
            this._moveDatas.push(newValue);
            this.extend !== undefined && this.extend('move', this._moveDatas)
        },
        get: () => {
            return this._moveDatas[this._moveDatas.length -1];
        }
    })
    
    Object.defineProperty(this, "startData", {
        set: (newValue) => { 
            this.Start(newValue, this._startDatas[this._startDatas.length -1]);
            this._startDatas.push(newValue);
            this.extend !== undefined && this.extend('start', this._startDatas)
        },
        get: () => {
            return this._startDatas[this._startDatas.length -1]
        }
    })

    Object.defineProperty(this, "endData", {
       set: (newValue) => {
            this.End(newValue,this._endDatas[this._endDatas.length -1]);
            this._endDatas.push(newValue);
            this.extend !== undefined && this.extend('end',this._endDatas)
        },
        get: () => {
            return this._endDatas[this._endDatas.length -1];
        }
    });
}

// 监听触摸事件
CanvasBrush.prototype.bind = function() {
    this.el.addEventListener('touchmove', (evt) => {
        // 响应状态
        if (this.stateController())
            return;
        evt.preventDefault();
        // 默认只处理第一个触摸屏幕的手指
        this.moveData = {
            'changedTouch': evt.changedTouches[0],
            'timeStamp': evt.timeStamp
        }
    })

    this.el.addEventListener('touchstart', (evt) => {
        // 响应状态
        if (this.stateController())
            return;
        evt.preventDefault();
        this.startData = {
            'changedTouch': evt.changedTouches[0],
            'timeStamp': evt.timeStamp
        }
    })

    this.el.addEventListener('touchend', (evt) => {
        // 响应状态
        if (this.stateController())
            return;
        evt.preventDefault();
        this.endData = {
            'changedTouch': evt.changedTouches[0],
            'timeStamp': evt.timeStamp
        }
    })
}

// 三个动作Start、Move、End
CanvasBrush.prototype.Start = function(newValue,oldValue) {
    this.ctx.lineWidth = this.params.radius;
    this.ctx.strokeStyle = this.params.color;
    this.ctx.moveTo(newValue.changedTouch.clientX, newValue.changedTouch.clientY);
}

CanvasBrush.prototype.Move = function(newValue,oldValue) {   
    this.ctx.lineTo(newValue.changedTouch.clientX,newValue.changedTouch.clientY);//第二个点
    this.ctx.stroke();
}

CanvasBrush.prototype.End = function(newValue,oldValue) {
    
}

/**
 * @ 暴露给外部的接口
*/

/**
 * @ struct:
 *  {
 *    data: X,Y
 *    timeStamp: String,
 *    color: String,
 *    radius: Number
 *  }
*/ 
const  Encode = (data, params) => {
    var changedTouch = data[data.length-1].changedTouch;
    var str = `${changedTouch.clientX},${changedTouch.clientY},${data[data.length-1].timeStamp},${params.color},${params.radius}`
    return str;
}
const  Decode = (string) =>  string.split(',xdp,')

module.exports = {

    init: function(el) {
        var CB = new CanvasBrush(el)
        CanvasBrushController.push(CB)
        return CB
    },
    server: function(ws, op, callback) {
        for (var item in CanvasBrushController) {
            // 一个周期内被调用三次  start、move、end
            CanvasBrushController[item].extend = function(type, data) {

                var encodeData = Encode(data, this.params);                
                this._sendDatas.push(encodeData);
                if(type=='end'|| this._sendDatas.length > 200){
                    ws.send(this._sendDatas)
                    this._sendDatas = [];
                    if(type !== 'end') {
                        this._sendDatas.push(encodeData)
                    }
                }else {
                    this._sendDatas.push('xdp');
                }
                callback();
            }
        }
    }
}

