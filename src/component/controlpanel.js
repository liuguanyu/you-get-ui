import React from 'react';

const {ipcRenderer} = require('electron');

let ControlPanel = React.createClass({
	_handlePlus: function (event) {
		event.preventDefault();

		ipcRenderer.send("new-task");
	},

	render: function (){
		return (
          <ul className="control-panel">
              <li>
                <a className="fa fa-plus js-add" onClick={this._handlePlus} href=""></a>
              </li>
              <li>
                <a className="fa fa-minus" href="">-</a>
              </li>
              <li>
                <a className="fa fa-sort" href=""></a>
              </li>
              <li>
                <a className="fa fa-cog" href=""></a>
              </li>
           </ul>			
		)
	}
});

module.exports = ControlPanel;