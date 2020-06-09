import React from 'react';
import Box from './Box';
import './box.css';
import Table from "./Table";
class BoxesGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

         
          // newboard: [[1,1,17,5,2],[6,'+',1,'+','1','=',8],['+',' ','+',' ','+ '],[2,'+',17,'+',1,'=',20],['+',' ','*',' ','+ '],[2,'+',2,'+',5,'=',9],['=',' ','=',' ','='],[10,' ',36,' ',6]]
          newboard: [[1,1,17,5,2],[6,'+',1,'+',' ','=',8],['+',' ','+',' ','+'],[2,'+',' ','+',1,'=',20],['+',' ','*',' ','+ '],[2,'+',' ','+',' ','=',9],['=',' ','=',' ','='],[10,' ',35,' ',7]],
          answer:{
            r1:8,
            r3:20,
            r5:9,
            c0:10,
            c2:35,
            c4:7
          },
          
            r1:false,
            r3:false,
            r5:false,
            c0:false,
            c2:false,
            c4:false

          
        };
        this.updateTable = this.updateTable.bind(this);
      }

      swapBoxes = (fromBox, toBox) => {
        let operators = ['+','+','+','+','+','+','*','+','+','+','+','+'];
          console.log(fromBox,toBox);
          var table = document.getElementById('mytable');
          console.log(table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='=')
          
          if(table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!==' '&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='='&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='/'&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='*'&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='-'&&table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML!=='+'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='/'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='*'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='-'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='+'&&table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML!=='=')
          {

              var temp1  = table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML;
              table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML = table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML;
              table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML = temp1;

          }
          console.log(parseInt(table.rows[fromBox.row].cells[fromBox.col].childNodes[0].innerHTML)+parseInt(table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML))
 
          this.updateTable(toBox);
         
          if(toBox.row=='1'||toBox.row=='3'||toBox.row=='5'){

            let x = parseInt( table.rows[toBox.row].cells[toBox.col].childNodes[0].innerHTML );
            console.log('row is'+toBox.row);
 
          }
         

      };
    
      updateTable(toBox){
        let fboard = [];
        var table = document.getElementById('mytable');
        for( var i=0; i<table.rows.length; i++ ) {
          fboard.push( [] );
        }
        for (var r = 0, n = table.rows.length; r < n; r++) {
            for (var c = fboard[r].length, m = table.rows[r].cells.length; c < m; c++) {
                fboard[r].push(table.rows[r].cells[c].childNodes[0].innerHTML);
            }
        }
        console.log(fboard)
      this.setState({
       newboard:fboard
      },()=>{
       console.log(fboard)
      })
      let rowarr = [];
      let coarr = [];
      for(let i=0;i<5;i++){
        
          rowarr[i]=fboard[toBox.row][i];
          if(rowarr[i]==' '){
            rowarr[i]=0;
          }
        } console.log("rowarr is"+rowarr)
    for(let i =0;i<6;i++){
      coarr[i]=fboard[i][toBox.col];
      if(coarr[i]==' '){
        coarr[i]=0;
      }
    }coarr.shift();
    console.log("colarr "+coarr);
 
     var v = rowarr.join('');
    var w =coarr.join('');
    console.log(w);
    var ac = eval(w);
    var ar = eval(v);
    console.log("colarr "+w)
    console.log("col answer is "+ac)
    console.log("row answer is "+ar)
    console.log( `${toBox.row}`)
   // var o = 
    if(Object.values(this.state.answer).includes(ar)){
      console.log('********************');
      this.setState({
       [ `r${toBox.row}`]:true
      },()=>{
        console.log(this.state)
      })

    }
    else{
      this.setState({
        [ `r${toBox.row}`]:false
       },()=>{
         console.log(this.state)
       })
    }

      }
    handleDragStart = data => event => {
       // console.log(data)
      let fromBox = JSON.stringify({ row: data.row, col: data.col });
      //let fromBox = JSON.stringify({ id: data.id });
      //let fromBox = {id:data.id}
      event.dataTransfer.setData("dragContent", fromBox);
    };

    handleDragOver = data => event => {
       // console.log(data)
      event.preventDefault(); // Necessary. Allows us to drop.
      return false;
    };

    handleDrop = data => event => {
       // console.log(data)
      event.preventDefault();
      if(data.row==2||data.row==4){
        return;
      }
      let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
      let toBox = { row: data.row, col:data.col };
      //let toBox = {id:data.id}
    
      this.swapBoxes(fromBox, toBox);

      return false;
    };
    componentDidMount(){

    }
    
    render() {
      return <div>
      <div >
        <Table newboard={this.state.newboard}
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}/>
      </div>


          { console.log(this.state)}
      </div>
    }
    }
  export default BoxesGroup;