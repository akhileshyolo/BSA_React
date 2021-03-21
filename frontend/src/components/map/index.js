import React,{Component} from "react";

export default class Map extends Component {
  constructor(props){
    super(props);
    this.urlParams = new URLSearchParams(window.location.search);
    this.country = this.urlParams.get('country');
  }
  componentDidMount() {
      var setting = {"height":538,"width":803,"zoom":7,"queryString":`${this.country}`,"place_id":"ChIJfyqdJZsHbUcRr8Hk3XvUEhA","satellite":true,"centerCoord":[47.71329161825777,13.345758152604072],"cid":"0x1012d47bdde4c1af","lang":"en","cityUrl":"/austria/salzburg","cityAnchorText":"Map of Salzburg, Austrian Alps, Austria","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"433512"};
      var s = document.createElement('script');
      s.src = 'https://1map.com/js/script-for-user.js?embed_id=433512';
      s.async = true;
      s.onload = function (e) {
        window.OneMap.initMap(setting)
      };
      var to = document.getElementsByTagName('script')[0];
      to.parentNode.insertBefore(s, to);
  }
  render() {
    return (
      <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
          <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3">
          
          </div>
      </div>
    );
  }
}
